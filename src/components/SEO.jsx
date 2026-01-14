import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/SEO.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const SEO = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="seo-container">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.h1 variants={fadeUp}>SEO Optimization Services</motion.h1>
        <motion.p variants={fadeUp}>
          Boost your online visibility and dominate search rankings with our
          data-driven SEO strategies.
        </motion.p>

        {/* Services */}
        <motion.div
          className="services-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: "🔍", title: "Keyword Research", text: "Identify high-value keywords to target your ideal audience." },
            { icon: "📈", title: "On-Page SEO", text: "Optimize content, meta tags, and structure for search engines." },
            { icon: "🔗", title: "Link Building", text: "Earn authoritative backlinks to improve domain authority." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="seo-benefits"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h2>Why Our SEO Works</h2>
          <ul>
            <li>✅ Google Algorithm Updates Monitoring</li>
            <li>✅ Monthly Performance Reports</li>
            <li>✅ 100% White-Hat Techniques</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.button
          onClick={redirectToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free SEO Audit
        </motion.button>
      </motion.main>

      <Footer />
    </div>
  );
};

export default SEO;
