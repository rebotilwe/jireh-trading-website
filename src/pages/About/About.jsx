import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-badge">Since 2019</div>
          <h1 className="hero-title">
            Connecting <span>Land to Market</span>
          </h1>
          <p className="hero-subtitle">
            Delivering fresh produce efficiently while honoring traditional 
            values and modern innovation across South Africa.
          </p>
        </div>
      </section>

      {/* Core Details */}
      <section className="about-details">
        <div className="container">
          <div className="details-grid">
            <div className="about-text">
              <h2 className="section-title">Our Mission</h2>
              <p>
                Seamless connections between producers and markets with 
                sustainable transport optimization that respects the land.
              </p>
              
              <h2 className="section-title">Our Vision</h2>
              <p>
                Become South Africa's leading fresh produce logistics network, 
                empowering farmers and traders with cutting-edge technology.
              </p>
            </div>
            
            <div className="about-visual">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80" 
                  alt="Farmers working in fields"
                />
                <div className="image-overlay">
                  <span>500+ Loads Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-timeline">
        <div className="container">
          <h2 className="section-title center">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker gold"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <p>Founded in Pongola, connecting local farmers to Durban markets</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker green"></div>
              <div className="timeline-content">
                <h3>2021</h3>
                <p>Expanded to shared load transport across KZN & Eastern Cape</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker peach"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <p>Mobile app launched. 500+ loads moved monthly</p>
              </div>
            </div>
            <div className="timeline-item active">
              <div className="timeline-marker gold"></div>
              <div className="timeline-content">
                <h3>2026</h3>
                <p>National expansion with Limpopo & Mpumalanga routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Loads Monthly</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Provinces Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
