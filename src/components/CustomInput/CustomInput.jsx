import React, { Component } from "react";
export const CustomInput = (argument) => {
  const { label, child } = argument;
  return (
    <div className="form-group">
      {/* <label>{label}</label> */}
      {child}
      <span className="help-block"></span>
    </div>
  );
};
