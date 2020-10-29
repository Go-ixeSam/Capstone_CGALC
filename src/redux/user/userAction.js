import UserType from "./userType.js";
import { tripAPI, loginAPI } from "../../api/api.js";
import URL from "../../api/UrlConstans";
// import { AxiosMethod } from "../../axios.js";

/**
 * Noi tao action creator
 * @param {*} usernmam
 */
export const login = (username, pass) => async (dispatch) => {
  const result = await loginAPI.post("http://localhost:44340"+URL.login, {
    Username: username,
    Password: pass,
  });
  return dispatch({
    type: UserType.LOGIN,
    payload: result.data.token,
  });
};
export const logout=()=>{
  return{
    type:UserType.LOGOUT,
    payload:""
  }
}
