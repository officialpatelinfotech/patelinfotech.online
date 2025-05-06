import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Services.css";
import { Link } from "react-router-dom";

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
      <main className="services-main">
        <h1>Projects That Captivate</h1>
        <p>
          Bold ideas engineered to stop scrolls, spark conversations, and drive
          measurable hype for brands.
        </p>

        <div className="services-grid">
          {attractionProjects.map((project) => (
            <div key={project.id} className="service-card">
              <h2>
                <Link to={project.link}>{project.title}</Link>
              </h2>
              <p className="project-category">{project.category}</p>
              <p>{project.description}</p>
              <p className="project-highlight">{project.highlight}</p>
              <Link to={project.link} className="project-link">
                Source code →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
