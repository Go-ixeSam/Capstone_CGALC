import React, { Component } from "react";
import * as TIME from "./variables/Variables";
export class Helper {
  formatTime(time) {
    let date = time.getDate();
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    return month + "/" + date + "/" + year + ", " + hour + ":" + minute;
  }
  formatDateOnly(time) {
    let date = time.getDate();
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    return date + "/" + month + "/" + year;
  }
}
