import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Services.css"; // Using global services styling
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  const navigate = useNavigate();

  const redirectToContact = () => {
    navigate("/contact-us");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
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
              <span className="badge-text">Web Development</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Building Next-Gen <span className="font-italic">Platforms</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              We build fast, responsive, and scalable websites tailored to your business needs, delivering digital products that drive growth.
            </motion.p>
          </header>

          {/* Services Grid */}
          <motion.div
            className="services-detailed-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                title: "Frontend Development",
                icon: "01",
                desc: "React, Next.js, Vue.js, and modern JavaScript frameworks.",
                features: ["Responsive Apps", "Interactive UI", "High Performance"]
              },
              {
                title: "Backend Development",
                icon: "02",
                desc: "Node.js, Django, Laravel, and database integration.",
                features: ["API Development", "Scalable Architecture", "Secure Data"]
              },
              {
                title: "E-Commerce Solutions",
                icon: "03",
                desc: "Shopify, WooCommerce, and custom payment gateways.",
                features: ["Payment Integrations", "Shopping Carts", "Inventory Management"]
              },
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
            <h2>Ready to transform your web presence?</h2>
            <button className="btn-primary" onClick={redirectToContact}>
              Get a Free Quote
            </button>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
