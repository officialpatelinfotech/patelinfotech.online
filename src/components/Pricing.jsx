import React from "react";
import "../styles/Pricing.css"; // Create a CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />

      <header className="pricing-header">
        <h1>Our Pricing</h1>
        <p>Transparent and flexible plans tailored to your business needs</p>
      </header>

      <div className="pricing-container">
        <div className="pricing-card">
          <h2>Web Development</h2>
          <p className="price">Price Range ₹5,000 to ₹20,000</p>
          <p>
            Custom, scalable web apps built with modern frameworks tailored to
            your business needs.
          </p>
        </div>

        <div className="pricing-card">
          <h2>Website Design</h2>
          <p className="price">Price Range ₹3,000 to ₹18,000</p>
          <p>
            Responsive and engaging websites that showcase your brand and work
            flawlessly across devices.
          </p>
        </div>

        <div className="pricing-card">
          <h2>UI/UX Design</h2>
          <p className="price">Price Range ₹10,000 to ₹25,000</p>
          <p>
            Intuitive user experiences with sleek, modern design interfaces your
            users will love.
          </p>
        </div>

        <div className="pricing-card">
          <h2>SEO Optimization</h2>
          <p className="price">₹12,000 / month</p>
          <p>
            Boost your visibility on search engines with our on-page and
            technical SEO strategies.
          </p>
        </div>

        <div className="pricing-card">
          <h2>Website Maintenance</h2>
          <p className="price">₹12,000 / month</p>
          <p>
            Ongoing updates, backups, security checks, and performance
            monitoring — hassle-free.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
