import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/UIUXDesign.css";
import { motion } from "framer-motion";

const UIUXDesign = () => {
  const redirectToContact = () => {
    window.location.href = "/contactus";
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="uiux-container">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 variants={fadeUp}>
          UI/UX Design Services
        </motion.h1>

        <motion.p variants={fadeUp}>
          Crafting intuitive, beautiful, and user-centered digital experiences that drive engagement.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="services-grid"
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
              desc: "Pixel-perfect designs with Figma, Adobe XD, and responsive layouts."
            },
            {
              icon: "🔍",
              title: "User Research",
              desc: "Personas, user flows, and usability testing to validate designs."
            },
            {
              icon: "📱",
              title: "Prototyping",
              desc: "Interactive prototypes to demonstrate functionality before development."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={redirectToContact}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Start Your Project
        </motion.button>
      </motion.main>

      <Footer />
    </div>
  );
};

export default UIUXDesign;
