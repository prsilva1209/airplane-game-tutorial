import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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

        <h1 className="text-4xl font-extrabold text-foreground mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">
            Last Updated: January 6, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              2. Intellectual Property
            </h2>
            <p>
              The content on this website, including but not limited to text, graphics, images, and software, is the property of Dog Training Solutions and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              3. Use License
            </h2>
            <p>
              Permission is granted to temporarily access the materials on our website for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
              <li>Transferring the materials to another person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              4. Product Information
            </h2>
            <p>
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              5. Payment Terms
            </h2>
            <p>
              Payment for products is processed through secure third-party payment processors. By making a purchase, you agree to provide accurate payment information and authorize us to charge your payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              6. Refund Policy
            </h2>
            <p>
              We offer a 60-day money-back guarantee on our digital products. If you are not satisfied with your purchase, contact us within 60 days for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              Dog Training Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              8. Disclaimer
            </h2>
            <p>
              The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              9. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the website following any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              11. Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at:{" "}
              <a href="mailto:support@dogtrainingsolutions.com" className="text-primary hover:underline">
                support@dogtrainingsolutions.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
