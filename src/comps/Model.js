import React from "react";
import { motion } from "framer-motion";

const Model = ({ selectedImg, setSelectedImg }) => {
  //event handle
  const backdropHandle = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={backdropHandle}
      className="backdrop"
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="Big pic"
      />
    </motion.div>
  );
};

export default Model;
