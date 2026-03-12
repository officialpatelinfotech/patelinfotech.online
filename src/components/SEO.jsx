import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css"; // Using global services styling

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
          {/* Header */}
          <header className="services-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-badge-container"
            >
              <span className="dot"></span>
              <span className="badge-text">Search Engine Optimization</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Dominate Search <span className="font-italic">Rankings</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Boost your online visibility and dominate search rankings with our
              data-driven SEO strategies.
            </motion.p>
          </header>

          {/* Services */}
          <motion.div
            className="services-detailed-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🔍",
                title: "Keyword Research",
                desc: "Identify high-value keywords to target your ideal audience.",
                features: ["Search Volume Analysis", "Intent Tracking", "Competitor Keywords"]
              },
              {
                icon: "📈",
                title: "On-Page SEO",
                desc: "Optimize content, meta tags, and structure for search engines.",
                features: ["Meta Optimization", "Content Strategy", "Site Speed"]
              },
              {
                icon: "🔗",
                title: "Link Building",
                desc: "Earn authoritative backlinks to improve domain authority.",
                features: ["Guest Posting", "Digital PR", "Outreach Campaigns"]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="service-detail-card glass-morphism"
                onClick={redirectToContact}
                style={{ cursor: "pointer" }}
                variants={fadeUp}
              >
                <div className="service-card-top">
                  <span className="service-number">{item.icon}</span>
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

          {/* Benefits */}
          <motion.div
            className="services-detail-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "6rem", marginBottom: "0" }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#fff", fontWeight: "700" }}>
              Why Our SEO Works
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <span className="feature-tag" style={{ border: "1px solid rgba(0, 136, 255, 0.4)", background: "rgba(0, 136, 255, 0.15)" }}>Google Algorithm Updates Monitoring</span>
              <span className="feature-tag" style={{ border: "1px solid rgba(0, 136, 255, 0.4)", background: "rgba(0, 136, 255, 0.15)" }}>Monthly Performance Reports</span>
              <span className="feature-tag" style={{ border: "1px solid rgba(0, 136, 255, 0.4)", background: "rgba(0, 136, 255, 0.15)" }}>100% White-Hat Techniques</span>
            </div>
          </motion.div>

          {/* CTA */}
          <footer className="services-page-footer">
            <h2>Let's drive organic traffic to your site.</h2>
            <button className="btn-primary" onClick={redirectToContact}>
              Get a Free SEO Audit
            </button>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default SEO;
