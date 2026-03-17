import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/ContactUs.css";
import ContactUsImage from "../assets/images/contactus-right-side.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Configure local dev via: REACT_APP_CONTACT_API_URL=http://localhost:8000/api/contact.php
      // Production/default: same-origin PHP endpoint under /public/api
      const runtimeApiUrl =
        typeof window !== "undefined" &&
        window.__APP_CONFIG__ &&
        typeof window.__APP_CONFIG__.CONTACT_API_URL === "string" &&
        window.__APP_CONFIG__.CONTACT_API_URL.trim() !== ""
          ? window.__APP_CONFIG__.CONTACT_API_URL.trim()
          : null;

      const apiUrl =
        runtimeApiUrl || process.env.REACT_APP_CONTACT_API_URL || "/api/contact.php";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        throw new Error(
          "Invalid response from server. For local dev, start a PHP server for /public and set REACT_APP_CONTACT_API_URL (e.g. http://localhost:8000/api/contact.php)."
        );
      }

      if (response.ok && result.status === "success") {
        setSuccess(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to send. Please try again.");
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="contact-main-content"
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.header className="contact-hero-header" variants={fadeUp}>
            <div className="service-badge-container">
              <span className="dot"></span>
              <span className="badge-text">Get In Touch</span>
            </div>
            <h1>Let's <span className="font-italic">Connect</span></h1>
            <p>We’d love to hear from you! Reach out for inquiries, collaborations, or just to say hello.</p>
          </motion.header>

          <div className="contact-grid">
            {/* Left Side: Info */}
            <motion.div
              className="contact-info-panel glass-morphism"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Fill out the form or reach us via our details below.</p>
              </div>

              <div className="info-details">
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div className="info-text">
                    <label>Phone</label>
                    <a href="tel:+919309950513">+91 9309950513</a>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div className="info-text">
                    <label>Email</label>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@patelinfotech.online"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contact@patelinfotech.online
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div className="info-text">
                    <label>Address</label>
                    <p>
                      Tipsy, Topsy Co. Op. Society,<br />
                      Flat 405, A Wing, Sambhaji Chowk,<br />
                      Ulhasnagar, Maharashtra 421004
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-visual">
                <img src={ContactUsImage} alt="Contact Patel Infotech Services" />
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              className="contact-form-panel glass-morphism"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>

              {success && (
                <motion.div className="form-status success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  ✅ Message sent successfully!
                </motion.div>
              )}

              {error && (
                <motion.div className="form-status error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  ❌ {typeof error === 'string' ? error : "Failed to send. Please try again."}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default ContactUs;
