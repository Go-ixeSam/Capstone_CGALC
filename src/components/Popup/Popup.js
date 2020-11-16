import Modal from "react-awesome-modal";
import React, { Component } from "react";
import update from '../../assets/img/icons8-update-100.png'
import "./Popup.css"

export const ShowPopUp = (argument) => {
  const length="200"
  const width=argument.length
  return (
    <Modal
      visible={argument.visible}
      width={width}
      effect="fadeInDown"
      // onClickAway={argument.onCLose}
    >
      {argument.children}
    </Modal>
  );
};
