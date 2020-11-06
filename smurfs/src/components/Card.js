import React from "react";

const Card = (props) => {
  return (
    <div className = "container">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
};

export default Card;