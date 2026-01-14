import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/WebsiteDesign.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WebsiteDesign = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="website-design-container">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <motion.section className="design-hero" variants={fadeUp}>
          <motion.h1 variants={fadeUp}>
            Website Design That Converts
          </motion.h1>

          <motion.p variants={fadeUp}>
            We create visually stunning, user-friendly websites that align with
            your brand and drive business growth.
          </motion.p>

          <motion.button
            onClick={redirectToContact}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Design Consultation
          </motion.button>
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="design-process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2 variants={fadeUp}>Our Design Process</motion.h2>

          <div className="process-steps">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Research your business, audience, and competitors",
              },
              {
                step: "2",
                title: "Wireframing",
                desc: "Create structural blueprints for key pages",
              },
              {
                step: "3",
                title: "Visual Design",
                desc: "Develop high-fidelity mockups with your branding",
              },
              {
                step: "4",
                title: "Development Ready",
                desc: "Deliver assets and specs for developers",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="step"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="design-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h2 variants={fadeUp}>
            Ready to Elevate Your Online Presence?
          </motion.h2>

          <motion.button
            onClick={redirectToContact}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
};

export default WebsiteDesign;
