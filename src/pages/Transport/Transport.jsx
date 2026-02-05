import React, { useState } from "react";
import "./Transport.css";

const transportList = [
  {
    id: 1,
    type: "Truck",
    description: "Reliable trucks for transporting large quantities of produce safely.",
    image: "https://images.unsplash.com/photo-1597047363126-1d64e8707d4f?auto=format&fit=crop&w=400&h=300&q=80",
    fallbackColor: "#2f8f3c"
  },
  {
    id: 2,
    type: "Van", 
    description: "Flexible vans for medium shipments and quick deliveries.",
    // image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300&q=80",
    // fallbackColor: "#657a3a"
  },
  {
    id: 3,
    type: "Motorbike",
    description: "Fast motorbikes for small parcels and urgent deliveries.",
    image: "https://images.unsplash.com/photo-1558980664-10b2c45fbc45?auto=format&fit=crop&w=400&h=300&q=80",
    fallbackColor: "#f5c644"
  },
  {
    id: 4,
    type: "Refrigerated Truck",
    description: "Keep your perishable goods fresh with temperature-controlled trucks.",
    image: "https://images.unsplash.com/photo-1610006425988-dacda2a1e2d3?auto=format&fit=crop&w=400&h=300&q=80",
    fallbackColor: "#f29b59"
  },
];

const Transport = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <main className="transport-page">
      <section className="transport-hero">
        <div className="container">
          <div className="hero-badge">Reliable Logistics</div>
          <h1 className="hero-title">Transport Services</h1>
          <p>
            Comprehensive transport solutions ensuring your products reach their 
            destination safely, on time, and at optimal cost.
          </p>
        </div>
      </section>

      <section className="transport-grid-section">
        <div className="container">
          <div className="transport-grid">
            {transportList.map((item) => (
              <div key={item.id} className="transport-card">
                <div className="transport-image-container">
                  {!imageErrors[item.id] ? (
                    <img 
                      src={item.image} 
                      alt={item.type}
                      onError={() => handleImageError(item.id)}
                      loading="lazy"
                    />
                  ) : null}
                  <div className={`transport-placeholder ${imageErrors[item.id] ? 'active' : ''}`}>
                    <div className="placeholder-icon">
                      {item.id === 1 && '🚛'}
                      {item.id === 2 && '🚐'}
                      {item.id === 3 && '🏍️'}
                      {item.id === 4 && '❄️🚛'}
                    </div>
                    <span>{item.type}</span>
                  </div>
                </div>
                <div className="transport-content">
                  <h3>{item.type}</h3>
                  <p>{item.description}</p>
                  <button className="transport-cta">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transport;
