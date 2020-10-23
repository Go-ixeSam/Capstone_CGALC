import * as actionTypes from "../actions";

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

const createtrip = (state = initialState.trip, action) => {
  // const { startingLocation, destination, tripType, truck } = action.values;
  console.log(action.type);
  switch (action.type) {
    case actionTypes.CREATETRIP:
      return {
        ...state,trip:action.values
      };
      break;
    default:
      console.log("vào defaul rồi ông ơi");
      return state;
  }
};
export default createtrip;
