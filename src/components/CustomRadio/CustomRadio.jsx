/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { FormGroup, Radio } from "react-bootstrap";
import { getValidationState } from "../ByMySelf/InputValidation.js";
import {
  lengthError,
  positiveNumber,
  isCheck,
} from "../../variables/Variables.jsx";
import "../CustomRadio/CustomRadio.css"
export class CustomRadio extends Component {
  render() {
    const { number, label, option, name, ...rest } = this.props;

    return (
      <div className="radio">
        <input id={number} name={name} type="radio" value={option} {...rest} />
        <label htmlFor={number}>{label}</label>
      </div>
    );
  }
}

export const FormRadio = (argument) => {
  return (
    <FormGroup
      // validationState={getValidationState(argument.currentValue, isCheck)}
    >
      {argument.content}
    </FormGroup>
  );
};

export const ItemRadio = (argument) => {
  return (
    <div style={{ width: "max-content" }}>
      <Radio
        name="radioGroup"
        inline
        value={argument.label}
        onChange={argument.change}
      >
        <p className={argument.cssClassName}>{argument.label}</p>
      </Radio>
    </div>
  );
};
