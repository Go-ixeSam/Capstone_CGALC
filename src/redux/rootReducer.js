import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import tripReducer from "./trip/TripReducer";

const rootReducer = combineReducers({
  user: userReducer,
  trip: tripReducer,
});
export default rootReducer;
