import React from "react";
import "../styles/Policies.css"; // Reuse the same CSS file for styling
import Navbar from "./Navbar"; // Import Navbar component
import Footer from "./Footer"; // Import Footer component

const RefundAndCancellation = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar /> {/* Navbar component */}

      <header className="policies-header">
        <h1>Refund & Cancellation Policy</h1>
        <p>Our policies regarding service cancellation and refunds</p>
      </header>

      <div className="policies-container">
        <h2>1. Service Cancellation</h2>
        <ul>
          <li>
            Clients may request cancellation of services by notifying us in
            writing/email within <strong>1 day</strong> from the date of payment
            made.
          </li>
          <li>
            Cancellation before project initiation may qualify for a partial
            refund of the advance payment.
          </li>
        </ul>

        <h2>2. Refund Policy</h2>
        <ul>
          <li>
            Advance payments made for project initiation are{" "}
            <strong>non-refundable</strong> once the project has started.
          </li>
          <li>
            Refunds may only be considered if we fail to deliver agreed-upon
            services as per the written agreement.
          </li>
          <li>
            No refunds will be issued for completed milestones, delivered
            modules, or change-of-mind cancellations.
          </li>
          <li>
            If any refund is approved, it will be credited within{" "}
            <strong>3 to 5 working days</strong> to your original payment method.
          </li>
        </ul>

        <h2>3. Project Termination</h2>
        <p>Patel Infotech Services reserves the right to terminate services in case of:</p>
        <ul>
          <li>Non-payment or delayed payments.</li>
          <li>Misuse of services or breach of Terms & Conditions.</li>
        </ul>
      </div>

      <Footer /> {/* Footer component */}
    </div>
  );
};

export default RefundAndCancellation;
