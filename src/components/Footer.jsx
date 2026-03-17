import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-section">
            <div className="navbar-logo">
              <Link to="/" aria-label="Patel Infotech">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                  alt="Patel Infotech"
                  className="site-logo"
                />
                <span className="site-name">Patel Infotech Services</span>
              </Link>
            </div>
            <p className="footer-tagline">
              Delivering high-end digital solutions with <br />
              precision and innovation since 2025.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/officialpatelinfotech" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/patel-infotech-services" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com/people/Patel-Infotech-Services/61571309896849/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-link-col">
              <h4>Services</h4>
              <ul>
                <li><Link to="/website-development">Web Development</Link></li>
                <li><Link to="/website-design">Website Design</Link></li>
                <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
                <li><Link to="/seo">SEO Optimization</Link></li>
                <li><Link to="/website-maintenance">Website Maintenance</Link></li>
                <li><Link to="/hosting">Hosting & Deployment</Link></li>
              </ul>
            </div>
            <div className="footer-link-col">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/our-clients">Our Clients</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-link-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/policies">Policies</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} Patel Infotech Services. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/location">Location</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
