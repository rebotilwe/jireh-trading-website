import React, { useState } from "react";
import "./Transport.css";
import { Link } from "react-router-dom";

import refrigeratedTruckImg from "../../assets/images/truck.avif";
import loadingTruckImg from "../../assets/images/truckLoadingFruits.webp";
import farmToMarketImg from "../../assets/images/farmMarket.jpg";
import produceBoxesImg from "../../assets/images/multipleBoxes.webp";

const transportList = [
  {
    id: 1,
    type: "Refrigerated Trucks",
    description: "Temperature-controlled vehicles to keep your fresh produce at optimal conditions during transport.",
    image: refrigeratedTruckImg,
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
    icon: "📅🚚",
    features: ["Peak season focus", "Farm direct pickup", "Reliable scheduling"],
    capacity: "Custom capacity",
    tempRange: "As required"
  },
];

const routes = [
  { id: 1, from: "Pongola", to: "Durban Metro", season: "Summer (Nov-Feb)", produce: "Mangoes, Litchis", frequency: "Daily", distance: "350km", transitTime: "5-6 hours" },
  { id: 2, from: "Limpopo", to: "Durban Metro", season: "Winter (May-Aug)", produce: "Oranges, Naartjies, Lemons", frequency: "3x/week", distance: "700km", transitTime: "9-10 hours" },
  { id: 3, from: "Eastern Cape", to: "Durban Metro", season: "Year-Round", produce: "Mixed Vegetables, Herbs", frequency: "Weekly", distance: "850km", transitTime: "11-12 hours" },
  { id: 4, from: "Durban Metro", to: "Johannesburg", season: "Year-Round", produce: "Distribution loads", frequency: "Daily", distance: "570km", transitTime: "7-8 hours" },
];

const Transport = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [activeRoute, setActiveRoute] = useState(1);

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
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
                Connecting farms to markets with reliable, cost-effective transport solutions across South Africa.
              </p>
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
                  <div className="route-info"><span className="info-label">Season:</span> <span className="info-value">{route.season}</span></div>
                  <div className="route-info"><span className="info-label">Distance:</span> <span className="info-value">{route.distance}</span></div>
                  <div className="route-info"><span className="info-label">Transit:</span> <span className="info-value">{route.transitTime}</span></div>
                  <div className="route-info"><span className="info-label">Frequency:</span> <span className="info-value">{route.frequency}</span></div>
                </div>
                
                {activeRoute === route.id && (
                  <div className="route-actions centered-buttons">
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
    </main>
  );
};

export default Transport;
