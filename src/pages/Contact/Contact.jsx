import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Format time (e.g., "4:09 PM")
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Format date (e.g., "2/6/2026")
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'numeric', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
    
    // Clear error on input
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleTextareaResize = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.consent) errors.consent = "Please agree to the Privacy Policy";
    
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
      
      console.log("Contact Form submitted:", formData);
      setSubmitStatus('success');
      
      // Reset after success
      setTimeout(() => {
        setFormData({
          name: "", 
          email: "", 
          phone: "", 
          department: "", 
          subject: "", 
          message: "",
          consent: false
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
      case 'loading': return (
        <>
          Sending...
          <span className="loading-spinner"></span>
        </>
      );
      case 'success': return '✓ Message Sent Successfully!';
      case 'error': return '✗ Try Again';
      default: return 'Send Message';
    }
  };

  const departments = [
    { value: "", label: "Select Department" },
    { value: "general", label: "General Inquiry" },
    { value: "transport", label: "Transport Services" },
    { value: "orders", label: "Order Inquiry" },
    { value: "partnership", label: "Partnerships" },
    { value: "technical", label: "Technical Support" },
  ];

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-badge">Get In Touch</div>
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            Have questions about our services or need agricultural transport solutions? 
            We're here to help farmers, partners, and customers across South Africa.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Reach Out</h2>
              <p className="contact-intro">
                Get in touch with us through any of these channels. We typically respond within 24 hours.
              </p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-content">
                    <h3>Location</h3>
                    <p>Durban, KwaZulu-Natal</p>
                    <p>South Africa</p>
                    <a 
                      href="https://maps.google.com/?q=Durban+KwaZulu-Natal+South+Africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-content">
                    <h3>Phone</h3>
                    <p>+27 78 738 2435</p>
                    <p className="emergency-note">24/7 Emergency Transport</p>
                    <a 
                      href="tel:+27787382435"
                      className="contact-link"
                    >
                      Call Now →
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-content">
                    <h3>Email</h3>
                    <div className="email-addresses">
                      <p>info@jirehtradinggroup.co.za</p>
                      <p>transport@jirehtrading.co.za</p>
                    </div>
                    <a 
                      href="mailto:info@jirehtradinggroup.co.za"
                      className="contact-link"
                    >
                      Send Email →
                    </a>
                  </div>
                </div>

                <div className="contact-item business-hours-item">
                  <div className="contact-icon">⏰</div>
                  <div className="contact-content">
                    <h3>Business Hours</h3>
                    <div className="business-hours-list">
                      <div className="hours-item">
                        <span className="day">Monday - Friday</span>
                        <span className="time">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span className="day">Saturday</span>
                        <span className="time">8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="hours-item">
                        <span className="day">Sunday</span>
                        <span className="time emergency">Emergency Transport Only</span>
                      </div>
                    </div>
                    
                    {/* Time & Weather Display */}
                    {/* <div className="time-weather-display">
                      <div className="weather-info">
                        <div className="weather-temp">30°C</div>
                        <div className="weather-condition">Sunny</div>
                      </div>
                      <div className="current-time">{formatTime(currentTime)}</div>
                      <div className="current-date">{formatDate(currentTime)}</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you for your message! We'll respond within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ⚠️ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? "error" : ""}
                    required
                    aria-required="true"
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                  />
                  {formErrors.name && (
                    <div id="name-error" className="field-error">{formErrors.name}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? "error" : ""}
                    required
                    aria-required="true"
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                  />
                  {formErrors.email && (
                    <div id="email-error" className="field-error">{formErrors.email}</div>
                  )}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-describedby="phone-help"
                  />
                  <small id="phone-help" className="field-help">
                    Include country code for international calls
                  </small>
                </div>

                {/* Department Field */}
                <div className="form-group">
                  <select
                    name="department"
                    id="department"
                    value={formData.department}
                    onChange={handleChange}
                    aria-label="Select Department"
                  >
                    {departments.map(dept => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message... *"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => {
                      handleChange(e);
                      handleTextareaResize(e);
                    }}
                    className={formErrors.message ? "error" : ""}
                    required
                    aria-required="true"
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                  />
                  {formErrors.message && (
                    <div id="message-error" className="field-error">{formErrors.message}</div>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={formErrors.consent ? "error" : ""}
                    required
                    aria-required="true"
                    aria-describedby={formErrors.consent ? "consent-error" : "consent-help"}
                  />
                  <label htmlFor="consent" className="checkbox-label">
                    I agree to the <a href="/privacy" className="privacy-link">Privacy Policy</a> and consent to Jireh Trading contacting me regarding my inquiry.
                  </label>
                  {formErrors.consent && (
                    <div id="consent-error" className="field-error">{formErrors.consent}</div>
                  )}
                  <small id="consent-help" className="field-help">
                    We respect your privacy and will never share your information
                  </small>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className={`btn primary glow ${submitStatus === 'loading' ? 'loading' : ''}`}
                  disabled={submitStatus === 'loading' || submitStatus === 'success'}
                  aria-busy={submitStatus === 'loading'}
                >
                  {getButtonText()}
                </button>

                <p className="form-note">
                  Fields marked with * are required. We'll respond to your inquiry as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="container">
          <div className="emergency-content">
            <h2>🚨 Urgent Transport Needs?</h2>
            <p>
              For emergency or time-sensitive transport requirements, 
              call our 24/7 dispatch line immediately.
            </p>
            <div className="emergency-contact">
              <a href="tel:+27787382435" className="emergency-btn">
                📞 Call Emergency Dispatch
              </a>
              <span className="emergency-note">
                Available 24/7 for urgent agricultural transport
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;