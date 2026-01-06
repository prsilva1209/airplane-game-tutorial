import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold text-foreground mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          We're here to help! Reach out to us with any questions about Brain Training for Dogs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Email Support
            </h2>
            <p className="text-muted-foreground mb-4">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:support@dogtrainingsolutions.com"
              className="text-primary font-semibold hover:underline"
            >
              support@dogtrainingsolutions.com
            </a>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Response Time
            </h2>
            <p className="text-muted-foreground mb-4">
              We typically respond within 24-48 business hours.
            </p>
            <p className="text-foreground font-semibold">
              Monday - Friday, 9 AM - 5 PM EST
            </p>
          </div>
        </div>

        <div className="bg-cream rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Before contacting us, you might find your answer in our common questions below.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground mb-2">
                How do I access the training program?
              </h3>
              <p className="text-muted-foreground">
                After purchase, you'll receive an email with login credentials to access the member's area where all training materials are available.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">
                What is your refund policy?
              </h3>
              <p className="text-muted-foreground">
                We offer a 60-day money-back guarantee. If you're not satisfied with the program, simply contact us for a full refund.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">
                Will this work for my dog's breed?
              </h3>
              <p className="text-muted-foreground">
                Yes! The brain training methods are effective for all breeds, ages, and temperaments. The techniques work with your dog's natural intelligence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Mailing Address
          </h3>
          <p className="text-muted-foreground">
            Dog Training Solutions<br />
            123 Training Lane<br />
            Pet City, ST 12345<br />
            United States
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
