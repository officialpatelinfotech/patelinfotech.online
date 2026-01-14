import React from "react";
import { motion } from "framer-motion";

const Planet = ({ name, size, distance }) => {
  return (
    <motion.div
      className="planet"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{name}</h2>
      <p>Size: {size}</p>
      <p>Distance from Sun: {distance}</p>
    </motion.div>
  );
};

export default Planet;
