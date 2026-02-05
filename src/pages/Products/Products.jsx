import React from "react";
import "./Products.css";

const productsList = [
  {
    id: 1,
    name: "Organic Fertilizer",
    description: "High-quality organic fertilizer to boost crop growth naturally.",
    image: "https://images.unsplash.com/photo-1603035446085-dbe4d06c0a91?w=400&h=300&fit=crop&q=80",
    fallbackColor: "#2f8f3c"
  },
  {
    id: 2,
    name: "Seedlings", 
    description: "Healthy seedlings ready for planting in various crops.",
    image: "https://images.unsplash.com/photo-1587387645610-207b6bfaeebc?w=400&h=300&fit=crop&q=80",
    fallbackColor: "#657a3a"
  },
  {
    id: 3,
    name: "Irrigation Tools",
    description: "Durable irrigation tools for efficient water management.",
    image: "https://images.unsplash.com/photo-1601045698496-0b8e8fc1c174?w=400&h=300&fit=crop&q=80",
    fallbackColor: "#f5c644"
  },
  {
    id: 4,
    name: "Farming Equipment",
    description: "Reliable farming equipment for small to large scale farms.",
    image: "https://images.unsplash.com/photo-1581091012184-379cfbf64e05?w=400&h=300&fit=crop&q=80",
    fallbackColor: "#f29b59"
  },
];

const Products = () => {
  const [imageErrors, setImageErrors] = React.useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <div className="hero-badge">Premium Quality</div>
          <h1 className="hero-title">Our Products</h1>
          <p>
            High-quality agricultural products to support farmers and partners 
            across South Africa with reliable supply chains.
          </p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {productsList.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  {!imageErrors[product.id] ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={() => handleImageError(product.id)}
                      loading="lazy"
                    />
                  ) : null}
                  <div className={`product-placeholder ${imageErrors[product.id] ? 'active' : ''}`}>
                    <div className="placeholder-icon">
                      {product.id === 1 && '🌱'}
                      {product.id === 2 && '🌿'}
                      {product.id === 3 && '💧'}
                      {product.id === 4 && '⚙️'}
                    </div>
                    <span>{product.name}</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button className="product-cta">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
