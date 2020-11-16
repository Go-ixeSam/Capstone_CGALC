import React from "react";
import ContractType from "./contractType.js";
import variable, { quan1, quan2, quan3 } from "../../variables/Variables";

const initialState = {
  contracts: {
    detail: "none",
    record: [
      {
        [variable.id]: 1,
        [variable.startingLocation]: "44 duong 12",
        [variable.starttingWard]: variable.phuong2,
        [variable.startingLocation]: quan1,
        [variable.destination]: "55 dường 66",
        [variable.destinationWard]: variable.phuong1,
        [variable.destinationDistrict]: quan3,
        [variable.cargoVolume]: 8.5,
        [variable.check]: false,
        [variable.time]: new Date().toString(),
      },
      {
        [variable.id]: 2,
        [variable.startingLocation]: "Vin Phuc",
        [variable.starttingWard]: variable.phuong1,
        [variable.starttingDistrict]: quan2,
        [variable.destination]: "Hoho",
        [variable.destinationWard]: variable.phuong2,
        [variable.destinationDistrict]: quan2,
        [variable.cargoVolume]: 12.5,
        [variable.check]: false,
        [variable.time]: new Date().toString(),
      },
    ],
  },
  contractForm: [
    {
      row: {
        cols: [
          {
            colNumber: 4,
            elementType: variable.input,
            elementConfig: {
              name: variable.startingLocation,
              type: variable.input,
              labeltext: "Starting Location",
              placeholder: "44 duong so 99",
              // disabled: true,
              value: "",
            },
            validation: [],
            valid: {},
            // valid: { type: variable.success, errorMessage: "" },
          },
          {
            colNumber: 3,
            elementType: variable.select,
            elementConfig: {
              name: variable.starttingWard,
              labeltext: "Ward",
              options: [
                { id: "1", value: variable.phuong1, displayValue: "Phường 1" },
                {
                  id: "2",
                  value: variable.phuong2,
                  displayValue: "Phường 2",
                },
                {
                  id: "3",
                  value: variable.phuong3,
                  displayValue: "Phường 3",
                },
              ],
              value: variable.phuong1,
            },
            validation: [variable.none],
            valid: { type: variable.success, errorMessage: "" },
          },
          {
            colNumber: 3,
            elementType: variable.select,
            elementConfig: {
              name: variable.starttingDistrict,
              labeltext: "District",
              options: [
                { id: "1", value: variable.quan1, displayValue: "Quận 1" },
                {
                  id: "2",
                  value: variable.quan2,
                  displayValue: "Quận 2",
                },
                {
                  id: "3",
                  value: variable.quan3,
                  displayValue: "Quận 3",
                },
              ],
              value: variable.quan1,
            },
            validation: [variable.none],
            valid: { type: variable.success, errorMessage: "" },
          },
        ],
      },
    },
    {
      row: {
        cols: [
          {
            colNumber: 4,
            elementType: variable.input,
            elementConfig: {
              name: variable.destination,
              type: variable.text,
              labeltext: "Destination",
              placeholder: "44 duong so 9",
              value: "",
            },
            validation: [variable.required],
            valid: {},
          },
          {
            colNumber: 3,
            elementType: variable.select,
            elementConfig: {
              name: variable.destinationWard,
              labeltext: "Ward",
              options: [
                { id: "1", value: variable.phuong1, displayValue: "Phường 1" },
                {
                  id: "2",
                  value: variable.phuong2,
                  displayValue: "Phường 2",
                },
                {
                  id: "3",
                  value: variable.phuong3,
                  displayValue: "Phường 3",
                },
              ],
              value: variable.phuong1,
            },
            validation: [variable.none],
            valid: { type: variable.success, errorMessage: "" },
          },
          {
            colNumber: 3,
            elementType: variable.select,
            elementConfig: {
              name: variable.destinationDistrict,
              labeltext: "District",
              options: [
                { id: "1", value: quan1, displayValue: "Quận 1" },
                {
                  id: "2",
                  value: quan2,
                  displayValue: "Quận 2",
                },
                {
                  id: "3",
                  value: quan3,
                  displayValue: "Quận 3",
                },
              ],
              value: variable.quan1,
            },
            validation: [variable.none],
            valid: { type: variable.success, errorMessage: "" },
          },
        ],
      },
    },
    {
      row: {
        cols: [
          {
            colNumber: 4,
            elementType: variable.select,
            elementConfig: {
              name: variable.cargoType,
              labeltext: "Cargo Type",
              options: [
                {
                  id: "1",
                  value: variable.slowGoods,
                  displayValue: "Normal goods",
                },
                {
                  id: "2",
                  value: variable.fastGoods,
                  displayValue: "Fast goods",
                },
                {
                  id: "3",
                  value: variable.fullContainer,
                  displayValue: "Full container",
                },
              ],
              value: variable.slowGoods,
            },
            validation: [variable.none],
            valid: { type: variable.success, errorMessage: "" },
          },

          {
            name: "cargoVolume",
            colNumber: 3,
            elementType: "input",
            elementConfig: {
              name: variable.cargoVolume,
              type: "number",
              labeltext: "Cargo volume",
              placeholder: "0",
              value: "",
            },
            validation: [variable.required, variable.positiveNumber],
            valid: {},
          },
        ],
      },
    },
  ],
};
const contractReducer = (state = initialState, action) => {
  // let tmp = { ...state };
  switch (action.type) {
    case ContractType.ADD_CONTRACT:
      // tmp.contracts.record.push(action.payload);
      return {
        ...state,
        contracts: state.contracts.record.push(action.payload),
      };

    case ContractType.UPDATE_CONTRACT:
      // tmp.contracts.record = [...action.payload];
      return {
        ...state,
        contracts: {
          detail: "none",
          record: [...action.payload],
        },
      };
    case ContractType.UPDATE_CONTRACTFORM:
      return { ...state, contractForm: action.payload };
    default:
      return state;
  }
};
export default contractReducer;
