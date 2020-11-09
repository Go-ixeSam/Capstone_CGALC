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
import { Grid } from "react-bootstrap";
import Radium from "radium";
import {primaryColor} from "../../variables/Variables"

class Footer extends Component {
  render() {
    var styles = {
      myStyle: {
        // position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        // backgroundColor: "red",
        color: "white",
        textAlign: "center",
      },
    };
    return (
      // <footer className="footer">
      <footer className="footer" style={styles.myStyle}>
        <Grid fluid>
          {/* <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Company</a>
              </li>
              <li>
                <a href="#pablo">Portfolio</a>
              </li>
              <li>
                <a href="#pablo">Blog</a>
              </li>
            </ul>
          </nav> */}
          <p className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <b style={{color:primaryColor}}>
              Cheapest trip cost
            </b>
            , leave it to us
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Radium(Footer);
