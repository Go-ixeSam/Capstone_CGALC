import * as actionTypes from "../../store/actions";

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
        // startingLocation: action.startingLocation,
        // startingLocation: startingLocation,
        // destination: destination,
        // tripType: tripType,
        // truck: truck,
      };
      break;
    default:
      console.log("vào defaul rồi ông ơi");
      return state;
  }
};
export default createtrip;
