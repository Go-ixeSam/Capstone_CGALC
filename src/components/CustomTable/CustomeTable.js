import React from "react";
import { Table, FormGroup, Radio } from "react-bootstrap";
import { FormRadio } from "../CustomRadio/CustomRadio.jsx";
import time from "../../assets/img/time.png";
import trip from "../../assets/img/icon_estimate.png";
import { DecideButton } from "../CustomButton/CustomButton.jsx";
// import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
// import Table from 'react-bootstrap/Table'
import Checkbox from "react-checkbox-component";
import "../CustomTable/CustomeTable.css";
var i = 1;
var paddingNumber = "5px";
var padding20px = "30px";
export const CustomTable = (argument) => {
  var numbers = 0;
  return (
    <div>
      <div className="headerTable">
        {argument.headerItems.map((obj) => {
          return <TableHeaderItem img={obj.src} text={obj.name} number={1} />;
        })}
      </div>
      <div>
        {argument.bodyValues.map((obj) => {
          numbers++;
          console.log(numbers);
          return (
            <div>
              <div className="bodyTable" onClick={argument.choose}>
                <TableBodyItem value={obj.order} />
                <TableBodyItem value={obj.estimateCost} />
                <TableBodyItem value={obj.estimateTime} />
                {/* <div className="displayFlexRow" style={{ width: "auto" }}> */}
                {/* <DecideButton text="Choose" select={true} /> */}
                {/* <div style={{ visibility: "hidden" }}>A</div> */}
                {/* <DecideButton text="Remove" select={false} /> */}
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TableHeader = () => {
  return (
    // <div className="headerTable">
    <div>
      <TableHeaderItem />
    </div>
  );
};

/**
 * number =1 thi CSS class laf "p"
 * number =2 thi CSS class laf "p-normal"
 * @param {*} argument
 */
export const TableHeaderItem = (argument) => {
  var classes = "";
  var hidden = "visible";
  var widths = argument.width; //dựa vào độ dài của dữ liệu ma điều chỉnh đô dài, vd: tên con đường rất dài nên có thể sẽ rất lớn

  //Kiểm tra kiểu chữ
  if (argument.number == 1) {
    classes = "p";
  } else {
    classes = "p-normal";
  }

  //Một mẹo làm mất element mà ko loại bỏ vị trí của nó trên UI
  if (argument.show == false) {
    hidden = "hidden";
  }
  return (
    <div className="headerItems" style={{ width: widths }}>
      <img
        className="imageSize"
        src={argument.img}
        style={{ visibility: hidden }}
      />
      <p className={classes}>{argument.text}</p>
    </div>
  );
};
export const TableBodyItem = (argument) => {
  return (
    <div className="headerItems">
      <p style={{ margin: 0, marginLeft: padding20px }}>{argument.value}</p>
    </div>
  );
};
