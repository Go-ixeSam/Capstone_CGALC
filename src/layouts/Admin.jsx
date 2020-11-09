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
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.jsx";
import { style, primaryColor, yellowColor } from "../variables/Variables.jsx";
import routes from "../routes.js";
import image from "../assets/img/road_trip.jpg";
import { connect } from "react-redux";
import { messaging } from "../init-fcm";
import { saveFirebaseToken } from "../redux";
// import Notifications from "../views/Notifications.jsx";

console.log("màu đây: " + primaryColor);

var color = primaryColor;
var titleName="";
class Admin extends Component {
  //
  constructor(props) {
    super(props);

    /**
     * *kiểu thử nghiệm ref mới đã thành công, với kiểu callback ref này, ta có  thể sử dụng this.notify ở mọi nơi
     */
    this.notify = null;

    this.setNotify = (element) => {
      this.notify = element;
    };

    /**
     * *Đã thành công trong việc thay đổi kiểu ref "legacy" (có thể tìm đọc trong đây:https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs) thành ref mới (bằng phương thức: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs )
     *
     */
    this.addNotify = () => {
      // var color = Math.floor(Math.random() * 4 + 1);
      var color = 1;
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
      this.notify.addNotification({
        // title: <span data-notify="icon" className="pe-7s-bell" />,
        title: <span data-notify="icon" className="pe-7s-bell" />,
        message: (
          <div>
            <span data-notify="message">
              <p style={{margin:0}}>Tài xế <b>Nguyễn Văn Cừ</b> - đã nhận được chuyến đi.</p>
            </span>
          </div>
          // <div>
          //   Tài xế <b>Nguyễn Văn Cừ</b> - đã nhận được chuyến đi.
          // </div>
        ),
        level: level,
        position: "tr",
        autoDismiss: 0,
        onAdd:()=>{
          console.log("Đã click rồi nè");
        }
      });
    };

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
    // this.state._notificationSystem.addNotification({
    this.notify.addNotification({
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
      action: {
        label: "Button name",
        callback: function () {
          console.log("Notification button clicked!");
        },
      },
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
              render={(props) => (
                console.log("cái cần để ý: ",props),
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
        console.log()
        titleName=routes[i].name
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

  /**
   * Hàm lấy firebase token
   */
  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // var notification = new Notification("Hi there!");

      // Kiểm tra xem firebaseToken đã có chưa
      if (this.props.firebaseToken) {
        this.getCurrentToken();
      }
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
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
        console.log("Day la Token= " + currentToken);
        this.props.saveFirebaseToken(currentToken);
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // setTokenSentToServer(false);
      });
  };

  componentDidMount() {
    this.notifyMe();
    this.addNotify();
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
        {/* <NotificationSystem ref="notificationSystem" style={style} /> */}

        {/* thử nghiệm ref mới */}
        <NotificationSystem ref={this.setNotify} style={style} />
        <Sidebar
          {...this.props}
          routes={routes}
          // Nhận vào một mảng route
          image={this.state.image}
          hasImage={this.state.hasImage}
        />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect to="/admin/trip" />
          </Switch>
          {/* Cai phan nay danh co navBar, la cai bar o tren top */}
          {/* Switch đây là chỗ sẽ đưa ta đến page cần đến dựa vào cái path đc cung cấp */}
          <Footer />
          {/* <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleHasImage={this.handleHasImage}
            bgColor={this.state["color"]}
            bgImage={this.state["image"]}
            mini={this.state["mini"]}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    firebaseToken: state.user.firebaseToken,
  };
};
document.title=titleName
export default connect(mapStateToProps, { saveFirebaseToken })(Admin);
