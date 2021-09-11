import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 1, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://www.stomble.com/static/media/stomble.bface20a.svg"
        alt="logo"
      />
    </motion.div>
  );
};

export default Header;
