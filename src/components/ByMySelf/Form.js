import React from "react";
import {
  Row,
  Col,
  DropdownButton,
  MenuItem,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";

import { getValidationState } from "../ByMySelf/InputValidation.js";
import {
  lengthError,
  positiveNumber,
  select,
} from "../../variables/Variables.jsx";

export const CustomFormGroup = (argument) => {
  let inputElement = null;
  switch (argument.type) {
    case "input":
      return (
        <Col xs={argument.xsNumber}>
          <div>
            <FormGroup
              validationState={getValidationState(
                argument.realValue,
                lengthError
              )}
            >
              <label>{argument.labelText}</label>
              <FormControl
                required
                placeholder={argument.placeholderText}
                defaultValue={argument.defaultValue}
                onChange={argument.change}
              />
            </FormGroup>
          </div>
        </Col>
      );
      break;
    case "select":
      return (
        <Col xs={argument.xsNumber}>
          <FormGroup
            validationState={getValidationState(argument.realValue, select)}
          >
            <label>{argument.labelText}</label>
            <FormControl
              componentClass="select"
              placeholder="select"
              as="select"
              onChange={argument.change}
              value={argument.currentValue}
            >
              {argument.options.map((opt) => {
                return <option value={opt}>{opt}</option>;
              })}
            </FormControl>
          </FormGroup>
        </Col>
      );
      break;
    case "password":
      return (
        <Col xs={argument.xsNumber}>
          <FormGroup>
            <label>{argument.labelText}</label>
            <FormControl
              type={"password"}
              required
              placeholder={argument.placeholderText}
              defaultValue={argument.defaultValue}
              onChange={argument.change}
              as="password"
            ></FormControl>
          </FormGroup>
        </Col>
      );
      break;
    case "number":
      return (
        <Col xs={argument.xsNumber}>
          <FormGroup
            validationState={getValidationState(
              argument.realValue,
              positiveNumber
            )}
          >
            <label>{argument.labelText}</label>
            <FormControl
              type={"number"}
              required
              placeholder={argument.placeholderText}
              defaultValue={argument.defaultValue}
              onChange={argument.change}
              as="number"
            ></FormControl>
          </FormGroup>
        </Col>
      );
      break;
  }
};
