import React from "react";
import TripType from "./tripType.js";
const initialState = {
  trip: {
    startingLocation: "",
    destination: "",
    tripType: "One way",
    vehicleModel: "",
    carManufacturer: "",
    cityMpg: "",
    highwayMpg: "",
    tankSize: "",
    fuelType: "Ron95-IV",
    truck: {
      id: "",
      name: "",
      licensePlatesL: "",
      weight: "",
      driver: {
        id: "",
        name: "",
        phone: "",
      },
    },
  },
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case TripType.GET_ROUTE:
      return {
        ...state,
        trip: action.payload,
      };
    default:
      return state;
  }
};
export default tripReducer;