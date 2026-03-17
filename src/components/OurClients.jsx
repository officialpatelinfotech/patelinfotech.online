import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalBackground from "./GlobalBackground";
import "../styles/OurClients.css";
import { motion } from "framer-motion";

const clients = [
  { name: "Kaushalya Art Jewellery", link: "https://kaushalyaartjewellery.com", country: "India", img: "/assets/clients/kaushalya.png" },
  { name: "Crown & Halo", link: "https://crownandhalo.co.uk/", country: "United Kingdom", img: "/assets/clients/crownhalo.png" },
  { name: "Avinyaan", link: "https://avinyaan.com/", country: "India", img: "/assets/clients/avinyaan.png" },
  { name: "Mobiebook", link: "https://mobiebook.online/#/home", country: "India", img: "/assets/clients/mobiebook.png" },
  { name: "Wellness Shoppee", link: "https://wellnessshoppee.com/", country: "Dubai", img: "/assets/clients/wellness.png" },
  { name: "Khar Jamaat", link: "https://kharjamaat.in/", country: "India", img: "/assets/clients/khar.png" },
  { name: "Verity Ateliers", link: "https://verityateliers.com/", country: "India", img: "/assets/clients/verity-ateliers.png" },
  { name: "Verity Grills", link: "https://veritygrills.com/", country: "India", img: "/assets/clients/verity-grills.png" },
  { name: "Maxcient Technologies", link: "https://maxcient.com/", country: "Dubai", img: "/assets/clients/maxcient.png" },
  { name: "Verity Aluminium System", link: "https://verityalu.com/", country: "India", img: "/assets/clients/verity-alu.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurClients = () => {
  return (
    <div className="clients-page-container">
      <GlobalBackground />
      <Navbar />

      <motion.main
        className="clients-main-content"
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.header className="clients-hero-header" variants={fadeUp}>
            <div className="service-badge-container">
              <span className="dot"></span>
              <span className="badge-text">Our Network</span>
            </div>
            <h1>Global <span className="font-italic">Partners</span></h1>
            <p>Driving innovation alongside visionary brands across the globe.</p>
          </motion.header>

          <div className="clients-static-grid">
            {clients.map((client, idx) => (
              <motion.a
                key={idx}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card glass-morphism"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, borderColor: "var(--accent-blue)" }}
              >
                <div className="brand-visual">
                  <img src={client.img} alt={client.name} className="brand-img" />
                  <div className="brand-overlay">
                    <div className="brand-info-hover">
                      <h3>{client.name}</h3>
                      <span className="country-tag">{client.country}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default OurClients;
