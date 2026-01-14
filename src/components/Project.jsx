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
    <div className="services-container">
      <Navbar />

      <motion.main
        className="services-main"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        {/* Page Title */}
        <motion.h1 variants={fadeUp}>Projects That Captivate</motion.h1>
        <motion.p variants={fadeUp}>
          Bold ideas engineered to stop scrolls, spark conversations, and drive
          measurable hype for brands.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {attractionProjects.map((project) => (
            <motion.div
              key={project.id}
              className="service-card"
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2>
                <Link to={project.link}>{project.title}</Link>
              </h2>

              <p className="project-category">{project.category}</p>
              <p>{project.description}</p>

              <Link to={project.link} className="project-link">
                Source code →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Projects;
