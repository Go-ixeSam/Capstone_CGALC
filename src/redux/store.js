import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
export const persistor = persistStore(store);
