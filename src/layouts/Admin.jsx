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
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.jsx";
import { style, primaryColor, yellowColor } from "../variables/Variables.jsx";
import routes from "../routes.js";
import image from "../assets/img/sidebar-3.jpg";
import { messaging } from "../init-fcm";
import  Notifications  from "../views/Notifications.jsx";

console.log("màu đây: " + primaryColor);

var color = primaryColor;
class Admin extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      // color: color,
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open",
    };
  }

  // Event khi ta click vào notification, ở đây ta có lẽ sẽ bắt sự kiên tài xế gửi request thay đổi
  // đường đi thì ta click vào và chuyển đến trang cần đến
  handleNotificationClick = (position) => {
    //Nguyên cái đống case ở dưới nhằm để demo thôithôi
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15,
    });
  };
  // Hàm này sẽ xử lí việc nhấp vào cái item ở nav bar và đưa ta đến trang cần tìm
  getRoutes = (routes) => {
    var role = 1;
    var route = <Route></Route>;
    return routes.map((prop, key) => {
      //props ở đây chính là phần từ trong mảng routes sau khi dùng .map
      // Nếu đây là admin layout thì mới thực hiện route
      if (prop.layout == "/admin") {
        if (role == 1) {
          // role==1 là mình dùng để test cho trường hợp đăng nhập có nhiều role
          route = (
            <Route
              path={prop.layout + prop.path}
              //path: Tên đường dẫn
              render={(props) => (
                /**
                 * render={(props), kĩ thuật render props
                 * ngay tại lúc này, khi 1 page đc layout thì đồng thời sẽ render ra
                 * một notification luônluôn
                 */
                <prop.component
                  {...props}
                  handleClick={this.handleNotificationClick}
                />
              )}
              key={key}
            />
          );
          // );
        } else {
          route = <div>HalloHallo</div>;
        }
        return route;
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  handleImageClick = (image) => {
    this.setState({ image: image });
  };
  handleColorClick = (color) => {
    this.setState({ color: color });
  };
  handleHasImage = (hasImage) => {
    this.setState({ hasImage: hasImage });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
      // <Notifications
      // handleClick={this.handleNotificationClick("trtr")}
      // />
      this.getCurrentToken()
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
          this.getCurrentToken()
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
  getCurrentToken = () => {
    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging
      .getToken()
      .then((currentToken) => {
       console.log("Day la Token= "+currentToken)
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // showToken("Error retrieving Instance ID token. ", err);
        // setTokenSentToServer(false);
      });
  };

  componentDidMount() {
    // messaging
    //   .requestPermission()
    //   .then(async function () {
    //     const token = await messaging.getToken();
    //   })
    //   .catch(function (err) {
    //     console.log("Unable to get permission to notify.", err);
    //   });
    // navigator.serviceWorker.addEventListener("message", (message) =>
    //   console.log("Day ne: " + message)
    // );

    this.notifyMe();

    // Khai báo 1 notification system ở đây
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }

    // Cách để bắn notification ở đây
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: "tr",
      autoDismiss: 15,
    });
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar
          {...this.props}
          routes={routes}
          // Nhận vào một mảng route
          image={this.state.image}
          // color={primaryColor}
          // color={"#EB5757"}
          hasImage={this.state.hasImage}
        />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          {/* Cai phan nay danh co navBar, la cai bar o tren top */}
          {/* Switch đây là chỗ sẽ đưa ta đến page cần đến dựa vào cái path đc cung cấp */}
          <Footer />
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleHasImage={this.handleHasImage}
            bgColor={this.state["color"]}
            bgImage={this.state["image"]}
            mini={this.state["mini"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          />
        </div>
      </div>
    );
  }
}

export default Admin;
