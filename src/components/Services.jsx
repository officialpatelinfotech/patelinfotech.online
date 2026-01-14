import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const redirectToContact = () => {
    window.location.href = "/contact-us";
  };

  return (
    <div className="services-container">
      <Navbar />

      {/* Page animation */}
      <motion.main
        className="services-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Our Services</h1>
        <p>
          Empowering your business with innovative solutions tailored to your
          needs.
        </p>

        {/* Grid with stagger effect */}
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {[
            {
              title: "Web Development",
              link: "/website-development",
              desc: "Custom, scalable web apps built with modern frameworks tailored to your business needs."
            },
            {
              title: "Website Design",
              link: "/website-design",
              desc: "Responsive and engaging websites that showcase your brand across devices."
            },
            {
              title: "UI/UX Design",
              link: "/ui-ux-design",
              desc: "Intuitive user experiences with sleek, modern interfaces."
            },
            {
              title: "SEO Optimization",
              link: "/seo",
              desc: "Boost your visibility with on-page and technical SEO strategies."
            },
            {
              title: "Website Maintenance",
              link: "/website-maintenance",
              desc: "Updates, backups, security checks, and performance monitoring."
            },
            {
              title: "Hosting & Deployment",
              link: "/hosting",
              desc: "Reliable hosting solutions with smooth deployment."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <h2>
                <Link to={service.link}>{service.title}</Link>
              </h2>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button animation */}
        <motion.button
          className="cta-button"
          onClick={redirectToContact}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Services;
