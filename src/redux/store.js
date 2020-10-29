import { useStore } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import userReducer from "./user/userReducer.js";
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
