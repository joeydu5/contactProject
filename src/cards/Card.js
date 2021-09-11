import React from "react";
import { motion } from "framer-motion";
import "./Card.css";

const Card = (props) => {
  //define a function to get the initials of a name
  const toAbbr = (str) => {
    return (
      str &&
      str
        .match(/(?<=(\s|^))[a-z]/gi)
        .join("")
        .toUpperCase()
    );
  };

  const initialLetter = toAbbr(props.item.name);
  const namelist = props.item.name.toUpperCase();

  return (
    <motion.div
      className={`card ${props.theme}`}
      onClick={() => props.cardClickHandler(props.item)}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`left-card ${props.initialColor}`}>{initialLetter}</div>
      <div className="right_card">
        <motion.p
          whileHover={{ scale: 1.4, originX: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {namelist}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Card;
