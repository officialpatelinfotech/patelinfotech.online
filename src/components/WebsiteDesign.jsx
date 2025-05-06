import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/WebsiteDesign.css";

const WebsiteDesign = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="website-design-container">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="design-hero">
          <h1>Website Design That Converts</h1>
          <p>
            We create visually stunning, user-friendly websites that align with 
            your brand and drive business growth.
          </p>
          <button onClick={redirectToContact}>Get Your Free Design Consultation</button>
        </section>

        {/* Process Section */}
        <section className="design-process">
          <h2>Our Design Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>Research your business, audience, and competitors</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Wireframing</h3>
              <p>Create structural blueprints for key pages</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Visual Design</h3>
              <p>Develop high-fidelity mockups with your branding</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Development Ready</h3>
              <p>Deliver assets and specifications for developers</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="design-cta">
          <h2>Ready to Elevate Your Online Presence?</h2>
          <button onClick={redirectToContact}>Start Your Project Today</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDesign;