import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css"; // Using global services styling

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hosting = () => {
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
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          {/* Header */}
          <header className="services-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-badge-container"
            >
              <span className="dot"></span>
              <span className="badge-text">Hosting & Deployment</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Reliable infrastructure for <span className="font-italic">Growth</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Blazing-fast, secure, and scalable hosting tailored for your business needs.
            </motion.p>
          </header>

          {/* Pricing Grid */}
          <motion.div
            className="services-detailed-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {[
              {
                title: "Shared Hosting",
                price: "₹500 /mo",
                features: [
                  "100GB SSD Storage",
                  "Unlimited Bandwidth",
                  "Free SSL Certificate",
                  "24/7 Support",
                ],
              },
              {
                title: "VPS Hosting",
                price: "₹900 /mo",
                featured: true,
                features: [
                  "4GB RAM",
                  "2 vCPU Cores",
                  "100GB NVMe Storage",
                  "Root Access",
                ],
              },
              {
                title: "Dedicated Server",
                price: "₹3500 /mo",
                features: [
                  "32GB RAM",
                  "8 CPU Cores",
                  "1TB SSD Storage",
                  "DDoS Protection",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="service-detail-card glass-morphism"
                onClick={redirectToContact}
                variants={fadeUp}
                style={{
                  cursor: "pointer",
                  border: plan.featured ? "1px solid var(--accent-blue)" : undefined,
                  background: plan.featured ? "rgba(0, 136, 255, 0.05)" : undefined,
                  position: "relative"
                }}
              >
                {plan.featured && (
                  <div style={{ position: "absolute", top: "15px", right: "15px", background: "var(--accent-blue)", color: "#fff", fontSize: "0.7rem", padding: "4px 8px", borderRadius: "12px", fontWeight: "bold", letterSpacing: "1px" }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="service-card-top">
                  <h3>{plan.title}</h3>
                </div>
                <p className="service-full-desc" style={{ fontSize: "1.8rem", color: "#fff", fontWeight: "700" }}>{plan.price}</p>
                <div className="service-features" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {plan.features.map((f, i) => (
                    <span key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)" }}>
                      <span style={{ color: "var(--accent-blue)", fontWeight: "bold" }}>✓</span> {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            className="services-detail-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ marginTop: "6rem", marginBottom: "0" }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#fff", fontWeight: "700" }}>
              Why Choose Our Hosting?
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
              {[
                { icon: "⚡", title: "99.9% Uptime" },
                { icon: "🛡️", title: "Free Backups" },
                { icon: "🌐", title: "Global CDN" },
              ].map((feature, i) => (
                <div key={i} className="feature-tag" style={{ border: "1px solid rgba(255, 255, 255, 0.1)", background: "rgba(255,255,255,0.05)", color: "#fff", display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{feature.icon}</span>
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <footer className="services-page-footer">
            <h2>Get reliable hosting with our expertise.</h2>
            <button className="btn-primary" onClick={redirectToContact}>
              Get Started Now
            </button>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Hosting;
