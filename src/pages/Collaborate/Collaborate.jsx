import React, { useState } from "react";
import "./Collaborate.css";

const collaborationTypes = [
  { title: "Farmer", description: "Join as a local farmer to supply produce." },
  { title: "Supplier", description: "Provide equipment, seeds, or services." },
  { title: "Trader", description: "Collaborate to trade and distribute products." },
  { title: "Other", description: "Any other partnership opportunity." },
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardClick = (type) => {
    setFormData({ ...formData, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      type: "",
      message: "",
    });
  };

  return (
    <main className="collaborate">
      <section className="form-section">
        <div className="container">
          <h1>Collaborate With Us</h1>
          <p>Farmers and partners can fill out this form to join our network.</p>

          {/* Collaboration Type Cards */}
          <div className="collaboration-types">
            {collaborationTypes.map((item) => (
              <div
                key={item.title}
                className={`type-card ${formData.type === item.title ? "selected" : ""}`}
                onClick={() => handleCardClick(item.title)}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="location"
                placeholder="Location (City/Province)"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
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
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Additional Details"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <button type="submit" className="btn primary glow">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Collaborate;
