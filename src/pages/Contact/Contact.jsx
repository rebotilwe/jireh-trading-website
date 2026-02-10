// Contact.jsx
import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    requestType: "",
    collaborateRole: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (formErrors[name]) setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleTextareaResize = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Enter a valid email";
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.consent) errors.consent = "Please agree to the Privacy Policy";
    if (!formData.requestType) errors.requestType = "Please select a request type";
    if (formData.requestType === "collaborate" && !formData.collaborateRole)
      errors.collaborateRole = "Please select your role for collaboration";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    setSubmitStatus("loading");

    try {
      // Replace YOUR_FORMSPREE_ENDPOINT with the actual endpoint the client will provide
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        requestType: "",
        collaborateRole: "",
        subject: "",
        message: "",
        consent: false,
      });
      setFormErrors({});
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    }
  };

  const getButtonText = () => {
    switch (submitStatus) {
      case "loading":
        return (
          <>
            Sending...
            <span className="loading-spinner"></span>
          </>
        );
      case "success":
        return "✓ Message Sent Successfully!";
      case "error":
        return "✗ Try Again";
      default:
        return "Send Message";
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

  const requestTypes = [
    { value: "", label: "Select Request Type" },
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "collaborate", label: "Collaborate" },
  ];

  const collaborateRoles = [
    { value: "", label: "Select Role" },
    { value: "farmer", label: "Farmer" },
    { value: "supplier", label: "Supplier" },
    { value: "trader", label: "Trader" },
  ];

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-badge">Get In Touch</div>
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            Have questions or want to collaborate? We’re here to help farmers, partners, and customers across South Africa.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* CONTACT INFO */}
            <div className="contact-info">
              <h2>Reach Out</h2>
              <p className="contact-intro">
                Contact us via phone, email, or this form. We usually respond within 24 hours.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-content">
                    <h3>Location</h3>
                    <p>Durban, KwaZulu-Natal</p>
                    <p>South Africa</p>
                    <a href="https://maps.google.com/?q=Durban+KwaZulu-Natal+South+Africa" target="_blank" rel="noopener noreferrer" className="contact-link">Open in Maps →</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-content">
                    <h3>Phone</h3>
                    <p>+27 78 738 2435</p>
                    <p className="emergency-note">24/7 Emergency Transport</p>
                    <a href="tel:+27787382435" className="contact-link">Call Now →</a>
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
                    <a href="mailto:info@jirehtradinggroup.co.za" className="contact-link">Send Email →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form">
              <h2>Send Message</h2>
              {submitStatus === "success" && <div className="success-message">✅ Thank you! We'll respond within 24 hours.</div>}
              {submitStatus === "error" && <div className="error-message">⚠️ Something went wrong. Please try again or contact us directly.</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className={formErrors.name ? "error" : ""} />
                  {formErrors.name && <div className="field-error">{formErrors.name}</div>}
                </div>

                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={formErrors.email ? "error" : ""} />
                  {formErrors.email && <div className="field-error">{formErrors.email}</div>}
                </div>

                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <select name="requestType" value={formData.requestType} onChange={handleChange} className={formErrors.requestType ? "error" : ""}>
                    {requestTypes.map(rt => <option key={rt.value} value={rt.value}>{rt.label}</option>)}
                  </select>
                  {formErrors.requestType && <div className="field-error">{formErrors.requestType}</div>}
                </div>

                {formData.requestType === "collaborate" && (
                  <div className="form-group">
                    <select name="collaborateRole" value={formData.collaborateRole} onChange={handleChange} className={formErrors.collaborateRole ? "error" : ""}>
                      {collaborateRoles.map(role => <option key={role.value} value={role.value}>{role.label}</option>)}
                    </select>
                    {formErrors.collaborateRole && <div className="field-error">{formErrors.collaborateRole}</div>}
                  </div>
                )}

                <div className="form-group">
                  <select name="department" value={formData.department} onChange={handleChange}>
                    {departments.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject (Optional)" value={formData.subject} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <textarea name="message" placeholder="Your message... *" rows="5" value={formData.message} onChange={e => { handleChange(e); handleTextareaResize(e); }} className={formErrors.message ? "error" : ""} />
                  {formErrors.message && <div className="field-error">{formErrors.message}</div>}
                </div>

                <div className="form-group checkbox-group">
                  <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className={formErrors.consent ? "error" : ""} />
                  <label htmlFor="consent" className="checkbox-label">
                    I agree to the <a href="/privacy" className="privacy-link">Privacy Policy</a>
                  </label>
                  {formErrors.consent && <div className="field-error">{formErrors.consent}</div>}
                </div>

                <button type="submit" className={`btn primary glow ${submitStatus === 'loading' ? 'loading' : ''}`} disabled={submitStatus === 'loading' || submitStatus === 'success'}>
                  {getButtonText()}
                </button>

                <p className="form-note">Fields marked with * are required.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
