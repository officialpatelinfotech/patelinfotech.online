import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Hosting.css";

const Hosting = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="hosting-container">
      <Navbar />
      <main>
        <h1>Web Hosting Solutions</h1>
        <p>
          Blazing-fast, secure, and scalable hosting tailored for your business needs.
        </p>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Shared Hosting</h3>
            <div className="price">₹500<span>/mo</span></div>
            <ul>
              <li>✓ 100GB SSD Storage</li>
              <li>✓ Unlimited Bandwidth</li>
              <li>✓ Free SSL Certificate</li>
              <li>✓ 24/7 Support</li>
            </ul>
          </div>
          
          <div className="pricing-card featured">
            <div className="popular-badge">MOST POPULAR</div>
            <h3>VPS Hosting</h3>
            <div className="price">₹900<span>/mo</span></div>
            <ul>
              <li>✓ 4GB RAM</li>
              <li>✓ 2 vCPU Cores</li>
              <li>✓ 100GB NVMe Storage</li>
              <li>✓ Root Access</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3>Dedicated Server</h3>
            <div className="price">₹3500<span>/mo</span></div>
            <ul>
              <li>✓ 32GB RAM</li>
              <li>✓ 8 CPU Cores</li>
              <li>✓ 1TB SSD Storage</li>
              <li>✓ DDoS Protection</li>
            </ul>
          </div>
        </div>

        <div className="hosting-features">
          <h2>Why Choose Our Hosting?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="icon">⚡</div>
              <h4>99.9% Uptime</h4>
            </div>
            <div className="feature">
              <div className="icon">🛡️</div>
              <h4>Free Backups</h4>
            </div>
            <div className="feature">
              <div className="icon">🌐</div>
              <h4>Global CDN</h4>
            </div>
          </div>
        </div>

        <button onClick={redirectToContact}>Get Started Now</button>
      </main>
      <Footer />
    </div>
  );
};

export default Hosting;