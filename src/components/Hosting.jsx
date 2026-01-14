import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Hosting.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hosting = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="hosting-container">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <motion.h1 variants={fadeUp}>Web Hosting Solutions</motion.h1>
        <motion.p variants={fadeUp}>
          Blazing-fast, secure, and scalable hosting tailored for your business needs.
        </motion.p>

        {/* Pricing */}
        <motion.div
          className="pricing-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              title: "Shared Hosting",
              price: "₹500",
              features: [
                "100GB SSD Storage",
                "Unlimited Bandwidth",
                "Free SSL Certificate",
                "24/7 Support",
              ],
            },
            {
              title: "VPS Hosting",
              price: "₹900",
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
              price: "₹3500",
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
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              {plan.featured && (
                <div className="popular-badge">MOST POPULAR</div>
              )}
              <h3>{plan.title}</h3>
              <div className="price">
                {plan.price}
                <span>/mo</span>
              </div>
              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="hosting-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Why Choose Our Hosting?</h2>

          <div className="features-grid">
            {[
              { icon: "⚡", title: "99.9% Uptime" },
              { icon: "🛡️", title: "Free Backups" },
              { icon: "🌐", title: "Global CDN" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="feature"
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <div className="icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.button
          onClick={redirectToContact}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </motion.button>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Hosting;
