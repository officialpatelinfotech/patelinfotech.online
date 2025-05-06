import React, { useState } from "react";
import "../styles/ContactUs.css"; // Updated CSS file for the new theme
import Footer from "./Footer"; // Import the Footer component
import Navbar from "./Navbar"; // Import the Navbar component
import ContactUsImage from "../assets/images/contactus-right-side.png"; // Ensure the image file is in the correct path

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      setSuccess(true);
      setError(false);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className="contactus-container">
      <Navbar /> {/* Navbar at the top */}
      <main className="contactus-main">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Let’s get in touch.</p>
        <div className="contactus-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919309950513">+91 93099 50513</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@patelinfotech.online">
                contact@patelinfotech.online
              </a>
            </p>
            <img src={ContactUsImage} alt="" />
          </div>

          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                required
              ></textarea>

              <button type="submit" className="contactus-cta-button">
                Send Message
              </button>
            </form>

            {success && (
              <div className="message success">
                Thanks! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="message error">
                Oops! Please fill in all fields correctly.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default ContactUs;