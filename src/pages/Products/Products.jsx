import React, { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

// Local images - all imported from your assets
import mangoImg from "../../assets/images/mango.png";
import orangeImg from "../../assets/images/oranges.png";
import chillies from "../../assets/images/chillies.png"
import litchiImg from "../../assets/images/litchis.jpg";
import clementineImg from "../../assets/images/clementines.jpg";
import lemonImg from "../../assets/images/lemons.jpg";
import herbsImg from "../../assets/images/herbs.png";

const productsList = [
  {
    id: 1,
    name: "Mangoes",
    season: "Summer (Nov-Feb)",
    description: "Premium quality Tommy Atkins & Keitt mangoes from Pongola region.",
    features: ["Sweet & Juicy", "Export Quality", "Cold Chain Maintained"],
    image: mangoImg,
    category: "Summer Fruits",
    color: "summer",
    details: "Our mangoes are carefully selected from the Pongola region, known for producing some of South Africa's sweetest and juiciest mangoes. Grown in subtropical conditions, harvested at peak ripeness, and transported in temperature-controlled vehicles to maintain freshness.",
    origin: "Pongola, KwaZulu-Natal",
    harvest: "November to February",
    storage: "Temperature controlled (10-12°C)",
    packaging: "4kg, 8kg, 15kg cartons",
    minOrder: "100 cartons",
    icon: "🥭"
  },
  {
    id: 2,
    name: "Litchis",
    season: "Summer (Dec-Jan)",
    description: "Sweet, juicy litchis harvested at peak ripeness from Pongola farms.",
    features: ["Premium Quality", "Short Season", "Fast Delivery"],
    image: litchiImg,
    category: "Summer Fruits",
    color: "summer",
    details: "Fresh litchis from Pongola farms, available during the short December-January season. Known for their sweet taste and juicy texture, perfect for fresh consumption. Hand-picked and carefully packed to prevent bruising.",
    origin: "Pongola, KwaZulu-Natal",
    harvest: "December to January",
    storage: "Refrigerated (2-4°C)",
    packaging: "2kg, 5kg punnets",
    minOrder: "60 punnets",
    icon: "🍓"
  },
  {
    id: 3,
    name: "Oranges",
    season: "Winter (May-Aug)",
    description: "Valencia oranges from Limpopo citrus farms, rich in Vitamin C.",
    features: ["Vitamin Rich", "Juicy & Sweet", "Cold Storage"],
    image: orangeImg,
    category: "Winter Fruits",
    color: "winter",
    details: "Premium Valencia oranges from established citrus farms in Limpopo. Known for their bright color, sweet taste, and high juice content. Perfect for fresh consumption, juicing, and processing.",
    origin: "Limpopo Province",
    harvest: "May to August",
    storage: "Cold storage facilities",
    packaging: "10kg, 15kg, 20kg mesh bags",
    minOrder: "100 bags",
    icon: "🍊"
  },
  {
    id: 4,
    name: "Naartjies",
    season: "Winter (Jun-Sep)",
    description: "Easy-peel, seedless naartjies perfect for snacks and juice.",
    features: ["Easy Peel", "Seedless", "Sweet Taste"],
    image: clementineImg,
    category: "Winter Fruits",
    color: "winter",
    details: "Seedless, easy-to-peel naartjies from established citrus farms. Perfect for school snacks, lunchboxes, and fresh juice. Consistent quality and sweetness guaranteed with minimal handling.",
    origin: "Limpopo Province",
    harvest: "June to September",
    storage: "Cool storage (5-8°C)",
    packaging: "5kg, 10kg mesh bags",
    minOrder: "80 bags",
    icon: "🍊"
  },
  {
    id: 5,
    name: "Lemons",
    season: "Winter (Year-Round)",
    description: "Fresh lemons with bright flavor, available throughout the year.",
    features: ["Bright Flavor", "Versatile", "Long Shelf Life"],
    image: lemonImg,
    category: "Winter Fruits",
    color: "winter",
    details: "Fresh lemons with bright, tangy flavor. Available year-round from our network of growers. Perfect for culinary use, beverages, and food processing. Various sizes and grades available.",
    origin: "Limpopo & Eastern Cape",
    harvest: "Year-round availability",
    storage: "Cool, ventilated storage",
    packaging: "5kg, 10kg cartons",
    minOrder: "50 cartons",
    icon: "🍋"
  },
  {
    id: 6,
    name: "Chillies",
    season: "Year-Round",
    description: "Fresh Bird's Eye chillies available throughout the year.",
    features: ["Hot & Flavorful", "Various Grades", "Daily Harvest"],
    image: chillies,
    category: "Herbs & Vegetables",
    color: "year-round",
    details: "Fresh chillies harvested daily from our greenhouse facilities. Available in different grades from mild to extra hot. Consistent supply throughout the year with flexible packaging options for restaurants, retailers, and processors.",
    origin: "Controlled environment farms",
    harvest: "Year-round availability",
    storage: "Cool, dry conditions",
    packaging: "1kg, 5kg, 10kg packs",
    minOrder: "20kg",
    icon: "🌶️"
  },
  {
    id: 7,
    name: "Fresh Herbs",
    season: "Year-Round",
    description: "Coriander, parsley, and mint grown in controlled environments.",
    features: ["Fresh Daily", "Organic Options", "Washed & Ready"],
    image: herbsImg,
    category: "Herbs & Vegetables",
    color: "year-round",
    details: "Fresh herbs grown in hydroponic systems for consistent quality year-round. Available washed and ready-to-use for restaurants and retailers, with organic certification options available. Includes coriander, parsley, mint, and basil.",
    origin: "Hydroponic farms",
    harvest: "Year-round",
    storage: "Refrigerated (1-3°C)",
    packaging: "100g, 250g, 500g packs",
    minOrder: "10kg",
    icon: "🌿"
  },
];

const Products = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [activeSeason, setActiveSeason] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Filter products based on active season
  const filteredProducts = productsList.filter(product => {
    if (activeSeason === "all") return true;
    return product.color === activeSeason;
  });

  const handleSeasonClick = (season) => {
    setActiveSeason(season);
    // Scroll to products section
    setTimeout(() => {
      document.querySelector('.products-grid-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showModal]);

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('product-modal-overlay')) {
      closeModal();
    }
  };

  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">Seasonal Produce</div>
              <h1 className="hero-title">Fresh From Our Farms</h1>
              <p className="hero-subtitle">
                Premium mangoes, citrus, litchis, chillies & herbs grown in South Africa's 
                best regions, delivered fresh through our efficient transport network.
              </p>
              
              <div className="season-filter">
                <button 
                  className={`season-btn ${activeSeason === "all" ? "active" : ""}`}
                  onClick={() => handleSeasonClick("all")}
                >
                  All Produce
                </button>
                <button 
                  className={`season-btn ${activeSeason === "summer" ? "active" : ""}`}
                  onClick={() => handleSeasonClick("summer")}
                >
                  Summer
                </button>
                <button 
                  className={`season-btn ${activeSeason === "winter" ? "active" : ""}`}
                  onClick={() => handleSeasonClick("winter")}
                >
                  Winter
                </button>
                <button 
                  className={`season-btn ${activeSeason === "year-round" ? "active" : ""}`}
                  onClick={() => handleSeasonClick("year-round")}
                >
                  Year-Round
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {activeSeason === "all" ? "Our Seasonal Selection" : 
               activeSeason === "summer" ? "Summer Produce" :
               activeSeason === "winter" ? "Winter Citrus" : "Year-Round Produce"}
            </h2>
            <p>
              {activeSeason === "all" ? "Fresh produce available by season from our partner farms" :
               activeSeason === "summer" ? "Mangoes, Litchis & summer fruits (Nov-Feb)" :
               activeSeason === "winter" ? "Oranges, Naartjies & citrus (May-Sep)" : 
               "Chillies & fresh herbs available all year"}
            </p>
            
            {activeSeason !== "all" && (
              <button 
                className="clear-filter"
                onClick={() => handleSeasonClick("all")}
              >
                ← Show All Products
              </button>
            )}
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <h3>No products found for this season</h3>
              <p>Please select another season or contact us for availability.</p>
              <button 
                className="btn primary"
                onClick={() => handleSeasonClick("all")}
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`product-card ${product.color}`}>
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={() => handleImageError(product.id)}
                      loading="lazy"
                    />
                    <span className="product-category">{product.category}</span>
                    <span className="product-season">{product.season}</span>
                    
                    {/* Fallback placeholder */}
                    {imageErrors[product.id] && (
                      <div className="product-placeholder active">
                        <div className="placeholder-icon">
                          {product.icon}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="product-content">
                    <div className="product-header">
                      <h3>{product.name}</h3>
                      <div className="product-tag">{product.season.split(' ')[0]}</div>
                    </div>
                    
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-features">
                      {product.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="product-footer">
                      <button 
                        className="product-cta"
                        onClick={() => handleViewDetails(product)}
                      >
                        View Details
                      </button>
                      <Link to="/contact" className="product-inquiry">
                        Make Inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Product count */}
          {filteredProducts.length > 0 && (
            <div className="product-count">
              Showing {filteredProducts.length} of {productsList.length} products
            </div>
          )}
        </div>
      </section>

      {/* Transport CTA */}
      <section className="transport-cta">
        <div className="container">
          <div className="transport-content">
            <h2>Need Transport for Your Produce?</h2>
            <p>
              Our shared load transport service connects farms to markets 
              across South Africa with temperature-controlled vehicles.
            </p>
            <div className="transport-buttons">
              <Link to="/transport" className="btn primary">
                View Transport Routes
              </Link>
              <Link to="/contact" className="btn secondary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="seasonal-guide">
        <div className="container">
          <h2>Seasonal Produce Calendar</h2>
          <div className="calendar-grid">
            <div className="calendar-season summer">
              <h3>Summer Season</h3>
              <p>November - February</p>
              <ul>
                <li>Mangoes</li>
                <li>Litchis</li>
                <li>Summer Citrus</li>
              </ul>
            </div>
            
            <div className="calendar-season winter">
              <h3>Winter Season</h3>
              <p>May - September</p>
              <ul>
                <li>Oranges</li>
                <li>Naartjies</li>
                <li>Lemons</li>
              </ul>
            </div>
            
            <div className="calendar-season year-round">
              <h3>Year-Round</h3>
              <p>Available All Year</p>
              <ul>
                <li>Chillies</li>
                <li>Fresh Herbs</li>
                <li>Leafy Greens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="collaboration-cta">
        <div className="container">
          <div className="collaboration-content">
            <h2>Want to Sell Your Produce?</h2>
            <p>
              We're always looking to partner with quality farmers and producers. 
              Join our network today.
            </p>
            <Link to="/collaborate" className="btn primary large">
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {showModal && selectedProduct && (
        <div 
          className="product-modal-overlay"
          onClick={handleOverlayClick}
        >
          <div className="product-modal">
            <div className="modal-header">
              <div>
                <div className="modal-badge">{selectedProduct.category}</div>
                <h2>{selectedProduct.name}</h2>
                <p className="modal-season">{selectedProduct.season}</p>
              </div>
              <button 
                className="close-modal"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            <div className="modal-content">
              <div className="modal-image">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="modal-image-fallback">
                  <div className="fallback-icon">
                    {selectedProduct.icon}
                  </div>
                </div>
              </div>
              
              <div className="modal-details">
                <h3>Product Description</h3>
                <p>{selectedProduct.details}</p>
                
                <div className="modal-specs">
                  <div className="spec-row">
                    <span className="spec-label">Origin:</span>
                    <span className="spec-value">{selectedProduct.origin}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Harvest Period:</span>
                    <span className="spec-value">{selectedProduct.harvest}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Storage:</span>
                    <span className="spec-value">{selectedProduct.storage}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Packaging:</span>
                    <span className="spec-value">{selectedProduct.packaging}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Minimum Order:</span>
                    <span className="spec-value">{selectedProduct.minOrder}</span>
                  </div>
                </div>
                
                <div className="modal-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <Link 
                to="/contact" 
                className="btn primary large"
                onClick={closeModal}
                state={{ product: selectedProduct.name }}
              >
                Request Quote
              </Link>
              <button 
                className="btn secondary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;