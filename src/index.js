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
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import store from "./redux/store.js";

// const store = createStore(rootReducer, composeWithDevTools());
// class Index extends React.Component {}

ReactDOM.render(
  <Provider store={store}>
    {/* Đây là nơi mà sẽ render ra giao diện tùy ứng theo đường dẫndẫn */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , //{" "}
  </Provider>,
  document.getElementById("root")
);

