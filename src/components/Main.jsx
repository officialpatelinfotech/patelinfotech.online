import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "../styles/Main.css";

const Main = () => {
  const redirectToSite = () => {
    window.location.href = "/services";
  };

  return (
    <div className="main-container">
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Patel Infotech Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Empowering your business with cutting-edge website development and
          stunning website design that drives results.
        </motion.p>

        <motion.button
          onClick={redirectToSite}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.button>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Main;
