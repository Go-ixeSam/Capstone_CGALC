import React, { Component } from "react";
import { projectAPIToken } from "./variables/Variables.jsx";

const axios = require("axios").default; //Tạo 1 axios instance
axios.defaults.headers.common = { Authorization: `Bearer ${projectAPIToken}` }; //Dòng này để config header chung cho toàn bộ requestrequest
axios.defaults.baseURL = "http://localhost:44340/api"; //Gắn base url mặc định, khỏi phải viết đi viết lại nhiều lần

// Want to use async/await? Add the `async` keyword to your outer function/method.
export class AxiosMethod {
  /**
   * 3 tham số là url: đường dẫn của api
   * param: param của queryString nếu có
   * type: loại API
   * @param {*} argument
   */
  async metdasdhod(argument) {
    const { url, parameter, type } = argument;
    var response = {};
    switch (type) {
      case "get":
        response = await axios.get(url, {
          params: parameter,
        });
        // console.log(response);
        break;
      case "post":
        response = await axios.post(url, null,{
          params: parameter,
        });
        break;
      case "delete":
        response = await axios.delete(url, {
          params: parameter,
        });
        break;
      case "update":
        response = await axios.put(url, {
          params: parameter,
        });
        break;
    }
    try {
      // response;
      return response;
    } catch (error) {
      console.error(error);
      console.log(response);
    }
  }
}
