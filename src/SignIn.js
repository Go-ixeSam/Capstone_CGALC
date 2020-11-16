import React from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import "./components/Login/Login.scss";
import { login } from "./redux";
const cookies = new Cookies();
const axios = require("axios").default; //Tạo 1 axios instance

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name: ", name, " value: ", value);
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password,this.props.firebaseToken);
  };
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(event) => this.handleChange(event)}
            />
            <button type="submit">login</button>
          </form>
          {/* <div>{console.log(this.props.userData.data)}</div> */}
        </div>
      </div>
    );
  }
}
const mapStatetoProp = (state) => {
  return {
    userData: state.token,
    firebaseToken: state.user.firebaseToken,
  };
};
export default connect(mapStatetoProp, { login })(SignIn);