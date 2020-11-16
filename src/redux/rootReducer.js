import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import tripReducer from "./trip/TripReducer";
import contractReducer from "./contract/contractReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  trip: tripReducer,
  contract: contractReducer,
});
// export default persistReducer(persistConfig, rootReducer);
export default persistReducer(persistConfig, rootReducer);
