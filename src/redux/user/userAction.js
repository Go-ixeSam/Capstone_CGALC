import UserType from "./userType.js";
import { tripAPI, loginAPI } from "../../api/api.js";
import URL from "../../api/UrlConstans";
// import { AxiosMethod } from "../../axios.js";

/**
 * APi login yêu cầu 3 
 * @param {username,Password,deviceToken} 
 * với deviceToken là sử dụng firebaseToken
 */


export const login = (username, pass, firebaseToken) => async (dispatch) => {
  const result = await loginAPI.post("http://localhost:44340" + URL.login, {
    Username: username,
    Password: pass,
    deviceToken: firebaseToken,
  });
  return dispatch({
    type: UserType.LOGIN,
    payload: result.data,
  });
};
export const logout = () => {
  return {
    type: UserType.LOGOUT,
    payload: "",
  };
};

export const saveFirebaseToken = (token) => {
  return {
    type: UserType.FIREBASETOEKN,
    payload: token,
  };
};
