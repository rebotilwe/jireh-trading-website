import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Since 2019</div>
            <h1 className="hero-title">
              Connecting <span className="hero-accent">Farmers to Markets</span>
            </h1>
            <p className="hero-subtitle">
              Jireh Trading Group specializes in seasonal agricultural produce 
              and shared transport services across South Africa.
            </p>
            <div className="hero-cta">
              <Link to="/collaborate" className="btn primary">
                Collaborate With Us
              </Link>
              <Link to="/contact" className="btn secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                Bridge the gap between farmers and markets through 
                reliable transport solutions and fair trade practices, 
                ensuring fresh produce reaches consumers efficiently.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To become South Africa's leading agricultural logistics 
                network, empowering rural economies through technology 
                and sustainable partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2019 in Pongola, Jireh Trading Group started with 
                a simple mission: connect local mango farmers to Durban markets 
                with reliable transportation.
              </p>
              <p>
                Today, we've grown into a comprehensive agricultural logistics 
                company serving four provinces, moving over 500 loads monthly, 
                and connecting hundreds of farmers with national markets.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Farmers Connected</span>
                </div>
                <div className="story-stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Provinces Served</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=600&h=600&fit=crop&q=80" 
                alt="Farmers working together"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>Building long-term relationships with farmers, transporters, and buyers.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🚚</div>
              <h3>Reliability</h3>
              <p>Consistent, on-time delivery with temperature-controlled transport.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Shared load transport to reduce costs and environmental impact.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Using technology to optimize routes and match loads efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Leadership Preview */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">🌾</div>
              <h3>Farm-First Focus</h3>
              <p>Working directly with farmers to understand their needs and seasonal challenges.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">📱</div>
              <h3>Tech-Enabled</h3>
              <p>Real-time tracking and digital paperwork for transparency and efficiency.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">🔄</div>
              <h3>Shared Logistics</h3>
              <p>Maximizing truck capacity and eliminating empty return trips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready To Grow With Us?</h2>
            <p>
              Whether you're a farmer looking for reliable transport, 
              a transporter seeking consistent loads, or a buyer wanting 
              fresh produce, we're here to connect you.
            </p>
            <div className="cta-buttons">
              <Link to="/collaborate" className="btn primary large">
                Start Collaborating
              </Link>
              <Link to="/products" className="btn secondary">
                View Our Produce
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;