import React, { Component } from "react";

export class Helper {
  formatTime(time) {
    let date = time.getDate();
    let year = time.getFullYear();
    let month = time.getMonth();

    let hour = time.getHours();
    let minute = time.getMinutes();

    return date + "/" + month + "/" + year + hour + ":" + minute;
  }
}
