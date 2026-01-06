import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8 sm:py-12">
      <div className="article-container">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">🐕</span>
          </div>
          <span className="font-serif text-lg font-bold text-primary">Smart Pet Journal</span>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-6">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
          <Link to="/disclaimer" className="hover:text-primary transition-colors">
            Disclaimer
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground mb-6">
          © {currentYear} Smart Pet Journal. All Rights Reserved.
        </p>

        {/* Legal Disclaimer */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. This site is also not a part of the Google website or Alphabet Inc. Additionally, this site is NOT endorsed by Google in any way. GOOGLE is a trademark of ALPHABET, Inc. ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
