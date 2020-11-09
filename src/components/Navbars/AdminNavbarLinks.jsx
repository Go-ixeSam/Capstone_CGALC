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
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Radium from "radium";
class AdminNavbarLinks extends Component {
  logout = () => {
    this.props.logout();
  };
  goToNotificationtification = () => {
    this.props.history.replace("notifications");
  };

  render() {
    let style = {
      whenHover: {
        fontSize: "20px",
      },
    };
    // const notification = (
    //   <div>
    //     <i className="fa fa-globe" />
    //     <b className="caret" />
    //     <span className="notification">7</span>
    //     <p className="hidden-lg hidden-md">Notification</p>
    //   </div>
    // );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} onClick={this.goToNotificationtification}>
            <i className="pe-7s-bell" style={style.whenHover} />
            <span className="notification">7</span>
            <p className="hidden-lg hidden-md">Notification</p>
          </NavItem>
        </Nav>
        {/* <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem> */}

        {/* <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem> */}
        <Nav pullRight>
          {/* <NavItem eventKey={1} href="#">
            Account
          </NavItem> */}
          {/* <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Action</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separated link</MenuItem>
          </NavDropdown> */}
          <NavItem eventKey={3} onClick={this.logout}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}
/**
 * state này là của redux, và chữ fn đóng vai trò là 1 props
 * fn có giá trị là state.full_name của redux
 * @param {} state
 */
const mapStateToProps = (state) => {
  return {
    fullprofile: state.userprofile,
    createtripss: state.trip,
    token: state.user.token,
  };
};
export default connect(mapStateToProps, { logout })(Radium(AdminNavbarLinks));
