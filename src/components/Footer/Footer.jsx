// Footer.jsx - UPDATED VERSION
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Footer.css";

// Import Logo
import logo from "../../assets/images/logo.png"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        {/* TOP SECTION */}
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">

              {/* BRAND SECTION */}
              <div className="footer-brand">
                <Link to="/" className="footer-logo-link">
                  <div className="brand-mark logo-box">
                    <img
                      src={logo}
                      alt="Jireh Trading Group Logo"
                      className="footer-logo"
                    />
                  </div>
                </Link>

                <div className="brand-text">
                  <h3>Jireh Trading Group</h3>
                  <p>Since 2019</p>
                  <p>
                    Connecting South African farmers to markets with reliable
                    logistics.
                  </p>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/transport">Services</Link></li>
                </ul>
              </div>

              {/* LEGAL */}
              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  <li><Link to="/terms">Terms & Conditions</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="footer-section">
                <h4>Contact Info</h4>
                <ul>
                  <li>📍 Durban, KZN</li>
                  <li>📞 +27 78 738 2435</li>
                  <li>✉️ info@jirehtradinggroup.co.za</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="container">
            <div className="bottom-content">
              <p>
                © {currentYear} Jireh Trading Group. All rights reserved.
              </p>
              
              {/* Legal Links in Bottom Bar (optional) */}
              <div className="bottom-legal-links">
                <Link to="/terms">Terms</Link>
                <span className="separator">•</span>
                <Link to="/privacy">Privacy</Link>
              </div>

             <p className="developer-credit">
  Developed by{" "}
  <a 
    href="https://afribizconnect.co.za/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="developer-link"
  >
    Afribiz Connect
  </a>
</p>
            </div>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
};

export default Footer;