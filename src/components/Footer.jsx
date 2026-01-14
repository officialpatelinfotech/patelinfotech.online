import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeUp}
    >
      <motion.div className="footer-columns" variants={fadeUp}>
        {/* Services */}
        <motion.div className="footer-column" variants={fadeUp}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/website-development">Website Development</Link></li>
            <li><Link to="/website-design">Website Design</Link></li>
            <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
            <li><Link to="/seo">SEO Optimization</Link></li>
            <li><Link to="/hosting">Hosting</Link></li>
            <li><Link to="/website-maintenance">Website Maintenance</Link></li>
          </ul>
        </motion.div>

        {/* Resources */}
       {/* Resources */}
<motion.div className="footer-column" variants={fadeUp}>
  <h4>Resources</h4>
  <ul>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/about-us">Our Story</Link></li>
    <li><Link to="/contact-us">Contact Us</Link></li>
    <li><Link to="/sitemap">Sitemap</Link></li>
    <li><Link to="/our-clients">Our Clients</Link></li>
  </ul>
</motion.div>


        {/* Social */}
        <motion.div className="footer-column" variants={fadeUp}>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <motion.a
              href="https://instagram.com/officialpatelinfotech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className="icon" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/patel-infotech-services"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="icon" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/people/Patel-Infotech-Services/61571309896849/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook className="icon" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="footer-bottom" variants={fadeUp}>
        <p>
          &copy; {new Date().getFullYear()} Patel Infotech Services. All rights reserved.
        </p>
        <ul className="footer-links">
          <li><Link to="/policies">Privacy Policy</Link></li>
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
