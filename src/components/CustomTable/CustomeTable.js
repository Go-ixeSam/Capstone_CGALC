import React from "react";
import { Table, FormGroup, Radio } from "react-bootstrap";
import { FormRadio } from "../CustomRadio/CustomRadio.jsx";
// import Checkbox from "../CustomCheckbox/CustomCheckbox.jsx";
// import Table from 'react-bootstrap/Table'
import Checkbox from "react-checkbox-component";
export const CustomTable = (argument) => {
  var i = 1;
  return (
    <Table condensed>
      {/* <thead style={{ background: "black" }}>
        <tr style={{ border: 0 }}>
          <th style={{ border: 0 }}></th>
          <th style={{ border: 0 }}>ID</th>
          <th style={{ border: 0 }}>Full name</th>
        </tr>
      </thead> */}
      <tbody style={{ border: 0 }}>
        <tr style={{ border: 0 }} id="1">
          <td style={{ border: 0, width: "max-content" }}>
            <FormRadio 
            value={argument.getValue}
            driverSelectHandle={argument.change}
            />
          </td>
          <td style={{ border: 0 }}>D1</td>
          <td style={{ border: 0 }}>Otto</td>
        </tr>
        {/* <tr bordered={false}>
          <td>2</td>
          <td>D2</td>
          <td>Sean</td>
        </tr>
        <tr>
          <td>3</td>
          <td>D3</td>
          <td>Sang</td>
        </tr> */}
      </tbody>
    </Table>
  );
};
