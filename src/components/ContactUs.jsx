import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/ContactUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ContactUsImage from "../assets/images/contactus-right-side.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

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

  // ✅ EMAILJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wvjla62",         // 🔹 Service ID
        "template_t1a3nxb",        // 🔹 Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "VzFpMF75ilPHVuNWs"        // 🔹 Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contactus-container">
      <Navbar />

      <motion.main
        className="contactus-main"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 variants={fadeUp}>Contact Us</motion.h1>
        <motion.p variants={fadeUp}>
          We’d love to hear from you! Let’s get in touch.
        </motion.p>

        <motion.div
          className="contactus-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT */}
          <motion.div className="contact-info" variants={fadeUp}>
            <h2>Get in Touch</h2>

            <p>📞 Phone: <a href="tel:+919309950513">+91 9309950513</a></p>

            <p>
              📧 Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@patelinfotech.online&su=Inquiry&body=Hello%20Patel%20Infotech"
                target="_blank"
                rel="noopener noreferrer"
                title="Send email via Gmail"
              >
                contact@patelinfotech.online
              </a>
            </p>

            <p>
              📍 Address:<br />
              Tipsy, Topsy Co. Op. Society,<br />
              Flat 405, A Wing,<br />
              Sambhaji Chowk,<br />
              Ulhasnagar, Maharashtra 421004
            </p>

            <motion.img
              src={ContactUsImage}
              alt="Contact Patel Infotech"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div className="contact-form" variants={fadeUp}>
            <h2>Send us a message</h2>

            <form onSubmit={handleSubmit}>
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Your Message *</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                className="contactus-cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>

            {success && (
              <motion.div className="message success" animate={{ opacity: 1 }}>
                ✅ Message sent successfully!
              </motion.div>
            )}

            {error && (
              <motion.div className="message error" animate={{ opacity: 1 }}>
                ❌ Failed to send message. Try again.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default ContactUs;
