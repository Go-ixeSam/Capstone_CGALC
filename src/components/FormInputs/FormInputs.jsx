/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import variable from '../../variables/Variables'
function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}></FormControl>
    </FormGroup>
  );
}

export class FormInputs extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.properties[i]} />
        </div>
      );
    }
    return <Row>{row}</Row>;
  }
}

export function useFormResult(){
  const contractForm = useSelector((state) => state.contract.contractForm);
  // const dispatch = useDispatch();

  let contract = React.useState({});
  contractForm.map((rows) => {
    rows.row.cols.map((col) => {
      let name = col.elementConfig.name;
      contract = { ...contract, [name]: col.elementConfig.value };
    });
  });
  console.log("contracs= ", this.props.contract.record.length);
  contract = {
    [variable.id]: this.props.contract.record.length + 1,
    ...contract,
    [variable.check]: false,
    [variable.time]: new Date().toString(),
  };
  return contract
};

export default FormInputs;
