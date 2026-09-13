"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "./products";

export type CartItemType = Product & { quantity: number };

type CartState = {
  items: CartItemType[];
  total: number;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
};

function calculateTotal(items: CartItemType[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { items: updatedItems, total: calculateTotal(updatedItems) };
      }
      const newItems = [...state.items, { ...action.payload, quantity: 1 }];
      return { items: newItems, total: calculateTotal(newItems) };
    }
    case "REMOVE_ITEM": {
      const filteredItems = state.items.filter((item) => item.id !== action.payload);
      return { items: filteredItems, total: calculateTotal(filteredItems) };
    }
    case "UPDATE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { items: updatedItems, total: calculateTotal(updatedItems) };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Optional: Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("belaro_cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        // We'd need a specific action to set entire state if we wanted to hydrate fully,
        // but for simplicity we'll just let it be empty on start or implement a hydration action later.
      } catch (e) {}
    }
  }, []);

  // Optional: Save to local storage on change
  useEffect(() => {
    localStorage.setItem("belaro_cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
