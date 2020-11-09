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
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.js";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import { persistor, store } from "./redux/store.js";
let fontLink=document.createElement("link");
fontLink.rel="stylesheet"
fontLink.href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
let iconLink=document.createElement("link")
iconLink.rel="stylesheet"
iconLink.href="https://fonts.googleapis.com/icon?family=Material+Icons"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App /> 
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
document.getElementsByTagName("HEAD")[0].appendChild(fontLink);
document.getElementsByTagName("HEAD")[0].appendChild(iconLink);
// document.title="Cheapest trip cost"