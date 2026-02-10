import React, { useState } from "react";
import "./Transport.css";
import { Link } from "react-router-dom";

const Transport = () => {
  const [activeRoute, setActiveRoute] = useState(1);

  const routes = [
    { 
      id: 1, 
      from: "Pongola", 
      to: "Durban Metro", 
      season: "Summer (Nov-Feb)", 
      produce: "Mangoes, Litchis", 
      frequency: "Daily", 
      distance: "350km", 
      transitTime: "5-6 hours",
      keyFeature: "Shared load system"
    },
    { 
      id: 2, 
      from: "Limpopo", 
      to: "Durban Metro", 
      season: "Winter (May-Aug)", 
      produce: "Oranges, Naartjies", 
      frequency: "3x/week", 
      distance: "700km", 
      transitTime: "9-10 hours",
      keyFeature: "Seasonal transport coordination"
    },
    { 
      id: 3, 
      from: "Eastern Cape", 
      to: "Durban Metro", 
      season: "Year-Round", 
      produce: "Mixed Vegetables, Herbs", 
      frequency: "Weekly", 
      distance: "850km", 
      transitTime: "11-12 hours",
      keyFeature: "Multi-produce coordination"
    },
    { 
      id: 4, 
      from: "Durban Metro", 
      to: "Johannesburg", 
      season: "Year-Round", 
      produce: "Distribution loads", 
      frequency: "Daily", 
      distance: "570km", 
      transitTime: "7-8 hours",
      keyFeature: "National distribution network"
    },
  ];

  return (
    <main className="transport-page">

      {/* Hero Section */}
      <section className="transport-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">Shared Load Transport</div>
              <h1 className="hero-title">Agricultural Logistics Network</h1>
              <p className="hero-subtitle">
                Coordinating reliable transport solutions for agricultural produce 
                across South Africa through shared load systems and optimized routing.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Key Routes</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Farmers Connected</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="routes-section">
        <div className="container">
          <div className="section-header">
            <h2>Agricultural Transport Coordination</h2>
            <p>Major farming corridors we coordinate with shared load transport systems</p>
          </div>
          
          <div className="routes-grid">
            {routes.map((route) => (
              <div 
                key={route.id} 
                className={`route-card ${activeRoute === route.id ? 'active' : ''}`}
                onClick={() => setActiveRoute(route.id)}
              >
                <div className="route-header">
                  <div className="route-icon">
                    {route.id === 1 && '🥭'}
                    {route.id === 2 && '🍊'}
                    {route.id === 3 && '🥬'}
                    {route.id === 4 && '🏪'}
                  </div>
                  <div className="route-titles">
                    <h3>{route.from} → {route.to}</h3>
                    <p className="route-produce">{route.produce}</p>
                    <p className="route-feature">{route.keyFeature}</p>
                  </div>
                </div>
                
                <div className="route-details">
                  <div className="route-info">
                    <span className="info-label">Season:</span> 
                    <span className="info-value">{route.season}</span>
                  </div>
                  <div className="route-info">
                    <span className="info-label">Distance:</span> 
                    <span className="info-value">{route.distance}</span>
                  </div>
                  <div className="route-info">
                    <span className="info-label">Transit Time:</span> 
                    <span className="info-value">{route.transitTime}</span>
                  </div>
                  <div className="route-info">
                    <span className="info-label">Frequency:</span> 
                    <span className="info-value">{route.frequency}</span>
                  </div>
                </div>
                
                <div className="route-actions centered-buttons">
                  <Link 
                    to="/contact" 
                    className="btn primary small"
                  >
                    Inquire About This Route
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Logistics Coordination</h2>
            <p>Efficient agricultural transport solutions through shared systems</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Cost Savings</h3>
              <p>Shared load transport reduces costs by up to 40% compared to dedicated vehicles</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Reliable Scheduling</h3>
              <p>Consistent transport coordination with multiple pickups and optimized routing</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Partner Network</h3>
              <p>Vetted transport partners with temperature-controlled vehicles when needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="booking-cta">
        <div className="container">
          <div className="booking-content">
            <h2>Need Agricultural Transport Coordination?</h2>
            <p>
              Get reliable transport solutions for your produce with our shared load 
              systems and optimized routing across South Africa.
            </p>
            
            <div className="booking-buttons">
              <Link to="/contact" className="btn primary large">
                Contact Logistics Team
              </Link>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <div className="info-label">Phone Support</div>
                  <div className="info-value">Mon-Fri, 7am-7pm</div>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <div className="info-label">Email Support</div>
                  <div className="info-value">24/7 Response</div>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">🚛</div>
                <div>
                  <div className="info-label">Urgent Transport</div>
                  <div className="info-value">Same-day Coordination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Transport;
