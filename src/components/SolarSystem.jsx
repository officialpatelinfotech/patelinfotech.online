import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/InteractiveTesseract.css";
import SolarSystemCanvas from "./SolarSystemCanvas";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const InteractiveTesseract = () => {
  const currentProject = {
    id: 1,
    title: "3D Solar System",
    description:
      "A 3D solar system simulation where you can interact with planets and their orbits.",
    category: "HTML, CSS, React.js, Three.js",
    link: "/projects/react.js/solar-system",
    sourceCode: "https://github.com/officialpatelinfotech/solar-system",
    techStack: ["React", "Three.js", "GSAP", "WebGL"],
  };

  const relatedProjects = [
    {
      id: 2,
      title: "Interactive Tesseract",
      category: "React, Three.js",
      link: "/projects/react.js/interactive-tesseract",
    },
  ];

  return (
    <div className="project-landing-container">
      <Navbar />

      <motion.div
        className="project-content-wrapper"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Main Content */}
        <motion.main
          className="project-main-content"
          variants={stagger}
        >
          {/* Header */}
          <motion.div className="project-header" variants={fadeUp}>
            <motion.h1 variants={fadeUp}>
              {currentProject.title}
            </motion.h1>
            <motion.p className="project-category" variants={fadeUp}>
              {currentProject.category}
            </motion.p>
            <motion.p className="project-description" variants={fadeUp}>
              {currentProject.description}
            </motion.p>
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            className="project-demo-container"
            variants={fadeUp}
          >
            <motion.div
              className="demo-placeholder"
              whileHover={{ scale: 1.01 }}
            >
              <p>3D Solar System</p>

              {/* DO NOT animate canvas directly */}
              <SolarSystemCanvas />

              <div className="demo-controls">
                <span>← Drag to move →</span>
                <span>Scroll to zoom</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Source Code Section */}
          <motion.section
            className="source-code-section"
            variants={fadeUp}
          >
            <motion.h2 variants={fadeUp}>
              Implementation Details
            </motion.h2>

            <motion.div
              className="tech-stack"
              variants={stagger}
            >
              {currentProject.techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.a
              href={currentProject.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="source-code-button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Source Code
            </motion.a>
          </motion.section>
        </motion.main>

        {/* Sidebar */}
        <motion.aside
          className="project-navigation"
          variants={fadeUp}
        >
          <h3>More Interactive Projects</h3>

          <motion.ul
            className="project-list"
            variants={stagger}
          >
            {relatedProjects.map((project) => (
              <motion.li
                key={project.id}
                variants={fadeUp}
                whileHover={{ x: 6 }}
              >
                <Link to={project.link} className="project-nav-link">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.aside>
      </motion.div>

      <Footer />
    </div>
  );
};

export default InteractiveTesseract;
