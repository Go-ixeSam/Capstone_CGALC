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
import { NavLink } from "react-router-dom";
// import { routetriplink, isCheck,notification } from "../../variables/Variables.jsx";
import * as variables from "../../variables/Variables.jsx";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";
import "../Sidebar/Sidebar.css";
import logo from "../../assets/img/gas_station_background.png";
import { connect } from "react-redux";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    // const adminLink = [];
    // const flettManagerLink = [];
    const array = [];
    const role = this.props.roles.text;
    this.props.routes.map((prop) => {
    console.log("layoutlayout= ",prop.layout,"và ",variables.fleetmanager)

      if (role == variables.fleetManagerRole && prop.layout==variables.fleetmanager) {
        array.push(prop);
      } 
      if(role == variables.adminRole && prop.layout==variables.admin) {
        array.push(prop);
      }
    });
    console.log("role= ",array)

    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")",
    };
    return (
      <div id="sidebar" className="sidebar" data-image={this.props.image}>
        {this.props.hasImage ? (
          <div className="sidebar-background" style={sidebarBackground} />
        ) : null}
        <div className="logo">
          <a
            // href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a className="simple-text logo-normal">Cheapest trip cost</a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {/* cái dòng trên là resposive, nếu chiều ngang mà nhỏ hơn 991 thì cái side bar sẽ thu lại */}

            {/* {this.props.routes.map((prop, key) => { */}
            {array.map((prop, key) => {
              var li = <li></li>;
              var imgSize = "15%";
              let link = prop.layout + prop.path;

              //Cái dòng trên có tác dụng để dấu đi những cái NavLink chỉ có thể
              // xuất hiện khi nhấp button "Find routes"
              // if (prop.layout + prop.path == routetriplink) | {

              if (
                link == variables.routetriplink
                //  ||
                // link == variables.notification
              ) {
                li = <li display="none" />;
              } else {
                if (!prop.redirect)
                  return (
                    <li
                      className={
                        prop.upgrade
                          ? "active active-pro"
                          : this.activeRoute(prop.layout + prop.path)
                      }
                      key={key}
                    >
                      {/* Dòng li trên chủ yếu để unlock cái gì đấy nếu dùng phiên bản trả tiền, đã test
                    và đéo nên quan tâmtâm
                    */}
                      <NavLink
                        to={prop.layout + prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        {/* <i className={prop.icon} />
                        <p>{prop.name}</p> */}
                        <img
                          src={prop.icon}
                          style={{
                            width: imgSize,
                            height: imgSize,
                            display: "inline-block",
                          }}
                        />
                        <p style={{ display: "inline-block", marginLeft: 5 }}>
                          {prop.name}
                        </p>
                      </NavLink>
                    </li>
                  );
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    roles: state.user.roles,
  };
};
export default connect(mapStateToProps, null)(Sidebar);
