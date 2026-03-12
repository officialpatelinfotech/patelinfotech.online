import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Services.css"; // Using global services styling
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const UIUXDesign = () => {
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
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <header className="services-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-badge-container"
            >
              <span className="dot"></span>
              <span className="badge-text">UI/UX Design</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Experiences That <span className="font-italic">Engage</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Crafting intuitive, beautiful, and user-centered digital experiences that drive engagement and delight users.
            </motion.p>
          </header>

          {/* Cards Grid */}
          <motion.div
            className="services-detailed-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {[
              {
                icon: "🎨",
                title: "User Interface Design",
                desc: "Pixel-perfect designs with Figma, Adobe XD, and responsive layouts.",
                features: ["Component Libraries", "Responsive UI", "Visual Design"]
              },
              {
                icon: "🔍",
                title: "User Research",
                desc: "Personas, user flows, and usability testing to validate designs.",
                features: ["Market Analysis", "User Testing", "Behavior Analytics"]
              },
              {
                icon: "📱",
                title: "Prototyping",
                desc: "Interactive prototypes to demonstrate functionality before development.",
                features: ["Interactive Flows", "Micro-animations", "A/B Testing"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card glass-morphism"
                onClick={redirectToContact}
                style={{ cursor: "pointer" }}
                variants={fadeUp}
                transition={{ duration: 0.3 }}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-full-desc">{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feat, fIdx) => (
                    <span key={fIdx} className="feature-tag">{feat}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <footer className="services-page-footer">
            <h2>Start building a better user experience?</h2>
            <button className="btn-primary" onClick={redirectToContact}>
              Start Your Project
            </button>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
