// import { baseUrl } from "../variables/Variables";
const axios = require("axios").default;

export const loginAPI=axios.create(
    {baseUrl:"http://localhost:44340"}
)
export const tripAPI=axios.create(
    {baseUrl:"http://localhost:44340/api/Trip"}
)
