import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-particles"></div>

        <div className="hero-content">
          <div className="hero-badge">Since 2019</div>

          <h1 className="hero-title">
            Agricultural Logistics &<br />
            <span>Transport Solutions</span>
          </h1>

          <p className="hero-subtitle">
            Providing reliable transport, shared load services,
            and digital logistics solutions for farmers,
            suppliers, and partners across South Africa.
          </p>

          <div className="hero-buttons">
            {/* Only the main request button stays */}
            <Link to="/contact" className="btn primary glow">
              Request Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">

            <div>
              <h2>Reliable Agricultural Logistics</h2>

              <p>
                Jireh Trading Group provides professional transport
                and logistics solutions that connect producers,
                suppliers, and markets. We focus on efficiency,
                transparency, and long-term partnerships.
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <span className="feature-icon">🚛</span>
                  <span>Vehicle Tracking</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Digital Invoicing</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">🖥️</span>
                  <span>Web Logistics System</span>
                </div>
              </div>

              <Link to="/about" className="text-link">
                Learn More About Us
              </Link>
            </div>

            <div className="about-graphic">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Agricultural logistics and transport"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-preview">
        <div className="container">

          <h2 className="section-title">Our Services</h2>

          <p className="section-subtitle">
            Professional logistics and transport solutions
            designed for agricultural supply chains
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Transport Coordination</h3>
              <p>
                We manage and coordinate reliable transport
                from farms to markets using optimized routes.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Shared Load Services</h3>
              <p>
                Cost-effective shared transport solutions
                that reduce delivery costs for producers.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📦</div>
              <h3>Logistics Management</h3>
              <p>
                End-to-end logistics management including
                tracking, documentation, and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROUTES ================= */}
      <section className="transport-preview">
        <div className="container">

          <div className="transport-content">

            <h2 className="section-title">Service Areas</h2>

            <p className="section-subtitle">
              Key agricultural routes and regions we serve
            </p>

            <p>
              We operate shared-load and dedicated transport
              services across major farming regions and
              distribution hubs.
            </p>

            <div className="routes-grid">
              <div className="route-card">
                <div className="route-icon">📍</div>
                <div className="route-info">
                  <h4>Pongola</h4>
                  <p>KwaZulu-Natal Region</p>
                </div>
              </div>

              <div className="route-card">
                <div className="route-icon">📍</div>
                <div className="route-info">
                  <h4>Limpopo</h4>
                  <p>Northern Provinces</p>
                </div>
              </div>

              <div className="route-card">
                <div className="route-icon">📍</div>
                <div className="route-info">
                  <h4>Eastern Cape</h4>
                  <p>Southern Farming Areas</p>
                </div>
              </div>

              <div className="route-card primary">
                <div className="route-icon">🚛</div>
                <div className="route-info">
                  <h4>Durban & Nationwide</h4>
                  <p>Distribution Network</p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-link">
              Request Transport Services
            </Link>

          </div>
        </div>
      </section>

      {/* ================= LOGISTICS SYSTEM CTA ================= */}
      <section className="webapp-cta">
        <div className="container">

          <h2>Supplier Logistics Platform</h2>

          <p>
            Our web-based logistics system allows approved
            suppliers and partners to monitor shipments,
            track vehicles, and manage invoicing securely.
          </p>

          <div className="cta-buttons">
            <Link to="/contact" className="btn primary glow large">
              Request System Access
            </Link>

            {/* Keep partner button here only */}
            <Link to="/contact" className="btn secondary outlined large">
              Register as Partner
            </Link>
          </div>

          <div className="platform-info">
            <div className="platform-badge">Web Platform</div>
            <div className="platform-badge">Supplier Access</div>
            <div className="platform-badge">Secure System</div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
