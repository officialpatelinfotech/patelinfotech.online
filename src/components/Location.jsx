import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Location.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Location = () => {
  return (
    <div className="location-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="location-main-content"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.header className="location-hero-header" variants={fadeUp}>
            <div className="service-badge-container">
              <span className="dot"></span>
              <span className="badge-text">Find Us</span>
            </div>
            <h1>Our Office <span className="font-italic">Location</span></h1>
            <p className="location-subtitle">Visit Patel Infotech Services at our registered office in Maharashtra.</p>
          </motion.header>

          <div className="location-grid">
            {/* Address Section */}
            <motion.div className="location-details glass-morphism" variants={fadeUp}>
              <div className="info-header">
                <h2>📍 Patel Infotech Services</h2>
              </div>
              <div className="info-details location-texts">
                <p>
                  Tipsy, Topsy Co. Op. Society, <br />
                  Flat 405, A Wing, Sambhaji Chowk, <br />
                  Ulhasnagar, Maharashtra – 421004
                </p>
                <div className="contact-links">
                  <p>📞 <a href="tel:+919309950513">+91 9309950513</a></p>
                  <p>✉️ <a href="mailto:contact@patelinfotech.online">contact@patelinfotech.online</a></p>
                </div>

                {/* CTA */}
                <motion.div className="location-cta" variants={fadeUp} transition={{ delay: 0.2 }}>
                  <a href="https://www.google.com/maps/search/?api=1&query=Tipsy,+Topsy+Co.+Op.+Society,+Ulhasnagar+421004" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Get Directions
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="map-container glass-morphism"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                title="Patel Infotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9306!2d73.1533!3d19.2218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7940000000000!2sUlhasnagar%20421004!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Location;
