import React, { Component } from "react";
import "../CustomFilter/CustomeFilter.css";

const CustomFilter = (props) => {
  return (
    <div className="filter-layout">
      <p className="text-filter-description">{props.label}</p>
      {props.children}
    </div>
  );
};
export default CustomFilter
