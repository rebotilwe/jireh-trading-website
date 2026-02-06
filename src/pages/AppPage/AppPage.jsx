import React from "react";
import "./AppPage.css";

const AppPage = () => {
  return (
    <main className="app-page">
      {/* Hero / Showcase */}
      <section className="app-hero">
        <div className="container">
          <div className="app-hero-content">
            <div className="hero-badge">Available Now</div>
            <h1 className="hero-title">
              Jireh Trading <span>App</span>
            </h1>
            <p>
              Manage orders, track deliveries, and collaborate seamlessly from 
              your phone. Stay connected with South Africa's leading agribusiness network.
            </p>
            <div className="app-buttons">
              <a href="#" className="btn download ios glow" target="_blank" rel="noopener noreferrer">
                📱 iOS App Store
              </a>
              <a href="#" className="btn download android glow" target="_blank" rel="noopener noreferrer">
                🤖 Google Play
              </a>
            </div>
          </div>
          <div className="app-hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="status-bar">
                    <span>9:41</span>
                    <span>📶 📡 🔋 92%</span>
                  </div>
                  <div className="app-header">
                    <div className="header-left">🚛</div>
                    <span>Jireh Trading</span>
                    <div className="header-right">☰</div>
                  </div>
                  <div className="app-content">
                    <div className="order-card">
                      <div className="order-status">🟢 On Route</div>
                      <div className="order-details">
                        <span>Mangoes - 2 tons</span>
                        <span>ETA: 14:30</span>
                      </div>
                    </div>
                    <div className="quick-actions">
                      <button>📞 Call Driver</button>
                      <button>📍 Track</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="app-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>Instant Ordering</h3>
              <p>Browse catalog and place orders in seconds from anywhere.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Live Tracking</h3>
              <p>Real-time GPS tracking for every delivery with ETA updates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Partner Network</h3>
              <p>Connect instantly with farmers, traders, and transport partners.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Order updates, delivery alerts, and exclusive promotions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppPage;
