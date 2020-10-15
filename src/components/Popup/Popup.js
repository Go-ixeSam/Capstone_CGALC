import Modal from "react-awesome-modal";
import React, { Component } from "react";
import update from '../../assets/img/icons8-update-100.png'
import "./Popup.css"

export const ShowPopUp = (argument) => {
  const { color, message } = argument.popupContent;
  return (
    <Modal
      visible={argument.visible}
      width="400"
      height="300"
      effect="fadeInDown"
      onClickAway={argument.onCLose}
    >
      <div className="popup">
        <div>
          <img src={update} />
          <p style={{ color: color, fontWeight: "bold" }}>{message}</p>
          <a href="javascript:void(0);" onClick={argument.onCLose}>
            Đóng
          </a>
        </div>
      </div>
    </Modal>
  );
};
