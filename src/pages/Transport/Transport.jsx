import React, { useState } from "react";
import "./Transport.css";
import { Link } from "react-router-dom";

// Import local transport images
import refrigeratedTruckImg from "../../assets/images/truck.avif";
import loadingTruckImg from "../../assets/images/truckLoadingFruits.webp";
import farmToMarketImg from "../../assets/images/farmMarket.jpg";
import produceBoxesImg from "../../assets/images/multipleBoxes.webp";
import saTruckingImg from "../../assets/images/SouthAfricanTruck.jpg";

const transportList = [
  {
    id: 1,
    type: "Refrigerated Trucks",
    description: "Temperature-controlled vehicles to keep your fresh produce at optimal conditions during transport.",
    image: refrigeratedTruckImg,
    fallbackColor: "#2f8f3c",
    icon: "❄️🚛",
    features: ["Temperature monitoring", "Freshness guaranteed", "Cold chain integrity"],
    capacity: "10-24 ton capacity",
    tempRange: "0°C to 12°C"
  },
  {
    id: 2,
    type: "Shared Load Trucks", 
    description: "Cost-effective shared transport combining loads from multiple farmers to the same destination.",
    image: produceBoxesImg,
    fallbackColor: "#657a3a",
    icon: "🚛🤝",
    features: ["Cost sharing (40% savings)", "Multiple pickups", "Route optimization"],
    capacity: "8-20 ton capacity",
    tempRange: "Ambient or cooled"
  },
  {
    id: 3,
    type: "Express Delivery Vans",
    description: "Fast delivery for urgent shipments or small quantities of produce.",
    image: loadingTruckImg,
    fallbackColor: "#f5c644",
    icon: "🚐⚡",
    features: ["Same-day delivery", "Small loads", "Flexible scheduling"],
    capacity: "1-3 ton capacity",
    tempRange: "Ambient"
  },
  {
    id: 4,
    type: "Seasonal Fleet Services",
    description: "Dedicated transport solutions during peak harvest seasons.",
    image: farmToMarketImg,
    fallbackColor: "#f29b59",
    icon: "📅🚚",
    features: ["Peak season focus", "Farm direct pickup", "Reliable scheduling"],
    capacity: "Custom capacity",
    tempRange: "As required"
  },
];

const routes = [
  {
    id: 1,
    from: "Pongola",
    to: "Durban Metro",
    season: "Summer (Nov-Feb)",
    produce: "Mangoes, Litchis",
    frequency: "Daily during season",
    distance: "350km",
    transitTime: "5-6 hours"
  },
  {
    id: 2,
    from: "Limpopo",
    to: "Durban Metro", 
    season: "Winter (May-Aug)",
    produce: "Oranges, Naartjies, Lemons",
    frequency: "3 times weekly",
    distance: "700km",
    transitTime: "9-10 hours"
  },
  {
    id: 3,
    from: "Eastern Cape",
    to: "Durban Metro",
    season: "Year-Round",
    produce: "Mixed Vegetables, Herbs",
    frequency: "Weekly",
    distance: "850km",
    transitTime: "11-12 hours"
  },
  {
    id: 4,
    from: "Durban Metro",
    to: "Johannesburg",
    season: "Year-Round",
    produce: "Distribution loads",
    frequency: "Daily",
    distance: "570km",
    transitTime: "7-8 hours"
  },
];

const Transport = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [activeRoute, setActiveRoute] = useState(1);

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleGetQuote = (type) => {
    // In a real app, this would open a quote form
    // For now, navigate to contact page with transport type
    console.log(`Getting quote for ${type} transport`);
    // You could use: navigate('/contact', { state: { service: type } });
  };

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
                Connecting farms to markets with reliable, cost-effective transport 
                solutions across South Africa's key agricultural regions.
              </p>
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Loads Monthly</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Provinces Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">On-time Delivery</span>
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
            <h2>Key Agricultural Routes</h2>
            <p>Major farming corridors we serve with shared load transport</p>
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
                
                {activeRoute === route.id && (
                  <div className="route-actions">
                    <Link 
                      to="/contact" 
                      className="btn primary small"
                      state={{ route: `${route.from} to ${route.to}` }}
                    >
                      Book This Route
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Farmers Choose Our Transport</h2>
            <p>Designed specifically for agricultural producers</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Shared loads reduce transport costs by up to 40% compared to dedicated trucks.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🌡️</div>
              <h3>Temperature Control</h3>
              <p>Refrigerated trucks maintain optimal conditions for fresh produce quality.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Real-time Tracking</h3>
              <p>Monitor your shipment's location and temperature conditions in real-time.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>No Empty Returns</h3>
              <p>Optimized routes ensure trucks always carry loads both ways, reducing costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="transport-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Transport Services</h2>
            <p>Specialized vehicles for different agricultural transport needs</p>
          </div>
          
          <div className="transport-grid">
            {transportList.map((item) => (
              <div key={item.id} className="transport-card">
                <div className="transport-image-container">
                  <img 
                    src={item.image} 
                    alt={item.type}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                  />
                  <div className={`transport-placeholder ${imageErrors[item.id] ? 'active' : ''}`}>
                    <div className="placeholder-icon">
                      {item.icon}
                    </div>
                    <span>{item.type}</span>
                  </div>
                </div>
                
                <div className="transport-content">
                  <div className="transport-header">
                    <h3>{item.type}</h3>
                    <div className="service-badge">Available</div>
                  </div>
                  
                  <p className="transport-description">{item.description}</p>
                  
                  <div className="transport-specs">
                    <div className="spec">
                      <span className="spec-label">Capacity:</span>
                      <span className="spec-value">{item.capacity}</span>
                    </div>
                    <div className="spec">
                      <span className="spec-label">Temperature:</span>
                      <span className="spec-value">{item.tempRange}</span>
                    </div>
                  </div>
                  
                  <div className="transport-features">
                    {item.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="transport-footer">
                    <button 
                      className="transport-cta"
                      onClick={() => handleGetQuote(item.type)}
                    >
                      Get Quote
                    </button>
                    <Link to="/contact" className="transport-inquiry">
                      Contact for Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple 4-step process for your agricultural transport needs</p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Request Quote</h3>
                <p>Contact us with your produce details, quantity, and destination.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Schedule Pickup</h3>
                <p>We match your load with others going to the same area.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Temperature Control</h3>
                <p>Your produce is transported in optimal conditions.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Track & Deliver</h3>
                <p>Monitor your shipment and receive at destination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="booking-cta">
        <div className="container">
          <div className="booking-content">
            <h2>Ready to Transport Your Produce?</h2>
            <p>
              Get a customized transport solution for your agricultural produce. 
              We handle everything from farm pickup to market delivery with care.
            </p>
            <div className="booking-buttons">
              <Link to="/contact" className="btn primary large">
                Request Transport Quote
              </Link>
              <Link to="/collaborate" className="btn secondary">
                Become a Transport Partner
              </Link>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <span className="info-label">Call for Urgent Bookings</span>
                  <span className="info-value">+27 78 738 2435</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <span className="info-label">Email for Quotes</span>
                  <span className="info-value">transport@jirehtrading.co.za</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <span className="info-label">Dispatch Hours</span>
                  <span className="info-value">Mon-Sat, 6am-8pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does shared load transport work?</h3>
              <p>We combine loads from multiple farmers going to the same market area, reducing costs for everyone. Each farmer pays only for the space they use, with cost savings of 30-40%.</p>
            </div>
            
            <div className="faq-item">
              <h3>What produce can you transport?</h3>
              <p>We transport all agricultural produce including fruits, vegetables, herbs, and processed goods. We have temperature-controlled trucks for perishables and ambient trucks for dry goods.</p>
            </div>
            
            <div className="faq-item">
              <h3>How are transport costs calculated?</h3>
              <p>Costs are based on weight/volume, distance, and any special requirements like refrigeration. We provide transparent quotes with no hidden fees.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you handle documentation?</h3>
              <p>Yes, we handle all transport documentation including waybills, phytosanitary certificates, and customs clearance for exports to neighboring countries.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your delivery timeline?</h3>
              <p>Delivery times vary by route. Pongola to Durban takes 5-6 hours, Limpopo to Durban takes 9-10 hours. We provide estimated arrival times when booking.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I track my shipment?</h3>
              <p>Yes, all shipments include real-time GPS tracking. For refrigerated loads, you also get temperature monitoring throughout the journey.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transport;