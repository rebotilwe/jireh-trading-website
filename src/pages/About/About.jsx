import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">

    {/* ================= HERO ================= */}
<section className="about-hero">
  <div className="hero-gradient"></div>

  <div className="container">
    <div className="hero-content">

      <div className="hero-badge">Since 2019</div>

      <h1 className="hero-title">
        Smart <span className="hero-accent">Agricultural Logistics</span>
      </h1>

      <p className="hero-subtitle">
        Jireh Trading Group provides reliable transport coordination,
        shared load services, and digital logistics solutions
        for farmers and suppliers across South Africa.
      </p>

      <div className="hero-cta">
        {/* Only keep primary hero action */}
        <Link to="/contact" className="btn primary">
          Request Information
        </Link>
      </div>

    </div>
  </div>
</section>



      {/* ================= MISSION & VISION ================= */}
      <section className="mission-section">
        <div className="container">

          <div className="mission-grid">

            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h2>Our Mission</h2>

              <p>
                To simplify agricultural logistics through
                reliable transport coordination, shared loads,
                and digital tracking solutions.
              </p>
            </div>


            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h2>Our Vision</h2>

              <p>
                To become South Africa’s most trusted
                agricultural logistics partner
                for farmers and suppliers.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= STORY ================= */}
      <section className="story-section">
        <div className="container">

          <div className="story-content">

            <div className="story-text">

              <h2>Our Journey</h2>

              <p>
                Founded in 2019 in Pongola, Jireh Trading Group began
                by coordinating shared transport for mango farmers
                supplying Durban markets.
              </p>

              <p>
                Over time, we expanded to serve farmers and suppliers
                across Limpopo, Eastern Cape, KwaZulu-Natal, and
                surrounding regions through seasonal and year-round routes.
              </p>

              <p>
                Today, we focus on structured logistics coordination,
                load management, and digital monitoring for our partners.
              </p>


              <div className="story-stats">

                <div className="story-stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Provinces</span>
                </div>

                <div className="story-stat">
                  <span className="stat-number">2019</span>
                  <span className="stat-label">Established</span>
                </div>

              </div>

            </div>


            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=600&h=600&fit=crop&q=80"
                alt="Agricultural logistics transport"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="values-section">
        <div className="container">

          <h2 className="section-title">Our Core Values</h2>

          <div className="values-grid">


            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>
                Strong relationships with farmers,
                transporters, and suppliers.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">⏱️</div>
              <h3>Reliability</h3>
              <p>
                Consistent coordination and dependable service.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Efficiency</h3>
              <p>
                Optimised shared loads to reduce costs
                and improve turnaround times.
              </p>
            </div>


            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                Digital tools for tracking,
                invoicing, and reporting.
              </p>
            </div>


          </div>

        </div>
      </section>


      {/* ================= DIGITAL PLATFORM ================= */}
      <section className="team-section">
        <div className="container">

          <h2 className="section-title">Our Logistics Platform</h2>

          <p
            className="section-subtitle"
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#5a6a5a",
            }}
          >
            Our internal web platform supports logistics operations,
            tracking, and invoicing for registered suppliers and partners.
          </p>


          <div className="team-grid">


            <div className="team-card">
              <div className="team-avatar">💻</div>

              <h3>Web Platform</h3>

              <p>
                Secure system for monitoring loads,
                managing invoices, and coordinating transport.
              </p>

              <Link
                to="/contact"
                style={{
                  color: "var(--leaf-green)",
                  textDecoration: "none",
                  fontWeight: "600",
                  marginTop: "1rem",
                  display: "inline-block",
                }}
              >
                Apply for Access →
              </Link>
            </div>


            <div className="team-card">
              <div className="team-avatar">🚛</div>

              <h3>Vehicle Tracking</h3>

              <p>
                Monitor delivery progress
                and transport routes in real time.
              </p>
            </div>


            <div className="team-card">
              <div className="team-avatar">📄</div>

              <h3>Digital Invoicing</h3>

              <p>
                Simplified documentation
                and financial reporting.
              </p>
            </div>


          </div>

        </div>
      </section>


  {/* ================= CTA ================= */}
<section className="about-cta">
  <div className="container">

    <div className="cta-content">

      <h2>Let’s Work Together</h2>

      <p>
        Whether you are a farmer, supplier, or transporter,
        our team is ready to support your logistics needs.
        Submit your details and we will contact you.
      </p>

      <div className="cta-buttons">
        {/* Primary CTA */}
        <Link to="/contact" className="btn primary large">
          Submit Your Details
        </Link>

        {/* Secondary CTA */}
        <Link to="/contact" className="btn secondary">
          Contact Our Team
        </Link>
      </div>

    </div>

  </div>
</section>


    </main>
  );
};

export default About;
