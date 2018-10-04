import React from "react";

const number = props => {
  if (props.length < 5) {
    return <p>text to short</p>;
  } else {
    return <p>text long enough</p>;
  }
};

export default number;
