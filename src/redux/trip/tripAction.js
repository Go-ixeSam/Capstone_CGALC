import TripType from "./tripType.js";

export const getRoute = (route) => {
  return {
    type: TripType.GET_ROUTE,
    payload: route,
  };
};
/**
 * *Tạm thời test sẽ ko có side effect
 * *
 * *
 * *
 */
export const addTrip = (trip) => {
  return {
    type: TripType.ADD_TRIP,
    payload: trip
  };
};
export const addTripTableHeader=(tableHeader)=>{
  return{
    type:TripType.ADD_TRIP_TABLE_HEADER,
    payload:tableHeader
  }
}
