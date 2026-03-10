import React from "react";
import "../styles/Policies.css"; // Reuse the same CSS file for styling
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component

const TermsAndConditions = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar /> {/* Navbar component */}

      <header className="policies-header">
        <h1>Terms & Conditions</h1>
        <p>Understanding the rules of engagement with Patel Infotech Services</p>
      </header>

      <div className="policies-container">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Patel Infotech Services managed by{" "}
          <strong>Shubham Ramchriit Patel</strong>. By accessing or using our
          website and services, you agree to be bound by these Terms &
          Conditions. Please read them carefully before engaging our services.
        </p>

        <h2>2. Services</h2>
        <p>
          We provide web development, design, and related digital solutions. The
          scope of work, deliverables, and timelines will be agreed upon in
          writing before the commencement of any project.
        </p>

        <h2>3. Payments</h2>
        <ul>
          <li>All payments must be made as per the agreed quotation or invoice.</li>
          <li>
            A percentage of the total project cost may be required as an advance
            to begin work.
          </li>
          <li>Delayed payments may lead to suspension of services.</li>
        </ul>

        <h2>4. Client Responsibilities</h2>
        <p>
          Clients must provide accurate information, content, and feedback
          required for project completion in a timely manner. Delays in client
          communication may affect delivery timelines.
        </p>

        <h2>5. Intellectual Property</h2>
        <ul>
          <li>
            All code, designs, and deliverables remain the property of Patel
            Infotech until full payment is received.
          </li>
          <li>
            Upon payment completion, ownership rights of final deliverables are
            transferred to the client, unless otherwise agreed.
          </li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>We strive to deliver high-quality services, but we are not liable for:</p>
        <ul>
          <li>Any indirect or consequential damages.</li>
          <li>Issues arising from third-party integrations or hosting providers.</li>
        </ul>

        <h2>7. Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of India.
        </p>
      </div>

      <Footer /> {/* Footer component */}
    </div>
  );
};

export default TermsAndConditions;
