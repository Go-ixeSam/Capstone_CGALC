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
import {
  Grid, Row, Col, Table, FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { connect } from 'react-redux';
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import avatar from "../assets/img/default-avatar.png";
// import UserTr from "../components/Tr/UserTr.js";

import Card from "../components/Card/Card.jsx";

// import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  // account={
  // username: 'Samnk',
  // password: '2511',
  // full_name: 'Nguyen Khac Sam',
  // photo: '', gender: 'male',
  // address1: 'lê văn sĩ',
  // city: 'HCM',
  // is_active: true},
  // accounts: [this.account]
  // };


tableItemMouseClick = (newAccount) => {
}

addAccount = (newAccount) => {
  // cloneAccount = [...this.account];
  // cloneAccount.push(newAccount);
  // this.account = cloneAccount;
}
render() {
  console.log(this.props.up);
  const invicible = true;
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="U can see user list right here =)"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>

                      <th>Full Name</th>
                      <th>Username</th>

                    </tr>
                    {/* <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr> */}
                  </thead>
                  <tbody>

                                          
                        { this.props.up.map((item, index) => {
                           return (<tr key={index}>
                             <td>{item.username}</td>
                             <td>{item.full_name}</td>
                           </tr>);
                         })

                        }

                    {/* <tr>
                        {
                          td.map((props, key) => {
                          return<th>{props}</th>
                          })
                        }
                      </tr> */}

                    {/* <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr> */}

                     {/* {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}  */}
                  </tbody>
                </Table>
              }
            />
          </Col>
          {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col> */}
        </Row>
      </Grid>
      <Grid fluid>
        <Row>
          <Col md={8}>
            <Card
              title="Edit Profile"
              content={
                <form>
                  <FormInputs
                    // ncols={["col-md-5", "col-md-3", "col-md-4"]}
                    ncols={["col-md-3", "col-md-4"]}
                    properties={[
                      // {
                      //   label: "Company (disabled)",
                      //   type: "text",
                      //   bsClass: "form-control",
                      //   placeholder: "Company",
                      //   defaultValue: "Creative Code Inc.",
                      //   disabled: true
                      // },
                      {
                        label: "Username",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Username",
                        defaultValue: "michael23"
                      },
                      {
                        label: "Email address",
                        type: "email",
                        bsClass: "form-control",
                        placeholder: "Email"
                      }
                    ]}
                  />
                  <FormInputs
                    // ncols={["col-md-6", "col-md-6"]}
                    ncols={["col-md-6"]}
                    properties={[
                      // {
                      //   label: "First name",
                      //   type: "text",
                      //   bsClass: "form-control",
                      //   placeholder: "First name",
                      //   defaultValue: "Mike"
                      // },
                      {
                        label: "Full name",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Last name",
                        defaultValue: "Andrew"
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                      {
                        label: "Adress 1",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Adress 1",
                        defaultValue:
                          "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                      {
                        label: "Adress 2",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Adress 2",
                        defaultValue:
                          "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                      }
                    ]}
                  />
                  <FormInputs
                    // ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    ncols={["col-md-4", "col-md-4"]}
                    properties={[
                      {
                        label: "City",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "City",
                        defaultValue: "Mike"
                      },
                      {

                        disabled: true,
                        label: "Gender",
                        type: "select",
                        bsClass: "form-control",
                        placeholder: "Country",
                        defaultValue: "Andrew"


                      },

                      // ,
                      // {
                      //   label: "Postal Code",
                      //   type: "number",
                      //   bsClass: "form-control",
                      //   placeholder: "ZIP Code"
                      // }
                    ]}
                  >
                  </FormInputs>

                  {/* <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                          />
                        </FormGroup>
                      </Col>
                    </Row> */}
                  <Button bsStyle="info" fill type="submit">
                    Update Profile
                    </Button>
                  <div className="clearfix" />
                </form>
              }
            />
          </Col>
          <Col md={4}>
            <UserCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              avatar={avatar}
              name="Mike Andrew"
              userName="michael24"
            // description={
            //   <span>
            //     "Lamborghini Mercy
            //     <br />
            //     Your chick she so thirsty
            //     <br />
            //     I'm in that two seat Lambo"
            //   </span>
            // }
            // socials={
            //   <div>
            //     <Button simple>
            //       <i className="fa fa-facebook-square" />
            //     </Button>
            //     <Button simple>
            //       <i className="fa fa-twitter" />
            //     </Button>
            //     <Button simple>
            //       <i className="fa fa-google-plus-square" />
            //     </Button>
            //   </div>
            // }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
  // const account1 = {
  //   username: 'Samnk',
  //   password: '2511',
  //   full_name: 'Nguyen Khac Sam',
  //   photo: '', gender: 'male',
  //   address1: 'lê văn sĩ',
  //   city: 'HCM',
  //   is_active: true
  // };
  // const account2 = {
  //   username: 'tahnhBT',
  //   password: '2511',
  //   full_name: 'Oh my god',
  //   photo: '', gender: 'male',
  //   address1: 'đường cộng hòa',
  //   city: 'HCM',
  //   is_active: true
  // };
  // const account = [account1, account2];
  
}


}
//Có tác dụng select ra những state cần xử lí
/**
 * state này là của redux, và chữ fn đóng vai trò là 1 props
 * fn có giá trị là state.full_name của redux
 * @param {} state 
 */
const mapStateToProps = state => {
  // console.log('state.initialState: '+state.initialState);
  // console.log('state: '+state);
  // console.log(state.full_name);

  return {
    fullprofile: state.userprofile,
    up:state.userprofile
    // fn:state.full_name
    // usernam:state.username
  }
};
//gọi những function tương ứng để xử lí state đưa đến
const mapDispatchToProps = dispatch => {
  // console.log(actionTypes.ADD);
  return {
   
  }
};
export default connect (mapStateToProps, mapDispatchToProps)(TableList);
