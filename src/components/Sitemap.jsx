// Sitemap.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Sitemap.css";
import { motion } from "framer-motion";

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
    <div className="sitemap-container">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Website Sitemap</h1>

        <motion.div
          className="sitemap-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {sitemapSections.map((section, index) => (
            <motion.div
              key={index}
              className="sitemap-section"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <h2>{section.title}</h2>
              <ul>
                {section.links.map(([path, label], i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={path}>{label}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Sitemap;
