import React from "react";
import { Col, Form, Grid, Row } from "react-bootstrap";
import { FormInput } from "../components/ByMySelf/Form.js";
import { CardNoFooter } from "../components/Card/Card.jsx";
import { MyButton } from "../components/CustomButton/CustomButton";
import * as variable from "../variables/Variables";
export default class AddTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountForm: [
        {
          row: {
            cols: [
              {
                colNumber: 6,
                elementType: variable.input,
                elementConfig: {
                  name: variable.name,
                  type: variable.text,
                  labeltext: "Truck name",
                  placeholder: " Xe Tải Isuzu 4 Chân 17.9 Tấn Vĩnh Phát FV330",
                  value: "",
                },
                validation: [variable.required],
                valid: {},
              },
            ],
          },
        },
        {
          row: {
            cols: [
              {
                colNumber: 2,
                elementType: variable.input,
                elementConfig: {
                  name: variable.weight,
                  type: variable.number,
                  labeltext: "Weight",
                  placeholder: "2.5",
                  value: "",
                },
                validation: [variable.required, variable.positiveNumber],
                valid: {},
              },
            ],
          },
        },
        // {
        //   row: {
        //     cols: [
        //       {
        //         name: "cargoVolume",
        //         colNumber: 3,
        //         elementType: "input",
        //         elementConfig: {
        //           name: variable.cargoVolume,
        //           type: "number",
        //           labeltext: "Cargo volume",
        //           placeholder: "0",
        //           value: "",
        //         },
        //         validation: [required, positiveNumber],
        //         valid: {},
        //       },
        //     ],
        //   },
        // },
      ],
    };
  }
  submitForm = (event) => {
    event.preventDefault();
    /**
     * *Nếu như formIsValid == true thì tiến hành add trip
     */
    if (this.state.formIsValid == true) {
      this.addNewTrip();
    }
  };

  render() {
    return (
      <div className="content">
        <Grid fluid style={{ margin: 0, padding: 0 }}>
          <CardNoFooter
            title="Account form"
            content={
              <Form onSubmit={this.submitForm}>
                {this.state.accountForm.map((obj, index) => {
                  let columnss = obj.row.cols;
                  return (
                    <Row key={"row-" + index}>
                      {columnss.map((col, index) => {
                        col = (
                          <Col xs={col.colNumber} key={"col-" + index}>
                            <FormInput
                              {...col}
                              id={col.name}
                              valid={col.valid}
                              change={(event) => {
                                this.handleInput(event);
                              }}
                            />
                          </Col>
                        );
                        return col;
                      })}
                    </Row>
                  );
                })}
                <Row>
                  <Col xs={12}>
                    <MyButton
                      bsStyle="info"
                      result={!this.state.formIsValid}
                      type="submit"
                      text="Add trip"
                    />
                  </Col>
                </Row>
              </Form>
            }
          />
        </Grid>
      </div>
    );
  }
}
