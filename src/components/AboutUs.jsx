import React from "react";
import "../styles/AboutUs.css"; // Create a CSS file for styling
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      
      <Navbar /> {/* Add the Navbar component */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>Get to know Patel Infotech Services</p>
      </header>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Patel Infotech Services was established in <strong>January 2025</strong> with a clear mission: to craft custom web applications and websites with precision, creativity, and care. We are a forward-thinking digital company committed to delivering cutting-edge solutions for clients across industries.
        </p>

        <h2>Meet Our Founder</h2>
        <p>
          Our company is led by <strong>Shubham Patel</strong>, a seasoned technology expert with over <strong>10 years of professional experience</strong> in software development and digital solutions. Shubham’s vision, leadership, and technical know-how form the backbone of Patel Infotech Services, driving our team toward innovation and excellence.
        </p>

        <h2>Our Mission</h2>
        <p>
          To empower businesses by building reliable, scalable, and visually stunning digital platforms that align perfectly with their goals.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity</strong> – We build trust through transparency and honesty.</li>
          <li><strong>Innovation</strong> – We embrace change and push creative boundaries.</li>
          <li><strong>Quality</strong> – We prioritize performance, security, and user experience.</li>
        </ul>
      </div>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default AboutUs;