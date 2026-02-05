import React from "react";
import "./AppPage.css";

const AppPage = () => {
  return (
    <main className="app-page">
      {/* Hero / Showcase */}
      <section className="app-hero">
        <div className="container">
          <div className="app-hero-content">
            <h1>Our Mobile App</h1>
            <p>
              Stay connected with Jireh Trading Group on the go! Our app lets you order products, track deliveries, and collaborate with us from anywhere.
            </p>
            <div className="app-buttons">
              <a
                href="#"
                className="btn download ios"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="btn download android"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for Android
              </a>
            </div>
          </div>
          <div className="app-hero-image">
            <img
              src="https://images.unsplash.com/photo-1612831455547-2c6e445e61f4?auto=format&fit=crop&w=500&q=80"
              alt="App mockup"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="app-features container">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Easy Ordering</h3>
            <p>Quickly browse products and place orders from your phone.</p>
          </div>
          <div className="feature-card">
            <h3>Track Deliveries</h3>
            <p>Real-time tracking for all your deliveries.</p>
          </div>
          <div className="feature-card">
            <h3>Collaborate</h3>
            <p>Partner with us easily through the collaboration feature.</p>
          </div>
          <div className="feature-card">
            <h3>Notifications</h3>
            <p>Receive updates, alerts, and promotions directly in-app.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppPage;
