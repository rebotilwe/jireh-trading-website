import "./Home.css";
import { Link } from "react-router-dom";

// Import local images
import mangoImg from "../../assets/images/mango.png";
import orangeImg from "../../assets/images/oranges.png";
import chilliImg from "../../assets/images/chillies.png";

const Home = () => {
  return (
    <main className="home">
      {/* ================= MODERN HERO ================= */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-particles"></div>
        
        <div className="hero-content">
          <div className="hero-badge">Since 2019</div>
          
          <h1 className="hero-title">
            Fresh Produce &<br />
            <span>Reliable Transport</span>
          </h1>
          
          <p className="hero-subtitle">
            Connecting farmers, traders, and transport partners 
            across South Africa with premium agricultural produce 
            and smart logistics solutions.
          </p>
          
          <div className="hero-buttons">
            <Link to="/app" className="btn primary glow">
              Get the App
            </Link>
            <Link to="/collaborate" className="btn secondary outlined">
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MODERN ABOUT ================= */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>Modern Agriculture, Traditional Values</h2>
              <p>
                Jireh Trading Group specializes in seasonal agricultural produce 
                and shared transport services. We connect farmers with markets through 
                sustainable practices and efficient logistics that respect both the land 
                and the people who work it.
              </p>
              <Link to="/about" className="text-link">
                Learn More About Us
              </Link>
            </div>
            
            <div className="about-graphic">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                alt="Farm landscape with fresh produce"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODERN PRODUCTS ================= */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Seasonal Produce</h2>
          
          <div className="products-grid">
            {/* Summer Harvest */}
            <div className="product-card">
              <div className="product-icon">
                <img
                  src={mangoImg}
                  alt="Fresh Mangoes"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&h=400&q=80";
                  }}
                />
              </div>
              <h3>Summer Harvest</h3>
              <p>Sweet mangoes, juicy litchis, and tropical papayas from Pongola region</p>
            </div>

            {/* Winter Citrus */}
            <div className="product-card">
              <div className="product-icon">
                <img
                  src={orangeImg}
                  alt="Fresh Citrus"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&h=400&q=80";
                  }}
                />
              </div>
              <h3>Winter Citrus</h3>
              <p>Premium oranges, naartjies, and lemons from Limpopo province</p>
            </div>

            {/* Year-Round */}
            <div className="product-card">
              <div className="product-icon">
                <img
                  src={chilliImg}
                  alt="Fresh Chillies"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1594310811471-084b6c2e2bb5?auto=format&fit=crop&w=400&h=400&q=80";
                  }}
                />
              </div>
              <h3>Year-Round</h3>
              <p>High-quality chillies, herbs, and greens available throughout the year</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODERN TRANSPORT ================= */}
      <section className="transport-preview">
        <div className="container">
          <div className="transport-content">
            <h2 className="section-title">Shared Load Transport</h2>
            
            <p>
              Optimized logistics that maximize truck capacity and minimize costs. 
              Our shared load system connects agricultural regions efficiently during peak seasons.
            </p>
            
            <div className="routes-grid">
              <span className="route-tag">Pongola Region</span>
              <span className="route-tag">Limpopo Province</span>
              <span className="route-tag">Eastern Cape</span>
              <span className="route-tag primary">Durban Metro</span>
            </div>
            
            <Link to="/transport" className="text-link">
              View Full Routes & Schedules
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MODERN APP CTA ================= */}
      <section className="app-cta">
        <div className="container">
          <h2>Join 500+ Farmers & Traders</h2>
          
          <p>
            Real-time load matching, digital paperwork, 
            and route optimization in your pocket. Streamline your 
            agricultural logistics with our mobile platform.
          </p>
          
          <div className="cta-buttons">
            <Link to="/app" className="btn primary glow large">
              Download App Now
            </Link>
            <Link to="/contact" className="btn secondary outlined large">
              Talk to Sales
            </Link>
          </div>
          
          <div className="app-stores">
            <div className="store-badge">App Store</div>
            <div className="store-badge">Google Play</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;