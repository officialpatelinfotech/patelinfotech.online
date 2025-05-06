import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component
import "../styles/Services.css"; // Import the CSS file for styles
import { Link } from "react-router-dom";

const Services = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="services-container">
      <Navbar /> {/* Add the Navbar component */}
      <main className="services-main">
        <h1>Our Services</h1>
        <p>
          Empowering your business with innovative solutions tailored to your
          needs.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h2>
              <Link to="/website-development">Web Development</Link>
            </h2>
            <p>
              Custom, scalable web apps built with modern frameworks tailored to
              your business needs.
            </p>
          </div>
          <div className="service-card">
            <h2><Link to="/website-design">Website Design</Link></h2>
            <p>
              Responsive and engaging websites that showcase your brand and work
              flawlessly across devices.
            </p>
          </div>
          <div className="service-card">
            <h2><Link to="/ui-ux-design">UI/UX Design</Link></h2>
            <p>
              We craft intuitive user experiences with sleek, modern design
              interfaces your users will love.
            </p>
          </div>
          <div className="service-card">
            <h2><Link to="/seo">SEO Optimization</Link></h2>
            <p>
              Boost your visibility on search engines with our on-page and
              technical SEO strategies.
            </p>
          </div>
          <div className="service-card">
            <h2><Link to="/website-maintenance">Website Maintenance</Link></h2>
            <p>
              Ongoing updates, backups, security checks, and performance
              monitoring — hassle-free.
            </p>
          </div>
          <div className="service-card">
            <h2><Link to="/hosting">Hosting & Deployment</Link></h2>
            <p>
              Reliable hosting solutions with easy deployment and domain
              integration.
            </p>
          </div>
        </div>
        <button className="cta-button" onClick={redirectToContact}>
          Get in Touch
        </button>
      </main>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Services;
