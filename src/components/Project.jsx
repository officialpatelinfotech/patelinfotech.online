import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Services.css";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Projects = () => {
  const attractionProjects = [
    {
      id: 1,
      title: "Interactive Tesseract",
      description:
        "You can interact with a 3D tesseract using your mouse or touch.",
      category: "HTML, CSS, React.js",
      link: "/projects/react.js/interactive-tesseract",
    },
    {
      id: 2,
      title: "Solar System Simulation",
      description: "A simulation of the solar system with interactive planets.",
      category: "HTML, CSS, JavaScript",
      link: "/projects/react.js/solar-system",
    },
  ];

  return (
    <div className="services-page-container">
      <Navbar />

      <motion.main
        className="services-detail-main"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <header className="services-detail-header">
            <motion.h1
              variants={fadeUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Projects That <span className="font-italic">Captivate</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Bold ideas engineered to stop scrolls, spark conversations, and drive
              measurable hype for brands.
            </motion.p>
          </header>

          {/* Projects Grid */}
          <motion.div
            className="services-detailed-list"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {attractionProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="service-detail-card glass-morphism"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: "var(--accent-blue)" }}
              >
                <div className="service-card-top">
                  <span className="service-number">0{project.id}</span>
                  <h3>
                    <Link to={project.link} style={{ color: 'inherit', textDecoration: 'none' }}>{project.title}</Link>
                  </h3>
                </div>

                <div className="service-features" style={{ marginBottom: '1.5rem' }}>
                  <span className="feature-tag">{project.category}</span>
                </div>

                <p className="service-full-desc">{project.description}</p>

                <Link to={project.link} className="project-link" style={{ color: "var(--accent-blue)", fontWeight: "600", textDecoration: "none", display: "inline-block", marginTop: "1rem" }}>
                  Source code →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Projects;
