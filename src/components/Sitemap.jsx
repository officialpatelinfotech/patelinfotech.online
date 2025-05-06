// Sitemap.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Sitemap.css";

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <Navbar />
      <main>
        <h1>Website Sitemap</h1>
        
        <div className="sitemap-grid">
          <div className="sitemap-section">
            <h2>Main Pages</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Services</h2>
            <ul>
              <li><Link to="/website-development">Website Development</Link></li>
              <li><Link to="/website-design">Website Design</Link></li>
              <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
              <li><Link to="/seo">SEO Optimization</Link></li>
              <li><Link to="/hosting">Hosting Solutions</Link></li>
              <li><Link to="/website-maintenance">Website Maintenance</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Projects</h2>
            <ul>
              <li><Link to="/projects/react.js/interactive-tesseract">Interactive Tesseract</Link></li>
              <li><Link to="/projects/react.js/solar-system">3D Solar System</Link></li>
            </ul>
          </div>

          <div className="sitemap-section">
            <h2>Legal</h2>
            <ul>
              <li><Link to="/policies">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;