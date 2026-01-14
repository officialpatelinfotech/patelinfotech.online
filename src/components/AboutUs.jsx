import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />

      {/* Header Animation */}
      <motion.header
        className="about-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <p>Get to know Patel Infotech Services</p>
      </motion.header>

      {/* Content Section */}
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 variants={fadeUp}>Who We Are</motion.h2>
        <motion.p variants={fadeUp}>
          Patel Infotech Services was established in <strong>January 2025</strong>{" "}
          with a clear mission: to craft custom web applications and websites with
          precision, creativity, and care. We are a forward-thinking digital
          company committed to delivering cutting-edge solutions for clients
          across industries.
        </motion.p>

        <motion.h2 variants={fadeUp}>Meet Our Founder</motion.h2>
        <motion.p variants={fadeUp}>
          Our company is led by <strong>Shubham Patel</strong>, a seasoned
          technology expert with over <strong>10 years of professional
          experience</strong> in software development and digital solutions.
          Shubham’s vision, leadership, and technical know-how form the backbone
          of Patel Infotech Services, driving our team toward innovation and
          excellence.
        </motion.p>

        <motion.h2 variants={fadeUp}>Our Mission</motion.h2>
        <motion.p variants={fadeUp}>
          To empower businesses by building reliable, scalable, and visually
          stunning digital platforms that align perfectly with their goals.
        </motion.p>

        <motion.h2 variants={fadeUp}>Our Values</motion.h2>
        <motion.ul variants={fadeUp}>
          <motion.li variants={fadeUp}>
            <strong>Integrity</strong> – We build trust through transparency and
            honesty.
          </motion.li>
          <motion.li variants={fadeUp}>
            <strong>Innovation</strong> – We embrace change and push creative
            boundaries.
          </motion.li>
          <motion.li variants={fadeUp}>
            <strong>Quality</strong> – We prioritize performance, security, and
            user experience.
          </motion.li>
        </motion.ul>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutUs;
