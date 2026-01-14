import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/WebDevelopment.css";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="webdev-container">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 variants={fadeUp}>
          Web Development Services
        </motion.h1>

        <motion.p variants={fadeUp}>
          We build fast, responsive, and scalable websites tailored to your business needs.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
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
              desc: "React, Next.js, Vue.js, and modern JavaScript frameworks.",
            },
            {
              title: "Backend Development",
              desc: "Node.js, Django, Laravel, and database integration.",
            },
            {
              title: "E-Commerce Solutions",
              desc: "Shopify, WooCommerce, and custom payment gateways.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
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
          Get a Free Quote
        </motion.button>
      </motion.main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
