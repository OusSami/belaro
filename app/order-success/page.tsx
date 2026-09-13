import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center max-w-2xl">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="h-20 w-20 text-green-500" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Payment Successful!</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Thank you for your purchase. We've sent a receipt and download instructions to your email address.
      </p>
      <div className="bg-muted p-6 rounded-lg mb-8 text-left">
        <h3 className="font-semibold mb-2">Next Steps</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Check your email for the download links.</li>
          <li>Make sure to save the files to a secure location.</li>
          <li>Review our license agreement for usage terms.</li>
        </ul>
      </div>
      <Button asChild size="lg">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
