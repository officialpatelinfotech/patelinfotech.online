import React from "react";
import Footer from "./Footer"; // Import the Footer component
import "../styles/Main.css";

const Main = () => {
  const redirectToSite = () => {
    window.location.href = "/services";
  };

  return (
    <div className="main-container">
      <main>
        <h1>Welcome to Patel Infotech Services</h1>
        <p>
          Empowering your business with cutting-edge website development and
          stunning website design that drives results.
        </p>
        <button onClick={redirectToSite}>Explore Our Services</button>
      </main>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Main;