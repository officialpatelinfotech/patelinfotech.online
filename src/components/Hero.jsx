import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-badge"
        >
          <span className="dot"></span>
          WORLD-CLASS IT SOLUTIONS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-title"
        >
          The <span className="font-italic">Expert</span> Tech+ <br />
          Solutions Agency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hero-description"
        >
          We deliver world-class IT services and digital transformations <br />
          that empower your business to lead in the digital era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="hero-cta"
        >
          <Link to="/contact-us" className="btn-primary">Contact Us</Link>
          <a href="#portfolio" className="btn-secondary">View Our work</a>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="scroll-dot"
        />
      </div>
    </section>
  );
};

export default Hero;
