// Platform.jsx
import "./Platform.css";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <section className="platform">

      {/* Hero Section */}
      <div className="platform-hero">
        <h1>Jireh Trading Logistics Platform</h1>
        <p>
          A modern web-based system for tracking deliveries, managing invoices,
          and monitoring fleet operations — currently under development.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="btn primary glow">
            🚀 Request Early Access
          </Link>

          <Link to="/contact" className="btn outline">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Status Section */}
      <div className="platform-status">
        <h2>🚧 Platform Status</h2>

        <div className="status-card">
          <h3>Under Active Development</h3>
          <p>
            Our logistics web platform is currently being built. 
            Registered users will be notified when testing begins.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="platform-features">
        <h2>Core Capabilities</h2>

        <div className="features-grid">
          <div className="feature-card">
            <span>📍</span>
            <h3>Live Shipment Tracking</h3>
            <p>Monitor goods movement in real-time.</p>
          </div>

          <div className="feature-card">
            <span>🧾</span>
            <h3>Invoice Management</h3>
            <p>Create, send, and manage invoices digitally.</p>
          </div>

          <div className="feature-card">
            <span>🚛</span>
            <h3>Fleet Monitoring</h3>
            <p>Track vehicle status and locations.</p>
          </div>

          <div className="feature-card">
            <span>📊</span>
            <h3>Business Reports</h3>
            <p>Access performance and delivery analytics.</p>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="platform-preview">
        <h2>System Preview</h2>

        <p>
          The platform dashboard is currently in development. 
          Registered users will receive early preview access.
        </p>

        <Link to="/register" className="btn secondary">
          Join Waiting List
        </Link>
      </div>

      {/* FAQ */}
      <div className="platform-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>Is this a mobile app?</h4>
          <p>No. This is a web-based logistics management system.</p>
        </div>

        <div className="faq-item">
          <h4>When will it be available?</h4>
          <p>Launch dates will be announced to registered users.</p>
        </div>

        <div className="faq-item">
          <h4>How can I get access?</h4>
          <p>Register to be notified when testing begins.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="platform-cta">
        <h2>Ready to Get Started?</h2>

        <p>
          Register now to be among the first users of our logistics platform.
        </p>

        <div className="cta-buttons">
          <Link to="/register" className="btn primary">
            Register Now
          </Link>

          <Link to="/contact" className="btn outline">
            Talk to Us
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Platform;
