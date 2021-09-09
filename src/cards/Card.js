import React from "react";
import "./Card.css";

const Card = (props) => {
  // console.log(props.theme);
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

  return (
    <div className={`card ${props.theme}`}>
      <div className="left_card">{initialLetter}</div>
      <div className="right_card">
        <p>{props.item.name}</p>
      </div>
    </div>
  );
};

export default Card;
