import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <p>{item.name}</p>
      {/* <h4>{item.username}</h4> */}
    </div>
  );
};

export default Card;
