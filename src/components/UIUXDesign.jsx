import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/UIUXDesign.css";

const UIUXDesign = () => {
  const redirectToContact = () => {
    window.location.href = "/contactus";
  };

  return (
    <div className="uiux-container">
      <Navbar />
      <main>
        <h1>UI/UX Design Services</h1>
        <p>
          Crafting intuitive, beautiful, and user-centered digital experiences that drive engagement.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">🎨</div>
            <h3>User Interface Design</h3>
            <p>Pixel-perfect designs with Figma, Adobe XD, and responsive layouts.</p>
          </div>
          <div className="service-card">
            <div className="icon">🔍</div>
            <h3>User Research</h3>
            <p>Personas, user flows, and usability testing to validate designs.</p>
          </div>
          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Prototyping</h3>
            <p>Interactive prototypes to demonstrate functionality before development.</p>
          </div>
        </div>

        <button onClick={redirectToContact}>Start Your Project</button>
      </main>
      <Footer />
    </div>
  );
};

export default UIUXDesign;