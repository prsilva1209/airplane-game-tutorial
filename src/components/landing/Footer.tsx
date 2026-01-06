import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-background">
              Brain Training for Dogs
            </h3>
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <Link
              to="/privacy-policy"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/disclaimer"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Disclaimer
            </Link>
            <Link
              to="/contact"
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              Contact Us
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-center text-background/50 text-sm space-y-4">
            <p>© 2025 Smart Dog Training. All Rights Reserved.</p>
            <p className="max-w-2xl text-xs">
              This site is not a part of the Facebook website or Facebook Inc.
              Additionally, This site is NOT endorsed by Facebook in any way.
              FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
