import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/SEO.css";

const SEO = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="seo-container">
      <Navbar />
      <main>
        <h1>SEO Optimization Services</h1>
        <p>
          Boost your online visibility and dominate search rankings with our data-driven SEO strategies.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">🔍</div>
            <h3>Keyword Research</h3>
            <p>Identify high-value keywords to target your ideal audience.</p>
          </div>
          <div className="service-card">
            <div className="icon">📈</div>
            <h3>On-Page SEO</h3>
            <p>Optimize content, meta tags, and structure for search engines.</p>
          </div>
          <div className="service-card">
            <div className="icon">🔗</div>
            <h3>Link Building</h3>
            <p>Earn authoritative backlinks to improve domain authority.</p>
          </div>
        </div>

        <div className="seo-benefits">
          <h2>Why Our SEO Works</h2>
          <ul>
            <li>✅ Google Algorithm Updates Monitoring</li>
            <li>✅ Monthly Performance Reports</li>
            <li>✅ 100% White-Hat Techniques</li>
          </ul>
        </div>

        <button onClick={redirectToContact}>Get a Free SEO Audit</button>
      </main>
      <Footer />
    </div>
  );
};

export default SEO;