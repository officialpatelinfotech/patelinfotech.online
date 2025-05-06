import React from "react";
import Navbar from "./Navbar"; // Reuse the Navbar component
import Footer from "./Footer"; // Reuse the Footer component
import "../styles/WebDevelopment.css";

const WebDevelopment = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="webdev-container">
      <Navbar /> {/* Include the Navbar */}
      <main>
        <h1>Web Development Services</h1>
        <p>
          We build fast, responsive, and scalable websites tailored to your business needs.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>React, Next.js, Vue.js, and modern JavaScript frameworks.</p>
          </div>
          <div className="service-card">
            <h3>Backend Development</h3>
            <p>Node.js, Django, Laravel, and database integration.</p>
          </div>
          <div className="service-card">
            <h3>E-Commerce Solutions</h3>
            <p>Shopify, WooCommerce, and custom payment gateways.</p>
          </div>
        </div>

        <button onClick={redirectToContact}>Get a Free Quote</button>
      </main>
      <Footer /> {/* Reuse the Footer */}
    </div>
  );
};

export default WebDevelopment;