import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="services-detail-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <header className="services-detail-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-badge-container"
            >
              <span className="dot"></span>
              <span className="badge-text">Our Expertise</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive IT <span className="font-italic">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We blend creativity with technical excellence to deliver digital products that drive growth and inspire users.
            </motion.p>
          </header>

          <div className="services-detailed-list">
            {[
              {
                title: "Web Development",
                icon: "01",
                desc: "We build robust, scalable, and high-performance web applications using cutting-edge technologies like React, Next.js, and Node.js. Our solutions are tailored to your business logic, ensuring security, speed, and a seamless user journey.",
                features: ["Custom Web Apps", "E-commerce Platforms", "API Integrations", "Cloud Solutions"]
              },
              {
                title: "Website Design",
                icon: "02",
                desc: "First impressions matter. Our designs are not just visually stunning but are strategically crafted to convert visitors into customers. We focus on modern aesthetics, brand identity, and multi-device responsiveness.",
                features: ["Corporate Websites", "Landing Pages", "Brand Strategy", "Interactive UI"]
              },
              {
                title: "UI/UX Design",
                icon: "03",
                desc: "User-centric design is at the heart of everything we do. We conduct deep research to understand your audience and create intuitive interfaces that make interaction effortless and delightful.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
              },
              {
                title: "SEO Optimization",
                icon: "04",
                desc: "Be seen where it matters. Our data-driven SEO strategies improve your search engine rankings, drive organic traffic, and ensure your business stays ahead of the competition in the digital landscape.",
                features: ["Technical SEO", "Content Strategy", "Keyword Research", "Analytics & Reporting"]
              },
              {
                title: "Website Maintenance",
                icon: "05",
                desc: "Your website needs constant care to perform at its best. We provide proactive maintenance, security patches, performance tuning, and regular updates to keep your digital asset running smoothly 24/7.",
                features: ["Security Monitoring", "Daily Backups", "Performance Optimization", "Content Updates"]
              },
              {
                title: "Hosting & Deployment",
                icon: "06",
                desc: "Fast, secure, and reliable hosting is the foundation of any successful website. We offer managed hosting solutions and automated deployment pipelines to ensure your site is always online and lightning-fast.",
                features: ["Managed Servers", "SSL Protection", "CI/CD Pipelines", "CDN Integration"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-detail-card glass-morphism"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-full-desc">{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feat, fIdx) => (
                    <span key={fIdx} className="feature-tag">{feat}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <footer className="services-page-footer">
            <h2>Ready to start your project?</h2>
            <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
          </footer>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Services;
