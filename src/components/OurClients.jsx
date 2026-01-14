import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/OurClients.css";
import { motion } from "framer-motion";

// Client data
const clients = [
  { name: "Kaushalya Art Jewellery", link: "https://kaushalyaartjewellery.com", country: "India", img: "/assets/clients/kaushalya.png" },
  { name: "Crown & Halo", link: "https://crownandhalo.co.uk/", country: "United Kingdom", img: "/assets/clients/crownhalo.png" },
  { name: "Wellness Shoppee", link: "https://wellnessshoppee.com/", country: "Dubai", img: "/assets/clients/wellness.png" },
  { name: "Khar Jamaat", link: "https://kharjamaat.in/", country: "India", img: "/assets/clients/khar.png" },
  { name: "Verity Ateliers", link: "https://verityateliers.com/", country: "India", img: "/assets/clients/verity-ateliers.png" },
  { name: "Verity Grills", link: "https://veritygrills.com/", country: "India", img: "/assets/clients/verity-grills.png" },
  { name: "Maxcient Technologies", link: "https://maxcient.com/", country: "Dubai", img: "/assets/clients/maxcient.png" },
  { name: "Verity Aluminium System", link: "https://verityalu.com/", country: "India", img: "/assets/clients/verity-alu.png" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const OurClients = () => {
  return (
    <div className="our-clients-container">
      <Navbar />

      <motion.main
        className="our-clients-main"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={cardVariants}>Our Clients</motion.h1>
        <motion.p className="subtitle" variants={cardVariants}>
          Trusted by brands across industries and countries
        </motion.p>

        {/* Sliding wrapper */}
        <div className="clients-grid-wrapper">
          <motion.div className="clients-grid" variants={containerVariants}>
            {clients.concat(clients).map((client, idx) => (
              <motion.a
                key={idx}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
                variants={cardVariants}
                style={{
                  backgroundImage: `url(${client.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="client-overlay">
                  <h2>{client.name}</h2>
                  <span className="tag">{client.country}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default OurClients;
