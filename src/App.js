import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { connect } from "react-redux";
// import { Messaging } from "./Messaging";
import { Route, Switch ,Redirect} from "react-router-dom";
import AdminLayout from "../src/layouts/Admin.jsx";
import "./App.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import SignIn from "./SignIn.js"

// function App() {
class App extends React.Component {
  
  render() {
    console.log("Đã vào APP",this.props.userData)
    return (
      <div>
        <Switch>
          <Route
            // exact
            path="/"
            render={(props) =>
              this.props.userData === ""? (
                <SignIn/>
              ) : (
                <AdminLayout {...props} />
              )
            }
          />
          {/* Mặc định load trang thì admin layout sẽ được load */}
          {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
          {/* Sau khi admin layout load  thì screen dashboard sẽ được chạy trước */}
          {/* <Redirect from="/" to="/admin/trip" /> */}
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
export default connect(mapStatetoProp,null)(App);
