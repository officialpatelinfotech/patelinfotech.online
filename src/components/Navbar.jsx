import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (name) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveCategory(name);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveCategory(null);
    }, 300); // Small delay to allow moving to the menu
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "About Us", path: "/about-us", hasDropdown: true },
    { name: "Our Clients", path: "/our-clients", hasDropdown: true },
  ];

  const handleLinkClick = (e, link) => {
    if (isMenuOpen) {
      // Small screen / Mobile: always navigate directly (no dropdown popup)
      setActiveCategory(null);
      setIsMenuOpen(false);
    } else {
      // Desktop logic
      setActiveCategory(null);
    }
  };

  // Safety: if route changes, close any open menus.
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveCategory(null);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar-container ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "mobile-open" : ""}`}>
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <Link to="/" onClick={() => { setIsMenuOpen(false); setActiveCategory(null); }}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                  alt="Patel Infotech"
                  className="site-logo"
                />
                <span className="site-name">Patel Infotech Services</span>
              </Link>
            </div>

            <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  onMouseEnter={() => !isMenuOpen && link.hasDropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => !isMenuOpen && link.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    to={link.path}
                    className={`${location.pathname === link.path ? "active" : ""} ${activeCategory === link.name ? "dropdown-active" : ""}`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="navbar-actions">
              <Link to="/contact-us" className="btn-contact">
                Contact Us
              </Link>

              <button
                className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setActiveCategory(null);
                }}
                aria-label="Toggle Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {activeCategory && (
          <MegaMenu
            activeCategory={activeCategory}
            isOpen={!!activeCategory}
            onClose={() => setActiveCategory(null)}
            onMouseEnter={() => handleMouseEnter(activeCategory)}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
