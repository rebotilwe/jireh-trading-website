import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1500&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)"
          }}
        ></div>

        <div className="hero-content">
          <div className="hero-badge">Since 2019</div>
          <h1 className="hero-title">
            Fresh Produce &<br/>
            <span>Reliable Transport</span>
          </h1>
          <p className="hero-subtitle">
            Connecting farmers, traders, and transport partners 
            across South Africa with cutting-edge logistics.
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

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>Modern Agriculture, Traditional Values</h2>
              <p>
                Jireh Trading Group specializes in seasonal agricultural produce 
                and shared transport services. We bridge farmers and buyers through 
                technology that respects the land and the people who work it.
              </p>
              <Link to="/about" className="text-link arrow">
                Learn More →
              </Link>
            </div>
            <div className="about-graphic">
              <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80"
                alt="Agriculture"
                style={{ borderRadius: "16px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Seasonal Produce</h2>
          <div className="products-grid">
            <div className="product-card">
              <img
                className="product-icon"
    src="https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop&q=80"
    alt="Mangoes"
              />
              <h3>Summer Harvest</h3>
              <p>Mangoes, Litchis, Papayas</p>
            </div>
            <div className="product-card">
              <img
                 className="product-icon"
    src="https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop&q=80"
    alt="Citrus"
              />
              <h3>Winter Citrus</h3>
              <p>Oranges, Naartjies, Lemons</p>
            </div>
            <div className="product-card">
              <img
    className="product-icon"
    src="https://images.unsplash.com/photo-1594310811471-084b6c2e2bb5?w-400&h=400&fit=crop&q=80"
    alt="Chillies"
              />
              <h3>Year-Round</h3>
              <p>Chillies, Herbs, Greens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="transport-preview">
        <div className="container">
          <div className="transport-content">
            <h2 className="section-title">Shared Load Transport</h2>
            <p>
              Cost-effective logistics that maximizes every truck. 
              Peak season efficiency without empty returns.
            </p>
            <div className="routes-grid">
              <span className="route-tag">Pongola</span>
              <span className="route-tag">Limpopo</span>
              <span className="route-tag">Eastern Cape</span>
              <span className="route-tag primary">Durban Metro</span>
            </div>
            <Link to="/transport" className="text-link arrow">
              Full Routes & Rates →
            </Link>
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="app-cta">
        <div className="container">
          <h2>Join 500+ Farmers & Traders</h2>
          <p>
            Real-time load matching, digital paperwork, 
            and route optimization in your pocket.
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
