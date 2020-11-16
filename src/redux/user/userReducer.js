import UserType from "./userType.js";
const initState = {
  token: "",
  firebaseToken: "",
  roles: {
    id: "",
    text: "",
  },
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserType.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        roles:action.payload.roles
      };
    case UserType.LOGOUT:
      return {
        ...state,
        token: action.payload,
        firebaseToken: action.payload,
      };
    case UserType.FIREBASETOEKN:
      return {
        ...state,
        firebaseToken: action.payload,
      };
      break;
    default:
      return state;
  }
};
export default userReducer;
