import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-mark">
                <span className="brand-sprout" />
              </div>
              <div className="brand-text">
                <h3>Jireh Trading Group</h3>
                <p>Since 2019</p>
                <p>Connecting South African farmers to markets with reliable logistics.</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/transport">Transport</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/app">Mobile App</Link></li>
                <li><Link to="/collaborate">Collaborate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>📍 Pongola, KZN</li>
                <li>📞 +27 82 123 4567</li>
                <li>✉️ info@jirehtrading.co.za</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>© {currentYear} Jireh Trading Group. All rights reserved.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="WhatsApp">💬</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
