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
import SeperateLine from "../components/formserparate/SeperateLine.js";
import * as actionTypes from "../store/actions";
import "bootstrap/dist/css/bootstrap.css";
import Comment from "../testingonly/Comment.js";
import axios from "axios";
// import React, { Component } from 'react'
// import Select from 'react-select'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";

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
    // api.get('/').then(res => {
    //   console.log(res.data)
    //   this.setState({ course: res.data })
    // })
    this.state = {
      // account={
      username: "Samnk",
      password: "2511",
      full_name: "Nguyen Khac Sam",
      photo: "",
      gender: "male",
      password: "",
      address: "lê văn sĩ",
      city: "HCM",
      is_active: true,
      // },
      accounts: [],
      course: [],
      posts: [],
      myTitle: "",
      // selectObject:{
      //   userId: '77',
      //   id: '12',
      //   title: 'Ok',
      //   body: 'Nothing special ',
      // },
      postResponse: "",
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

  /**
   * Sự khác nhau khi đối số có { } và ko
   * Nếu ko có thì nó chỉ là đối số bt
   * Nếu có thì đối số nhận vào phải có field là event
   * @param {*} event
   */
  formChangeFullnameHandler = (event) => {
    // console.log(event.target.value);
    // this.props.fn = event.target.value;
    this.setState({ full_name: event.target.value });
    console.log(this.state.full_name);
  };
  formChangeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  formChangeUsernameHandler = (event) => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  };
  formChangeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  formChangeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };
  formChangeGendersHandler = (event, eventKey) => {
    console.log(event[eventKey]);

    this.setState({ genders: event });
    console.log(event);
  };
  formChangePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  confirmPassword = (confirm) => {
    console.log(
      confirm.target.value + "value của pass: " + this.state.password
    );
    if (this.state.password === confirm.target.value) {
      console.log("Vào true rồi");
    } else {
      console.log("Vào false rồi");
    }
  };

  // addNewUser = ({ username, password, fullname, dob, role }) => {
  //   return add({ username, password });
  // }

  //   submitForm = (event) => {
  //     event.preventDefault();
  //     alert('you are submiting '+this.props.state.username)
  // }

  /**
   * Dùng để test
   */
  clickCaiDitConMeMay = () => {
    console.log("Click đc rồi địt me");
    console.log(this.state.password);
  };

  addArray = (
    username,
    pass,
    fullname,
    address,
    phôt,
    gender,
    cirty,
    is_active
  ) => {
    const newArray = [...this.state.accounts];
    const newName = this.state.full_name;
    console.log(newName);
    //     this.setState(newState => {
    //       newArray = [...newArray, this.state.accoutn = {
    //         username: 'MyNameisTung',
    //         password: 'M234234',
    //         full_name: 'Thế cơ ak',
    //         photo: '',
    //         gender: 'female',
    //         address: '44 downg cong hoa',
    //         city: 'HN',
    //         is_active: false
    //       }
    // }];
  };
  render() {
    var userhahahaha = {
      name: "sam",
      avatarUrl: "nothing",
    };
    console.log(this.props.up);
    const newAcoount = this.props.fullprofile;

    console.log(newAcoount.full_name);
    const genders = ["Male", "Femail"];
    return (
      <div className="content">
        {/* <Comment author={userhahahaha} /> */}
        {/* Cái comment dùng để test rằng ta có thể tách code thành component nhỏ như thế nào */}
        <Grid fluid>
          {/* <Row>
            {console.log('Mảng đây: ' + this.state.posts)}
            <select ref='fake' value={this.state.myTitle} onChange={(event)=>{this.getSelectOption(event)}}>
              {this.state.posts.map((ele, index) => {
                return (
                  <option value={ele.title}>{ele.title}</option>
                )
              })}
            </select>

            <button onClick={this.callAPI}>
              Show data
        </button>
          </Row> */}
          {/* <div>Post data: {this.state.postResponse.title}</div> */}
          {/* <button onClick={(requestData)=>{this.callPostAPI(this.state.myTitle)}}>Send post</button> */}
          <Row>
            <Col md={8}>
              <Card
                title="Create new trip"
                content={
                  <div>
                    <Row>
                      <CustomFormGroup
                        xsNumber={5}
                        type="input"
                        change={(event) => {
                          this.formChangeUsernameHandler(event);
                        }}
                        labelText={"Starting Locatin"}
                        placeholderText={"starting location"}
                      />

                      <CustomFormGroup
                        xsNumber={5}
                        type="input"
                        change={(event) => {
                          this.formChangeEmailHandler(event);
                        }}
                        labelText={"Destination"}
                        placeholderText={"destination"}
                      />
                    </Row>
                    <Row>
                    <CustomFormGroup
                        xsNumber={3}
                        type="select"
                        // change={(event) => {
                        //   this.formChangeEmailHandler(event);
                        // }}
                        labelText={"Trip Type"}
                        // options={["One Way","Round Trip"]}
                        //tam thoi chua quay lai
                        placeholderText={"trip type"}
                      />
                    </Row>
                    <Row>
                      <SeperateLine
                      text="Vehicle information"
                      />
                    </Row>
                    <Row>
                      <CustomFormGroup
                        xsNumber={5}
                        type="input"
                        change={(event) => {
                          this.formChangePasswordHandler(event);
                        }}
                        labelText={"Vehicle Model"}
                        placeholderText={"vehical model"}
                      />
                      <CustomFormGroup
                        xsNumber={5}
                        type="input"
                        change={(event) => {
                          this.formChangePasswordHandler(event);
                        }}
                        labelText={"Car Manufacturer"}
                        placeholderText={"car manufacturer"}
                      />
                    </Row>
                    <Row>
                      <CustomFormGroup
                        xsNumber={3}
                        type="number"
                        change={(password) => {
                          this.confirmPassword(password);
                        }}
                        labelText={"City (mpg)"}
                        placeholderText={""}
                      />
                      <CustomFormGroup
                        xsNumber={3}
                        type="number"
                        change={(password) => {
                          this.confirmPassword(password);
                        }}
                        labelText={"highway (mpg)"}
                        placeholderText={""}

                      />
                      <CustomFormGroup
                        xsNumber={3}
                        type="number"
                        change={(password) => {
                          this.confirmPassword(password);
                        }}
                        labelText={"Tank size"}
                        placeholderText={""}

                      />
                      <CustomFormGroup
                        xsNumber={3}
                        type="select"
                        change={(password) => {
                          this.confirmPassword(password);
                        }}
                        labelText={"Fuel Type"}
                        placeholderText={""}
                      />
                    </Row>
                    <Row>
                      <SeperateLine
                      text="Driver"
                      />
                    </Row>
                    {/* <Row>
                      <CustomFormGroup
                        xsNumber={4}
                        type='password'
                        change={(password) => this.confirmPassword(password)}
                        labelText={'Confirm Password'}
                        placeholderText={'Confirm Password'} />
                    </Row> */}
                    {/* <Row>
                      <CustomFormGroup
                        xsNumber={6}
                        type="input"
                        change={(event) => {
                          this.formChangeFullnameHandler(event);
                        }}
                        labelText={"Fullname"}
                        placeholderText={"Full name"}
                      />
                    </Row>
                    <Row>
                      <CustomFormGroup
                        xsNumber={12}
                        type="input"
                        change={(event) => {
                          this.formChangeAddressHandler(event);
                        }}
                        labelText={"Address"}
                        placeholderText={"Address"}
                      />
                    </Row>
                    <Row>
                      <CustomFormGroup
                        xsNumber={6}
                        type="input"
                        change={(event) => {
                          this.formChangeCityHandler(event);
                        }}
                        labelText={"City"}
                        placeholderText={"City"}
                      />
                      <CustomFormGroup
                        xsNumber={3}
                        type="select"
                        labelText={"Genders"}
                        select={(event) => {
                          this.formChangeGendersHandler(event);
                        }}
                      />
                    </Row> */}

                    <Row>
                      <Col xs={12}>
                        <Button
                          bsStyle="info"
                          fill
                          type="submit"
                          // pullRight
                          // onClick={(full_name, user_name, email, address, city, gender) => { this.props.submitTheForm(this.state.full_name, this.state.username, this.state.email, this.state.address, this.state.gender)
                          //  }
                          // }
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
            {/* <Col md={4} >
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Mike Andrew"
                userName="michael24"
              description={
                <span>
                  "Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo"
                </span>
              } 
              socials={
                <div>
                  <Button simple>
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button simple>
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button simple>
                    <i className="fa fa-google-plus-square" />
                  </Button>
                </div>
              }
              />
            </Col> */}
          </Row>
        </Grid>
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
