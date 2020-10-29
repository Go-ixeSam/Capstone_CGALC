import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// function component đc tạo theo hướng dẫn:
// https://viblo.asia/p/thiet-ke-protected-route-de-kiem-tra-trang-thai-xac-thuc-nguoi-dung-voi-react-router-v4-Qpmle9wmlrd

const PrivateRoute = ({ component: Component, ...rest }) => {
 return(
    <Route
    {...rest}
    render={(props) =>
      this.props.userData != "" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
 )
};
const mapStatetoProp = (state) => {
  return {
    userData: state.user.token,
    // test: state
  };
};
export default connect(mapStatetoProp)(PrivateRoute);
