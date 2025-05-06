import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"; // Import icons from react-icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/website-development">Website Development</Link></li>
            <li><Link to="/website-design">Website Design</Link></li>
            <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
            <li><Link to="/seo">SEO Optimization</Link></li>
            <li><Link to="/hosting">Hosting</Link></li>
            <li><Link to="/website-maintenance">Website Maintenance</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about-us">Our Story</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com/officialpatelinfotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/patel-infotech-services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://www.facebook.com/people/Patel-Infotech-Services/61571309896849/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Patel Infotech Services. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/policies">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;