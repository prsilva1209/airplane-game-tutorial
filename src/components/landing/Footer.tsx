import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="article-container">
        {/* Legal Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            to="/privacy-policy"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            to="/disclaimer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Disclaimer
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-xs space-y-3">
          <p>© 2025 Smart Dog Training. All Rights Reserved.</p>
          <p className="max-w-xl mx-auto">
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
