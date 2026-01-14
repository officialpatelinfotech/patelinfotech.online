import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/WebsiteMaintenance.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WebsiteMaintenance = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="maintenance-container">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <motion.section className="maintenance-hero" variants={fadeUp}>
          <motion.h1 variants={fadeUp}>
            Website Maintenance Plans
          </motion.h1>

          <motion.p className="subtitle" variants={fadeUp}>
            Ongoing updates, backups, security checks, and performance monitoring —
            all handled for you.
          </motion.p>

          <motion.div
            className="guarantee-badge"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <span>✓ 99.9% Uptime Guarantee</span>
          </motion.div>
        </motion.section>

        {/* Value Proposition */}
        <motion.section
          className="value-props"
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
            },
            {
              icon: "⚡",
              title: "Peak Performance",
              desc: "Monthly speed optimizations and broken link checks",
            },
            {
              icon: "📅",
              title: "Update Calendar",
              desc: "Scheduled maintenance during low-traffic periods",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="prop-card"
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          className="maintenance-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h2 variants={fadeUp}>
            Focus on Your Business, We'll Handle the Tech
          </motion.h2>

          <motion.button
            onClick={redirectToContact}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Secure Your Website Now
          </motion.button>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
};

export default WebsiteMaintenance;
