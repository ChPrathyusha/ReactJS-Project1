import React from "react";

const Circle = ({ cell }) => {
  let color = "#8cd9b3";
  if (cell === 1) {
    color = "#990000";
  } else if (cell === 2) {
    color = "#0059b3";
  }

  var style = {
    backgroundColor: color
  };

  return <div id="circles" className="circle" style={style} />;
};

export default Circle;

