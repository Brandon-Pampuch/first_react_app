import React from "react";
import "./CharComponent.css";
const charComponent = props => {
  return (
    <div className="CharComponent">
      <p>charComponent</p>
      <p>{props.name}</p>
    </div>
  );
};
export default charComponent;
