import React, { Component } from "react";
import {
  lengthError,
  positiveNumber,
  isCheck,
  select
} from "../../variables/Variables.jsx";
export const getValidationState = (value, validationType) => {
  const length = value.length;
  switch (validationType) {
    case lengthError:
      if (length > 0) return "success";
      if (length <= 0) return "error";
      break;
    case positiveNumber:
      if (value > 0 && length > 0) {
        return "success";
      }
      if (value <= 0 && length <= 0) {
        return "error";
      }
      break;
    case isCheck:
      if (value > 0) {
        return "success";
      }
      if (value < 0) return null;
      break;
    case select:
      return "success";
      break;
  }
};
