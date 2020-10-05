import React, { Component } from "react";
import "../formserparate/SeperateLine.css";
 const SeperateLine = (argument) => {
  return (
    <div className="seperate">
      <h4>{argument.text}</h4>
    </div>
  );
};
export default SeperateLine;