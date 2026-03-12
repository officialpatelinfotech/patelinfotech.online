import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Services.css"; // Using global services styling
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WebsiteMaintenance = () => {
  const navigate = useNavigate();

  const redirectToContact = () => {
    navigate("/contact-us");
  };

  return (
    <div className="services-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="services-detail-main"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          {/* Hero Section */}
          <header className="services-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-badge-container"
            >
              <span className="dot"></span>
              <span className="badge-text">Website Maintenance</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Stay Secure and <span className="font-italic">Updated</span>
            </motion.h1>

            <motion.p className="subtitle" variants={fadeUp}>
              Ongoing updates, backups, security checks, and performance monitoring —
              all handled for you.
            </motion.p>
          </header>

          {/* Value Proposition */}
          <motion.div
            className="services-detailed-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                icon: "🛡️",
                title: "Security First",
                desc: "Regular vulnerability scans and malware protection",
                features: ["Daily Scans", "Malware Removal", "Firewall Optimization"]
              },
              {
                icon: "⚡",
                title: "Peak Performance",
                desc: "Monthly speed optimizations and broken link checks",
                features: ["Cache Tuning", "Image Compression", "Database Optimization"]
              },
              {
                icon: "📅",
                title: "Update Calendar",
                desc: "Scheduled maintenance during low-traffic periods",
                features: ["Plugin Updates", "Theme Updates", "Core Upgrades"]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="service-detail-card glass-morphism"
                onClick={redirectToContact}
                style={{ cursor: "pointer" }}
                variants={fadeUp}
              >
                <div className="service-card-top">
                  <span className="service-number">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p className="service-full-desc">{item.desc}</p>
                <div className="service-features">
                  {item.features.map((feat, fIdx) => (
                    <span key={fIdx} className="feature-tag">{feat}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Guarantee Badge embedded seamlessly */}
          <motion.div
            className="services-detail-header"
            variants={fadeUp}
            style={{ marginTop: "3rem", marginBottom: "0" }}
          >
            <div style={{ display: "inline-flex", background: "rgba(0, 136, 255, 0.1)", border: "1px solid rgba(0, 136, 255, 0.2)", padding: "10px 20px", borderRadius: "30px", color: "var(--accent-blue)", fontWeight: "bold" }}>
              ✓ 99.9% Uptime Guarantee
            </div>
          </motion.div>

          {/* CTA */}
          <footer className="services-page-footer">
            <h2>Focus on your business, we'll handle the tech.</h2>
            <button className="btn-primary" onClick={redirectToContact}>
              Secure Your Website Now
            </button>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default WebsiteMaintenance;
