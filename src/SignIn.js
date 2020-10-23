import React from "react";
import "./components/Login/Login.scss";
import { login } from "./redux";
import { connect } from "react-redux";
import { loginAPI } from "./api/api";
import URL from "./api/UrlConstans";
import { projectAPIToken } from "./variables/Variables";

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
    // const { username, password } = this.state;
    // console.log("name: ", this.state.username, " pass: ", this.state.password);
    // this.props.login(this.state.username, this.state.password);
    // loginAPI
    //   .post("http://localhost:44340" + URL.login, {
    //     Username: this.state.username,
    //     Password: this.state.password,
    //   })
    //   .then((resutl) => {
    //     projectAPIToken = resutl.data.token;
    //     console.log("token= ",resutl.data.token);
    //   });
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
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     doLogin: () => dispatch(login()),
//   };
// };
// export default SignIn
export default connect(mapStatetoProp, { login })(SignIn);
