import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Policies.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Policies = () => {
  return (
    <div className="policies-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="policies-main-content"
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.header className="policies-hero-header" variants={fadeUp}>
            <div className="service-badge-container">
              <span className="dot"></span>
              <span className="badge-text">Legal & Privacy</span>
            </div>
            <h1>Your <span className="font-italic">Data</span> Security Matters</h1>
            <p>At Patel Infotech Services, transparency and trust are at the core of our operations.</p>
          </motion.header>

          <motion.div className="policies-content-card glass-morphism" variants={fadeUp}>
            <div className="policy-intro">
              <p>
                We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data with the highest industry standards.
              </p>
            </div>

            <section className="policy-section">
              <h2>1. Information Collection</h2>
              <p>We collect essential information such as name, email address, and project requirements submitted through our digital touchpoints to provide a personalized service experience.</p>
            </section>

            <section className="policy-section">
              <h2>2. Usage of Data</h2>
              <ul className="policy-list">
                <li>Streamlining communication for ongoing projects.</li>
                <li>Enhancing our service delivery through internal analytics.</li>
                <li>Providing security updates and critical system notifications.</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>3. Strategic Data Security</h2>
              <p>We employ enterprise-grade encryption and secure server protocols to ensure your intellectual property and personal details remain confidential and protected from unauthorized access.</p>
            </section>

            <section className="policy-section">
              <h2>4. Collaborative Partners</h2>
              <p>We only share data with trusted third-party cloud infrastructure providers (like AWS or Google Cloud) purely for hosting and performance optimization purposes under strict NDAs.</p>
            </section>

            <section className="policy-section">
              <h2>5. Inquiries & Contact</h2>
              <p>If you have any questions regarding our security protocols, please reach out to our legal department:</p>
              <a
                href="mailto:contact@patelinfotech.online"
                className="policy-contact-link"
              >
                contact@patelinfotech.online
              </a>
            </section>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Policies;
