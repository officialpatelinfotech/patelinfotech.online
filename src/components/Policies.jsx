// Policies.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Policies.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Policies = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />

      {/* Header */}
      <motion.header
        className="policies-header"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h1>Privacy Policy</h1>
        <p>Protecting your data is our priority</p>
      </motion.header>

      {/* Content */}
      <motion.div
        className="policies-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        <motion.p variants={fadeUp}>
          At Patel Infotech Services, we respect your privacy and are committed
          to protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data.
        </motion.p>

        <motion.h2 variants={fadeUp}>1. Information We Collect</motion.h2>
        <motion.p variants={fadeUp}>
          We collect information such as name, email, phone number, and messages
          submitted through our forms.
        </motion.p>

        <motion.h2 variants={fadeUp}>2. How We Use Your Information</motion.h2>
        <motion.ul variants={fadeUp}>
          <li>Respond to inquiries</li>
          <li>Improve services</li>
          <li>Send updates (with consent)</li>
        </motion.ul>

        <motion.h2 variants={fadeUp}>3. Data Security</motion.h2>
        <motion.p variants={fadeUp}>
          Industry-standard security measures are used to protect your data.
        </motion.p>

        <motion.h2 variants={fadeUp}>4. Third-Party Services</motion.h2>
        <motion.p variants={fadeUp}>
          Trusted third-party tools may be used for analytics and forms.
        </motion.p>

        <motion.h2 variants={fadeUp}>5. Your Choices</motion.h2>
        <motion.p variants={fadeUp}>
          You may opt-out of emails or request data deletion anytime.
        </motion.p>

        <motion.h2 variants={fadeUp}>6. Contact Us</motion.h2>
        <motion.p variants={fadeUp}>
          Email:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@patelinfotech.online&su=Inquiry&body=Hello%20Patel%20Infotech"
            target="_blank"
            rel="noopener noreferrer"
            title="Send email via Gmail"
          >
            contact@patelinfotech.online
          </a>
        </motion.p>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Policies;
