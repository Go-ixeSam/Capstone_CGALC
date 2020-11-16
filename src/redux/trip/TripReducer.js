import React from "react";
import TripType from "./tripType.js";
const initialState = {
  tripData: {
    tableHeader: [],
    tableBody: {
      record: [],
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
