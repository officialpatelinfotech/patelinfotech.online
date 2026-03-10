import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/AboutUs.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <div className="about-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="about-main-content"
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.header className="about-hero-header" variants={fadeUp}>
            <div className="service-badge-container">
              <span className="dot"></span>
              <span className="badge-text">Our Story</span>
            </div>
            <h1>Architects of <span className="font-italic">Digital</span> Excellence</h1>
            <p>We combine visionary design with robust engineering to build the future of the web.</p>
          </motion.header>

          <div className="about-grid">
            <motion.section className="about-section-card glass-morphism" variants={fadeUp}>
              <h2>Who We Are</h2>
              <p>
                Established in <strong>January 2025</strong>, Patel Infotech Services was born from a passion for solving complex problems through elegant code. We aren't just developers; we are digital partners dedicated to your growth.
              </p>
            </motion.section>

            <motion.section className="about-section-card glass-morphism" variants={fadeUp}>
              <h2>Our Leadership</h2>
              <div className="founder-info">
                <p>
                  Led by <strong>Shubham Patel</strong>, a technology strategist with over <strong>10 years of mastery</strong> in the software landscape. His philosophy of "Innovation through Precision" guides every project we undertake.
                </p>
              </div>
            </motion.section>

            <motion.section className="about-section-card glass-morphism" variants={fadeUp}>
              <h2>Our Mission</h2>
              <p>
                To redefine the digital experience by creating products that are not only functional but emotionally resonant and technologically superior.
              </p>
            </motion.section>

            <motion.section className="about-section-card glass-morphism" variants={fadeUp}>
              <h2>Core Values</h2>
              <ul className="values-list">
                <li>
                  <span className="accent-dot"></span>
                  <strong>Uncompromising Quality</strong> — High standards in every line of code.
                </li>
                <li>
                  <span className="accent-dot"></span>
                  <strong>Radical Transparency</strong> — Honesty is our only policy.
                </li>
                <li>
                  <span className="accent-dot"></span>
                  <strong>Continuous Evolution</strong> — Learning today to lead tomorrow.
                </li>
              </ul>
            </motion.section>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default AboutUs;
