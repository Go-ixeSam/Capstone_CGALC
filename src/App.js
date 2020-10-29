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
    // console.log("App.js", this.props);
    console.log("cookie: ",cookies.get(AcessToken));
    return (
      <div>
        {/* <Route path="/" component={SignIn} /> */}
        {/* <PrivateRoute path="/protected" component={AdminLayout} /> */}
        <Switch>
          {/* <Route path="/admin" render={(props) => } /> */}
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
          {/* <Route path="/" component={SignIn} /> */}
          {/* <Route path="/" component={Cms} /> */}
          {/* <Redirect from="/" to="/admin/trip" /> */}
        </Switch>
      </div>
    );
  }
}
/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */

const mapStatetoProp = (state) => {
  return {
    userData: state.user.token,
    // test: state
  };
};
export default connect(mapStatetoProp)(withRouter(App));
