import React, { Component } from "react";
import "../formserparate/SeperateLine.css";
const SeperateLine = (argument) => {
  var margins = 15;
  var visibility = "visible"; //một field cho phép ta là cái component này tàng hìnhhình
  const { changeMargin, number, text, hidden } = argument;
  if (changeMargin == true) {
    margins = number;
  }
  if (hidden == true) {
    visibility = "hidden";
  }
  return (
    <div
      className="seperate"
      style={{ marginLeft: margins + "px", visibility: visibility }}
    >
      <h4>{text}</h4>
    </div>
  );
};
export default SeperateLine;
