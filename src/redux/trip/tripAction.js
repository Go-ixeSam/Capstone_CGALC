import TripType from "./tripType.js";

export const getRoute = (route) => {
  return {
    type: TripType.GET_ROUTE,
    payload: route,
  };
};
