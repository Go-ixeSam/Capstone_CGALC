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
import { Button } from "react-bootstrap";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import "./CustomButton.css";

class CustomButton extends Component {
  render() {
    const { fill, simple, pullRight, round, block, ...rest } = this.props; //tham số ko biết là bao nên "...rest" cho ta truyền bao nhiêu cái cũng đc

    const btnClasses = cx({
      "btn-fill": fill,
      "btn-simple": simple,
      "pull-right": pullRight,
      "btn-block": block,
      "btn-round": round,
    });

    return <Button className={btnClasses} {...rest} />;
  }
}

CustomButton.propTypes = {
  fill: PropTypes.bool,
  simple: PropTypes.bool,
  pullRight: PropTypes.bool,
  block: PropTypes.bool,
  round: PropTypes.bool,
};

/**
 * Custom thêm chức năng chuyển trang
 * @param {*} argument
 */
export const MyButton = (argument) => {
  return (
    <Link
      // Đây là nơi ta sẽ navigate đến screen tương ứng, đường dẫn link sẽ được truyền tới Admin.jsxjsx
      to={"/admin/routetrip"}
    >
      <Button bsStyle={argument.style} onClick={argument.click}>
        {console.log(argument.layout + argument.path)}
        {/* <i className={prop.icon} /> */}
        {/* Nếu muốn dùng mấy icon dạng png thì thay cái <i> bằng <img>, và đổi lại hết đống
      icon ở file routes.js, vì cái đó đc tạo từ css */}
        {argument.text}
      </Button>
    </Link>
  );
};

/**
 * Nếu selection là true thì class của cái button này sẽ là "acceptButton", còn ko thì decineButtondecineButton
 * @param {*} argument
 */
export const DecideButton = (argument) => {
  var classes = "";
  if (argument.select == true) {
    classes = "acceptButton";
  } else {
    classes = "decineButton";
  }
  return <Button bsClass={classes}>{argument.text}</Button>;
};

export default CustomButton;
