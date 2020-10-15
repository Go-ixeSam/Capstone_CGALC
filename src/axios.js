import React, { Component } from "react";
const axios = require("axios");

// Want to use async/await? Add the `async` keyword to your outer function/method.
export class AxiosMethod {
  async metdasdhod(argument) {
    const { url, param, type } = argument;
    var response = {};
    switch (type) {
      case "get":
        response = await axios.get(url, {
          param,
        });
        break;
      case "post":
        response = await axios.post(url, {
          param,
        });
        break;
      case "delete":
        response = await axios.delete(url, {
          param,
        });
        break;
      case "update":
        response = await axios.put(url, {
          param,
        });
        break;
    }
    try {
    //   response;
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
