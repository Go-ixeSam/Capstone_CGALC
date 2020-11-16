import React from "react";
import TripType from "./tripType.js";
import * as variable from "../../variables/Variables";
const initialState = {
  tripData: {
    tableHeader: [],
    tableBody: {
      record: [
        {
          [variable.id]: 1,
          [variable.startingLocation]: "44 duong 12",
          [variable.starttingWard]: variable.phuong2,
          [variable.startingLocation]: variable.quan1,
          [variable.destination]: "55 dường 66",
          [variable.destinationWard]: variable.phuong1,
          [variable.destinationDistrict]: variable.quan3,
          [variable.cargoVolume]: 8.5,
          [variable.check]: false,
          [variable.time]: new Date().toString(),
          [variable.status]: "ready",
        },
        {
          [variable.id]: 2,
          [variable.startingLocation]: "44 duong 12",
          [variable.starttingWard]: variable.phuong2,
          [variable.startingLocation]: variable.quan1,
          [variable.destination]: "55 dường 66",
          [variable.destinationWard]: variable.phuong1,
          [variable.destinationDistrict]: variable.quan3,
          [variable.cargoVolume]: 8.5,
          [variable.check]: false,
          [variable.time]: new Date().toString(),
          [variable.status]: "ready",
        },
        {
          [variable.id]: 3,
          [variable.startingLocation]: "44 duong 12",
          [variable.starttingWard]: variable.phuong2,
          [variable.startingLocation]: variable.quan1,
          [variable.destination]: "55 dường 66",
          [variable.destinationWard]: variable.phuong1,
          [variable.destinationDistrict]: variable.quan3,
          [variable.cargoVolume]: 8.5,
          [variable.check]: false,
          [variable.time]: new Date().toString(),
          [variable.status]: "ready",
        },
        {
          [variable.id]: 4,
          [variable.startingLocation]: "44 duong 12",
          [variable.starttingWard]: variable.phuong2,
          [variable.startingLocation]: variable.quan1,
          [variable.destination]: "55 dường 66",
          [variable.destinationWard]: variable.phuong1,
          [variable.destinationDistrict]: variable.quan3,
          [variable.cargoVolume]: 8.5,
          [variable.check]: false,
          [variable.time]: new Date().toString(),
          [variable.status]: "ready",
        },
      ],
    },
  },
  tripDetail: {
    tabsHeader: [
      { [variable.id]: 0, value: variable.location },
      { [variable.id]: 1, value: variable.trucks },
      { [variable.id]: 2, value: variable.contracts },
    ],
  },
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case TripType.GET_ROUTE:
      return {
        ...state,
        trip: action.payload,
      };
    /**
     * * Bỏ lần lượt trừng trip từ API trả về vào store
     */
    case TripType.ADD_TRIP:
      state.tripData.tableBody.record.push(action.payload);
      return { ...state };
    case TripType.ADD_TRIP_TABLE_HEADER:
      state.tripData.tableHeader = [...action.payload];
      return { ...state };
      break;
    default:
      return state;
  }
};
export default tripReducer;
