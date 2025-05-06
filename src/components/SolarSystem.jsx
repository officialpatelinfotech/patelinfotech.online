import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/InteractiveTesseract.css";
import SolarSystemCanvas from "./SolarSystemCanvas";

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
    }
  ];

  return (
    <div className="project-landing-container">
      <Navbar />

      <div className="project-content-wrapper">
        {/* Main Content (Left 70%) */}
        <main className="project-main-content">
          <div className="project-header">
            <h1>{currentProject.title}</h1>
            <p className="project-category">{currentProject.category}</p>
            <p className="project-description">{currentProject.description}</p>
          </div>

          {/* Interactive Demo */}
          <div className="project-demo-container">
            <div className="demo-placeholder">
              <p>3D Solar System</p>
              <SolarSystemCanvas />
              <div className="demo-controls">
                <span>← Drag to move →</span>
                <span>Scroll to zoom</span>
              </div>
            </div>
          </div>

          {/* Source Code Section */}
          <section className="source-code-section">
            <h2>Implementation Details</h2>
            <div className="tech-stack">
              {currentProject.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <a
              href={currentProject.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="source-code-button"
            >
              View Full Source Code
            </a>
          </section>
        </main>

        {/* Project Navigation (Right 30%) */}
        <aside className="project-navigation">
          <h3>More Interactive Projects</h3>
          <ul className="project-list">
            {relatedProjects.map((project) => (
              <li key={project.id}>
                <Link to={project.link} className="project-nav-link">
                  <h4>{project.title}</h4>
                  <p>{project.category}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default InteractiveTesseract;
