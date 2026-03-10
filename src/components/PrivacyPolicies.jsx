import React from "react";
import "../styles/Policies.css"; // Create a CSS file for styling
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component

const PrivacyPolicies = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar /> {/* Add the Navbar component */}
      <header className="policies-header">
        <h1>Privacy Policy</h1>
        <p>Protecting your data is our priority</p>
      </header>

      <div className="policies-container">
        <p>
          At Patel Infotech Services, we respect your privacy and are committed
          to protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data when you interact with
          our website and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information that you provide voluntarily such
          as your name, email address, phone number, and any messages or
          inquiries submitted through our contact forms.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Respond to your inquiries and provide support</li>
          <li>Improve our services and website experience</li>
          <li>Send updates or promotional material (only with your consent)</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data
          from unauthorized access, disclosure, or misuse.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may use trusted third-party tools (like analytics or contact forms)
          that may collect anonymized data to help us understand usage trends.
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You can opt-out of marketing emails at any time, and you may contact
          us to request updates or deletion of your personal data.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this policy, please
          email us at: <strong>support@patelinfotech.online</strong>
        </p>
      </div>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default PrivacyPolicies;