// Sitemap.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Sitemap.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        ["/", "Home"],
        ["/about-us", "About Us"],
        ["/services", "Our Services"],
        ["/projects", "Projects"],
        ["/contact-us", "Contact Us"],
        ["/sitemap", "Sitemap"],
      ],
    },
    {
      title: "Services",
      links: [
        ["/website-development", "Website Development"],
        ["/website-design", "Website Design"],
        ["/ui-ux-design", "UI/UX Design"],
        ["/seo", "SEO Optimization"],
        ["/hosting", "Hosting Solutions"],
        ["/website-maintenance", "Website Maintenance"],
      ],
    },
    {
      title: "Projects",
      links: [
        ["/projects/react.js/interactive-tesseract", "Interactive Tesseract"],
        ["/projects/react.js/solar-system", "3D Solar System"],
      ],
    },
    {
      title: "Our Locations",
      links: [
        ["/location", "Office Location"],
        ["/contact-us", "Contact & Address"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["/policies", "Privacy Policy"],
        ["/terms", "Terms & Conditions"],
      ],
    },
  ];

  return (
    <div className="sitemap-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="sitemap-main-content"
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.header className="sitemap-hero-header" variants={fadeUp}>
            <div className="service-badge-container">
              <span className="dot"></span>
              <span className="badge-text">Site Navigation</span>
            </div>
            <h1>Website <span className="font-italic">Sitemap</span></h1>
            <p>Navigate effortlessly through our entire digital ecosystem.</p>
          </motion.header>

          <div className="sitemap-static-grid">
            {sitemapSections.map((section, index) => (
              <motion.div
                key={index}
                className="sitemap-section-card glass-morphism"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: "var(--accent-blue)" }}
              >
                <h2>{section.title}</h2>
                <ul className="sitemap-links-list">
                  {section.links.map(([path, label], i) => (
                    <li key={i}>
                      <span className="list-dot"></span>
                      <Link to={path}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Sitemap;
