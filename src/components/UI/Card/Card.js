import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" {...props}>
      {console.log("card.js")}
      {props.children}
    </div>
  );
}

export default Card;
