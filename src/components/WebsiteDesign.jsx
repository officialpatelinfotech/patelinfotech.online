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

const WebsiteDesign = () => {
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
          {/* Header Section */}
          <header className="services-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-badge-container"
            >
              <span className="dot"></span>
              <span className="badge-text">Website Design</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Design That <span className="font-italic">Converts</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              We create visually stunning, user-friendly websites that align with
              your brand and effectively drive business growth.
            </motion.p>
          </header>

          {/* Process Section (Reusing Services styling) */}
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
                step: "01",
                title: "Discovery",
                desc: "Research your business, target audience, and key competitors to establish a solid foundation.",
                features: ["Market Research", "Competitor Analysis", "Brand Identity"]
              },
              {
                step: "02",
                title: "Wireframing",
                desc: "Create structural blueprints and logic flow for key pages to outline content and functionality.",
                features: ["UX Planning", "Information Architecture", "Sitemaps"]
              },
              {
                step: "03",
                title: "Visual Design",
                desc: "Develop high-fidelity aesthetic mockups integrated perfectly with your specific branding goals.",
                features: ["UI Design", "Brand Integration", "Interactive Prototypes"]
              },
              {
                step: "04",
                title: "Development Ready",
                desc: "Finalize layouts and deliver precisely detailed design assets and robust specs for developers.",
                features: ["Design Systems", "Asset Export", "Developer Handoff"]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="service-detail-card glass-morphism"
                onClick={redirectToContact}
                style={{ cursor: "pointer" }}
                variants={fadeUp}
                transition={{ duration: 0.3 }}
              >
                <div className="service-card-top">
                  <span className="service-number">{item.step}</span>
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

          <footer className="services-page-footer">
            <h2>Ready to Elevate Your Online Presence?</h2>
            <button className="btn-primary" onClick={redirectToContact}>
              Start Your Project Today
            </button>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default WebsiteDesign;
