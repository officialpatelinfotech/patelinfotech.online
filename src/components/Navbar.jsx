import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/brand-logo.png"; // Ensure the logo file is in the correct path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Patel Infotech Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/policies" onClick={() => setIsMenuOpen(false)}>Policies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;