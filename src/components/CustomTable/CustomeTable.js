import React from "react";
import "../CustomTable/CustomeTable.css";

export class TableMethod extends React.Component {
  prepareTableHeader(argument, stateName) {
    let tmp = [];
    argument.map((obj) => {
      tmp.push({ id: obj.id, value: obj.value });
    });
    this.setState({
      [stateName]: [...tmp],
    });
  }
}
export default TableMethod
