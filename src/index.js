import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Policies from "./components/Policies";
import WebDevelopment from "./components/WebDevelopment";
import UIUXDesign from "./components/UIUXDesign";
import "./index.css";
import SEO from "./components/SEO";
import Hosting from "./components/Hosting";
import Sitemap from "./components/Sitemap";
import WebsiteDesign from "./components/WebsiteDesign";
import WebsiteMaintenance from "./components/WebsiteMaintenance";
import DeployGuide from "./components/DeployGuide";
import Projects from "./components/Project";
import InteractiveTesseract from "./components/InteractiveTesseract";
import SolarSystem from "./components/SolarSystem";
import Location from "./components/Location";
import OurClients from "./components/OurClients";
import ScrollToTop from "./components/ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/website-development" element={<WebDevelopment />} />
      <Route path="/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/seo" element={<SEO />} />
      <Route path="/hosting" element={<Hosting />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/website-design" element={<WebsiteDesign />} />
      <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
      <Route path="/deploy-guide" element={<DeployGuide />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/react.js/interactive-tesseract" element={<InteractiveTesseract />} />
      <Route path="/projects/react.js/solar-system" element={<SolarSystem />} />
      <Route path="/location" element={<Location />} />
      <Route path="/our-clients" element={<OurClients />} />

    </Routes>
  </Router>
);