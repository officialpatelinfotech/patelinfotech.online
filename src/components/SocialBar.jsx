import React from "react";
import "../styles/SocialBar.css"; // Ensure the CSS file exists
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"; // Import icons from react-icons

const SocialBar = () => {
  return (
    <div className="sidebar">
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
  );
};

export default SocialBar;