import React, { useState } from "react";
import "./Collaborate.css";

const collaborationTypes = [
  { 
    title: "Farmer", 
    description: "Join as a local farmer to supply fresh produce.",
    icon: "🌱"
  },
  { 
    title: "Supplier", 
    description: "Provide equipment, seeds, or agricultural services.",
    icon: "🚜"
  },
  { 
    title: "Trader", 
    description: "Collaborate to trade and distribute products.",
    icon: "🤝"
  },
  { 
    title: "Other", 
    description: "Any other partnership opportunity.",
    icon: "💼"
  },
];

const testimonials = [
  {
    text: "Working with Jireh Trading transformed our farm's market access. Our mango sales increased by 40%!",
    author: "Farmer John",
    location: "Limpopo",
    role: "Citrus Farmer"
  },
  {
    text: "As a small supplier, the partnership has given us consistent business and reliable payments.",
    author: "Sarah M.",
    location: "Durban",
    role: "Equipment Supplier"
  },
  {
    text: "The transport network is exceptional. Our goods reach markets fresh and on time every time.",
    author: "David K.",
    location: "Eastern Cape",
    role: "Vegetable Trader"
  }
];

const Collaborate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    type: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field if user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleCardClick = (type) => {
    setFormData({ ...formData, type });
    // Clear error for type if selected
    if (formErrors.type) {
      setFormErrors({ ...formErrors, type: "" });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.location.trim()) {
      errors.location = "Location is required";
    }
    
    if (!formData.type.trim()) {
      errors.type = "Please select a collaboration type";
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setSubmitStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          type: "",
          message: "",
        });
        setFormErrors({});
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    }
  };

  const getButtonText = () => {
    switch (submitStatus) {
      case 'loading':
        return (
          <>
            <span className="loading-spinner"></span>
            Processing Request...
          </>
        );
      case 'success':
        return '✓ Submitted Successfully!';
      case 'error':
        return '✗ Try Again';
      default:
        return 'Submit ';
    }
  };

  return (
    <main className="collaborate">
      {/* Hero Section */}
      <section className="collaborate-hero">
        <div className="container">
          <div className="hero-badge">Join Our Network</div>
          <h1>Collaborate With Jireh Trading</h1>
          <p className="hero-subtitle">
            Connect with South Africa's leading agricultural network. 
            Whether you're a farmer, supplier, trader, or partner, 
            we're building success together.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="form-section">
        <div className="container">
          <div className="form-header">
            <h2>Let's Get Started</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ Thank you for your interest! We'll contact you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              ⚠️ Something went wrong. Please try again or contact us directly.
            </div>
          )}

          {/* Collaboration Type Cards */}
          <div className="collaboration-types">
            {collaborationTypes.map((item) => (
              <div
                key={item.title}
                className={`type-card ${formData.type === item.title ? "selected" : ""} ${
                  formErrors.type && !formData.type ? "error" : ""
                }`}
                onClick={() => handleCardClick(item.title)}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(item.title)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${item.title} collaboration type`}
              >
                <div className="type-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          {formErrors.type && !formData.type && (
            <div className="field-error">{formErrors.type}</div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? "error" : ""}
                required
                aria-describedby={formErrors.name ? "name-error" : undefined}
              />
              <label htmlFor="name" className="visually-hidden">
                Full Name
              </label>
              {formErrors.name && (
                <div id="name-error" className="field-error">
                  {formErrors.name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? "error" : ""}
                required
                aria-describedby={formErrors.email ? "email-error" : undefined}
              />
              <label htmlFor="email" className="visually-hidden">
                Email Address
              </label>
              {formErrors.email && (
                <div id="email-error" className="field-error">
                  {formErrors.email}
                </div>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={formErrors.phone ? "error" : ""}
                required
                aria-describedby={formErrors.phone ? "phone-error" : undefined}
              />
              <label htmlFor="phone" className="visually-hidden">
                Phone Number
              </label>
              {formErrors.phone && (
                <div id="phone-error" className="field-error">
                  {formErrors.phone}
                </div>
              )}
            </div>

            {/* Location Field */}
            <div className="form-group">
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location (City/Province)"
                value={formData.location}
                onChange={handleChange}
                className={formErrors.location ? "error" : ""}
                required
                aria-describedby={formErrors.location ? "location-error" : undefined}
              />
              <label htmlFor="location" className="visually-hidden">
                Location
              </label>
              {formErrors.location && (
                <div id="location-error" className="field-error">
                  {formErrors.location}
                </div>
              )}
            </div>

            {/* Type Dropdown */}
            <div className="form-group">
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                className={formErrors.type ? "error" : ""}
                required
                aria-describedby={formErrors.type ? "type-error" : undefined}
              >
                <option value="" disabled>
                  Select Type of Collaboration
                </option>
                {collaborationTypes.map((item) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              <label htmlFor="type" className="visually-hidden">
                Collaboration Type
              </label>
            </div>

            {/* Message Field */}
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Tell us more about your business, experience, or how you'd like to collaborate..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
              />
              <label htmlFor="message" className="visually-hidden">
                Additional Details
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn primary glow"
              disabled={submitStatus === 'loading' || submitStatus === 'success'}
            >
              {getButtonText()}
            </button>

            <p className="form-note">
              By submitting this form, you agree to our Privacy Policy. 
              We'll never share your information without your permission.
            </p>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Partners Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}, {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Prefer to Talk Directly?</h2>
          <p>Call us at <strong>+27 78 738 2435</strong> or email <strong>collaborate@jirehtrading.co.za</strong></p>
          <div className="cta-buttons">
            <a href="tel:+27787382435" className="btn secondary">
              📞 Call Now
            </a>
            <a href="mailto:collaborate@jirehtrading.co.za" className="btn outline">
              📧 Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collaborate;