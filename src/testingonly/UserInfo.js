import React, { Component } from "react";
import Avatar from "./Avatar.js";
function UserInfo(props) {
    return (
      <div>
        <Avatar user={props.user} />
        <div>
          {props.user.name}
        </div>
      </div>
    );
  }
  export default UserInfo;
