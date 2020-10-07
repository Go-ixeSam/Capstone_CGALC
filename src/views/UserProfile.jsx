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
import { Table, FormGroup, Radio } from "react-bootstrap";
import {
  FormRadio,
  ItemRadio,
} from "../components/CustomRadio/CustomRadio.jsx";
import SeperateLine from "../components/formserparate/SeperateLine.js";
import * as actionTypes from "../store/actions";
// import "bootstrap/dist/css/bootstrap.css";
import Comment from "../testingonly/Comment.js";
import axios from "axios";
import {
  fueltype,
  triptype,
  fuelArr,
  tripArr,
} from "../variables/Variables.jsx";
import { Grid, Row, Form, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";
import { CustomFormGroup } from "../components/ByMySelf/Form.js";
// import avatar from "assets/img/faces/ricado.jpg";

// const api = axios.create(
//   {
//     baseURL: `http://localhost:3000/admin/user`
//   }
// )

// function callAPI() {
//   axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       return response.data;
//     });
// }

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Samnk",
      password: "2511",
      full_name: "Nguyen Khac Sam",
      photo: "",
      gender: "male",
      password: "",
      address: "lê văn sĩ",
      city: "HCM",
      is_active: true,
      accounts: [],
      course: [],
      posts: [],
      myTitle: "",
      postResponse: "",
      checkboxChecked: false,
      tripTypeSelect: "One way",
      fuelTypeSelect: "Ron95-IV",
      driverSelect: false,
      driverList: [
        {
          driver: {
            id: "D1",
            name: "Srpint",
          },
        },
        {
          driver: {
            id: "D2",
            name: "Hayao",
          },
        },
        {
          driver: {
            id: "D3",
            name: "Ngo Ton",
          },
        },
      ],

      //state luu tru du lieu
      startingLocation: "",
      destination: "",
      tripType: "One way",
      vehicleModel: "",
      carManufacturer: "",
      cityMpg: "",
      highwayMpg: "",
      tankSize: "",
      fuelType: "Ron95-IV",
      driver: {
        id: "",
        name: "",
      },
      trip: {
        startingLocation: "",
        destination: "",
        tripType: "One way",
        vehicleModel: "",
        carManufacturer: "",
        cityMpg: "",
        highwayMpg: "",
        tankSize: "",
        fuelType: "Ron95-IV",
        driver: {
          id: "",
          name: "",
        },
      },
    };
  }

  // callAPI = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       response.data.map((ele, index) => {
  //         this.setState(
  //           {
  //             posts: this.state.posts.concat(ele)

  //           }
  //         );
  //       });

  //     });
  // };

  // callPostAPI = async (requestData) => {

  //   const post = {
  //     userId: '55',
  //     id: '12',
  //     title: requestData,
  //     body: 'Ko co g ',
  //   };
  //   console.log(post);
  //   axios.post('https://jsonplaceholder.typicode.com/posts', post)
  //   .then(response => {
  //     this.setState({
  //       postResponse: response.data
  //     });
  //   });
  // }

  getSelectOption = (event) => {
    this.setState({ myTitle: event.target.value });
    console.log("đây là title: " + this.state.myTitle);
  };

  handle = (event, fieldName) => {
    var tmp = { ...this.state.trip };
    switch (fieldName) {
      case "startingLocation":
        this.setState({
          trip: { ...tmp, startingLocation: event.target.value },
        });
        break;
      case "destination":
        this.setState({
          trip: { ...tmp, destination: event.target.value },
        });
        break;
      case "vehicleModel":
        this.setState({
          trip: { ...tmp, vehicleModel: event.target.value },
        });
        break;
      case "carManufacturer":
        this.setState({
          trip: { ...tmp, carManufacturer: event.target.value },
        });
        break;
      case "cityMpg":
        this.setState({
          trip: { ...tmp, cityMpg: event.target.value },
        });
        break;
      case "highwayMpg":
        this.setState({
          trip: { ...tmp, highwayMpg: event.target.value },
        });
        break;
      case "tankSize":
        this.setState({
          trip: { ...tmp, tankSize: event.target.value },
        });
        break;
      case "tripType":
        this.setState({
          trip: { ...tmp, tripType: event.target.value },
        });
        break;
      case "fuelType":
        this.setState({
          trip: { ...tmp, fuelType: event.target.value },
        });
        break;
      case "driver":
        this.setState({
          trip: {
            ...tmp,
            driver: {
              name: event.target.value,
            },
          },
        });
        break;
    }
  };
  /**
   * Sự khác nhau khi đối số có { } và ko
   * Nếu ko có thì nó chỉ là đối số bt
   * Nếu có thì đối số nhận vào phải có field là event
   * Mấy cái hàm setState này ko thể tạo thành 1 hàm chung đc
   * Nó như get và set ấy, mà get và set thì mỗi class đều có riêngriêng
   * @param {*} event
   */

  checkBoxHandle = (event) => {
    this.setState({
      checkboxChecked: !this.state.checkboxChecked,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    alert("you are submiting ");
    console.log(this.state.trip);
  };

  /**
   * Dùng để test
   */
  clickCaiDitConMeMay = () => {
    console.log("Click đc rồi địt me");
    console.log(this.state.password);
  };
  render() {
    // console.log("Trip type= " + this.state.trip.tripType);
    // console.log("Fuel type= " + this.state.trip.driver.name);
    return (
      <div className="content">
        {/* <Comment author={userhahahaha} /> */}
        {/* Cái comment dùng để test rằng ta có thể tách code thành component nhỏ như thế nào */}
        <Form>
          <Grid fluid>
            <Row>
              <Col md={8}>
                <Card
                  title="Trip information"
                  content={
                    <div>
                      <Row>
                        <CustomFormGroup
                          xsNumber={5}
                          realValue={this.state.trip.startingLocation}
                          type="input"
                          change={(event) => {
                            this.handle(event, "startingLocation");
                          }}
                          labelText={"Starting Locatin"}
                          placeholderText={"starting location"}
                        />

                        <CustomFormGroup
                          xsNumber={5}
                          type="input"
                          realValue={this.state.trip.destination}
                          change={(event) => {
                            this.handle(event, "destination");
                          }}
                          labelText={"Destination"}
                          placeholderText={"destination"}
                        />
                      </Row>
                      <Row>
                        <CustomFormGroup
                          xsNumber={3}
                          type="select"
                          realValue={this.state.trip.tripType}
                          info={triptype}
                          labelText={"Trip Type"}
                          options={["One way", "Round Trip"]}
                          placeholderText={"trip type"}
                          currentValue={this.state.trip.tripType}
                          change={(event) => this.handle(event, "tripType")}
                        />
                      </Row>
                      <Row>
                        <SeperateLine text="Vehicle information" />
                      </Row>
                      <Row></Row>
                      <Row>
                        <CustomFormGroup
                          realValue={this.state.trip.cityMpg}
                          xsNumber={3}
                          type="number"
                          change={(event) => {
                            this.handle(event, "cityMpg");
                          }}
                          labelText={"City (mpg)"}
                          placeholderText={""}
                        />
                        <CustomFormGroup
                          xsNumber={3}
                          realValue={this.state.trip.highwayMpg}
                          type="number"
                          change={(event) => {
                            this.handle(event, "highwayMpg");
                          }}
                          labelText={"highway (mpg)"}
                          placeholderText={""}
                        />
                        <CustomFormGroup
                          xsNumber={3}
                          realValue={this.state.trip.tankSize}
                          type="number"
                          change={(event) => {
                            this.handle(event, "tankSize");
                          }}
                          labelText={"Tank size"}
                          placeholderText={""}
                        />
                        <CustomFormGroup
                          xsNumber={3}
                          type="select"
                          realValue={this.state.trip.fuelType}
                          info={fueltype}
                          options={[
                            "Ron95-IV",
                            "Ron95-III",
                            "E5 Ron92-II",
                            "DO 0,001S-V",
                            "DO 0,05S-II",
                            "Dầu hỏa 2-K",
                          ]}
                          change={(event) => {
                            this.handle(event, "fuelType");
                          }}
                          labelText={"Fuel Type"}
                          placeholderText={""}
                        />
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Button
                            bsStyle="info"
                            fill
                            type="submit"
                            // pullRight
                            onClick={(event) => {
                              this.submitForm(event);
                            }}
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>
                      <div className="clearfix" />
                    </div>
                  }
                />
              </Col>
              <Col md={2} style={{ background: "#fff", border: "#333333" }}>
                <Row>
                  <div style={{ marginTop: 15, marginLeft: 15 }}>
                    <h4>Driver</h4>
                  </div>
                  <div
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      marginBottom: 15,
                    }}
                  >
                    {this.state.driverList.map((drv) => {
                      return (
                        <FormRadio
                          // currentValue={this.state.trip.driver.name}
                          content={
                            <ItemRadio
                              cssClassName={
                                drv.driver.name == this.state.trip.driver.name
                                  ? "labelp_green"
                                  : "labelp"
                              }
                              label={drv.driver.name}
                              change={(event) => {
                                this.handle(event, "driver");
                              }}
                            />
                          }
                        />
                      );
                    })}
                  </div>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

//Có tác dụng select ra những state cần xử lí
/**
 * state này là của redux, và chữ fn đóng vai trò là 1 props
 * fn có giá trị là state.full_name của redux
 * @param {} state
 */
const mapStateToProps = (state) => {
  // console.log('state.initialState: '+state.initialState);
  // console.log('state: '+state);
  // console.log(state.full_name);

  return {
    fullprofile: state.userprofile,
    up: state.userprofile,
    // fn:state.full_name
    // usernam:state.username
  };
};

//gọi những function tương ứng để xử lí state đưa đến
const mapDispatchToProps = (dispatch) => {
  // console.log(actionTypes.ADD);
  return {
    submitTheForm: (full_name, user_name, email, address, city, gender) =>
      dispatch({
        type: actionTypes.ADD,
        value: "Aha",
        fullname: full_name,
        username: user_name,
        mail: email,
        address: address,
        city: city,
        gender: gender,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
