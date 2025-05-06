import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/WebsiteMaintenance.css";

const WebsiteMaintenance = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="maintenance-container">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="maintenance-hero">
          <h1>Website Maintenance Plans</h1>
          <p className="subtitle">
            Ongoing updates, backups, security checks, and performance monitoring — all handled for you.
          </p>
          <div className="guarantee-badge">
            <span>✓ 99.9% Uptime Guarantee</span>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-props">
          <div className="prop-card">
            <div className="icon">🛡️</div>
            <h3>Security First</h3>
            <p>Regular vulnerability scans and malware protection</p>
          </div>
          <div className="prop-card">
            <div className="icon">⚡</div>
            <h3>Peak Performance</h3>
            <p>Monthly speed optimizations and broken link checks</p>
          </div>
          <div className="prop-card">
            <div className="icon">📅</div>
            <h3>Update Calendar</h3>
            <p>Scheduled maintenance during low-traffic periods</p>
          </div>
        </section>


        {/* CTA */}
        <section className="maintenance-cta">
          <h2>Focus on Your Business, We'll Handle the Tech</h2>
          <button onClick={redirectToContact}>Secure Your Website Now</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteMaintenance;