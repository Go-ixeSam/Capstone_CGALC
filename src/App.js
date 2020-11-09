import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import AdminLayout from "../src/layouts/Admin.jsx";
import "./App.css";
import SignIn from "./SignIn.js";
import Cookies from "universal-cookie";
import { AcessToken } from "./variables/Variables";
const cookies = new Cookies();

class App extends React.Component {
  render() {
    {
      if (
        this.props.history.location.pathname != "/" &&
        this.props.userData === ""
      ) {
        this.props.history.replace("/");
      }
    }
    console.log("history: ", this.props);
    return (
      <div>
        <Switch>
          <Route
            // exact
            path="/"
            render={(props) =>
              this.props.userData === "" ? (
                <SignIn {...props} />
              ) : (
                <AdminLayout {...props} />
                // <Redirect to="/admin" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProp = (state) => {
  return {
    userData: state.user.token,
    // test: state
  };
};
export default connect(mapStatetoProp)(withRouter(App));
