import UserType from "./userType.js";
const initState = {
  token: "",
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserType.LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case UserType.LOGOUT:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
