import { Button } from "@/components/ui/Button";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Belaro support team.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">Contact Us</h1>
          <p className="text-xl font-medium text-primary/80 max-w-2xl mx-auto">
            Have a question about an asset, your order, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-card border-2 border-primary shadow-hard p-10 h-fit">
            <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-primary pb-4">Company Details</h3>
            
            <div className="space-y-6 font-bold">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 text-accent" />
                <div>
                  <p className="mb-1 text-primary/70 uppercase text-sm tracking-wider">Address</p>
                  <p>{COMPANY_NAME}</p>
                  <p>{COMPANY_ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 text-accent" />
                <div>
                  <p className="mb-1 text-primary/70 uppercase text-sm tracking-wider">Email</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-accent transition-colors underline decoration-2 underline-offset-4">{COMPANY_EMAIL}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 text-accent" />
                <div>
                  <p className="mb-1 text-primary/70 uppercase text-sm tracking-wider">Phone</p>
                  <p>{COMPANY_PHONE}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border-2 border-primary shadow-hard p-10">
            <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-primary pb-4">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-black uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full h-12 border-2 border-primary bg-background px-4 font-bold focus:outline-none focus:ring-4 focus:ring-accent/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-black uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-12 border-2 border-primary bg-background px-4 font-bold focus:outline-none focus:ring-4 focus:ring-accent/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-black uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border-2 border-primary bg-background p-4 font-bold focus:outline-none focus:ring-4 focus:ring-accent/20 resize-none"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
