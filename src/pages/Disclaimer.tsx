import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Disclaimer = () => {
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
          Disclaimer
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">
            Last Updated: January 6, 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              General Disclaimer
            </h2>
            <p>
              The information provided on this website is for general informational and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Results Disclaimer
            </h2>
            <p>
              Individual results may vary. The testimonials and examples used are exceptional results and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on their background, dedication, and the effort they put into applying the training methods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Professional Advice Disclaimer
            </h2>
            <p>
              The content on this website is not intended to be a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of your veterinarian or other qualified animal health provider with any questions you may have regarding your dog's health or behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Affiliate Disclaimer
            </h2>
            <p>
              This website may contain affiliate links. If you make a purchase through these links, we may earn a commission at no additional cost to you. We only recommend products we believe will add value to our readers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Earnings Disclaimer
            </h2>
            <p>
              Any earnings or income statements are estimates only. There is no guarantee that you will make any money using the techniques and ideas presented. Examples of results are not to be interpreted as a promise or guarantee of earnings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              External Links Disclaimer
            </h2>
            <p>
              This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Facebook Disclaimer
            </h2>
            <p>
              This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Google Disclaimer
            </h2>
            <p>
              This site is not a part of Google LLC or Alphabet Inc. This site is NOT endorsed by Google in any way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:{" "}
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

export default Disclaimer;
