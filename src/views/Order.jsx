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
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
// import React, { Component } from 'react'
// import Select from 'react-select'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";



// import { connect } from 'react-redux';
// import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
// import Button from "components/CustomButton/CustomButton.jsx";
// import { CustomFormGroup } from "components/ByMySelf/Form.js";
// import avatar from "../assets/img/faces/ricado.jpg";
// import { Top, NoteItem } from '../components/Order/CustomerInfo.jsx';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import lai from "../assets/img/download.jpg";
import note from "../assets/img/ho-phach.jpg";
import perfume1 from "../assets/img/nuoc-hoa.jpg";
import perfume2 from "../assets/img/nuoc-hoa-2.png";
import perfume3 from "../assets/img/nuoc-hoa-3.jpg";
// import SearchOrderBar from "components/Order/Autocomplete.js";
// import ClassesShorthand from "components/Order/custombutton.js";
import { DivCustomerInfo, OrderLine, Timeline, LineOnly, Leftdiv, Sillage, Longative, NoteItem, OrderList, PerfumeItem } from "../components/Order/CustomerInfo.jsx";
// import Slider from "react-slick";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // account={
      username: 'Samnk',
      password: '2511',
      full_name: 'Nguyen Khac Sam',
      photo: '',
      gender: 'male',
      password: '',
      address: 'lê văn sĩ',
      city: 'HCM',
      is_active: true,
      // },
      accounts: [],
      course: [],
      posts: [],
      myTitle: '',
      postResponse: ""
    }
  }

  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1

    };
    const settings2 = {
      // dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1

    };

    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="div-flex">
            <img id="colem" src={'https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400'} />
            <div className="div-flex-info">
              <DivCustomerInfo
                title={'Name'}
                info={'Nguyễn Khắc Sâm'}
              />
              <DivCustomerInfo
                title={'Email'}
                info={'samxxx@gmail.com'}
              />
              <DivCustomerInfo
                title={'Địa chỉ'}
                info={'44 đường 12 @kakalk'}
              />
              <DivCustomerInfo
                title={'Giới tính'}
                info={'Male'}
              />
            </div>
          </div>

          <div style={{ width: "100%", textAlign: "-webkit-right", paddingRight: 20 }}>
            <OrderList />

          </div>
        </div>
        <div className="div-order-info">
          <OrderLine value="#2412"
            title="Order ID"
          />
          <OrderLine value="03/12/2020"
            title="Order Date"
          />
          <div style={{ display: 'flex', flexDirection: "row" }}>
            <Timeline value="1:30" title="Time Start" />
            <Timeline value="2:30" title="Time End" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
            <LineOnly title="Customer Message" />
            <p style={{ marginLeft: 25, marginRight: 20, marginTop: 10 }}>
              Không nhớ vào một buổi sáng nào được bà ngoại cho ra đồng nhặt cỏ cùng với dì tôi nhưng đó là lần tôi ngạc nhiên quá đỗi. Bước chân ngắn của thằng bé là tôi cứ líu ríu níu váy bà để lên cho được con đê cao. Lần đầu tiên tôi đứng trên đê làng. Cả một cánh đồng bát ngát trải dài những lượn sóng xanh rập rờn đến những dãy núi xa vời. Những cánh cò đang lả cánh như những con diều trắng chấp chới bay về phía mặt trời. Phương Đông sáng hồng lên, những đám mây ngũ sắc cho tôi một ấn tượng thần tiên. Ôi, con đê làng! Một buổi bình minh. Vâng, một bình minh mãi mãi cho tôi nhớ về quê hương dù nay tôi đã ở chân trời góc bể.

          </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <LineOnly title="Expert Message" />
            <p style={{ marginLeft: 25, marginRight: 20, marginTop: 10 }}>
              Không nhớ vào một buổi sáng nào được bà ngoại cho ra đồng nhặt cỏ cùng với dì tôi nhưng đó là lần tôi ngạc nhiên quá đỗi. Bước chân ngắn của thằng bé là tôi cứ líu ríu níu váy bà để lên cho được con đê cao. Lần đầu tiên tôi đứng trên đê làng. Cả một cánh đồng bát ngát trải dài những lượn sóng xanh rập rờn đến những dãy núi xa vời. Những cánh cò đang lả cánh như những con diều trắng chấp chới bay về phía mặt trời. Phương Đông sáng hồng lên, những đám mây ngũ sắc cho tôi một ấn tượng thần tiên. Ôi, con đê làng! Một buổi bình minh. Vâng, một bình minh mãi mãi cho tôi nhớ về quê hương dù nay tôi đã ở chân trời góc bể.

          </p>
          </div>
        </div>

        {/* Phần perfume */}
        <div className="div-order-info" style={{ marginRight: 15, marginTop: 20, flexDirection: "row",display:"flex" }}>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <PerfumeItem value={'Jasmin'} src={perfume1} />
            <PerfumeItem value={'Inkia'} src={perfume2} />
            <PerfumeItem value={'SOdekua'} src={perfume3} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontWeight: "bold", marginLeft: 20, marginTop: 20, marginBottom: 0, fontSize: 24, color: "#083CF3" }}>Deaiid Depaer Agrahhsm</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Leftdiv />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Sillage />
                <Longative />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexFlow: "row wrap" }}>
              <NoteItem value={'Jasmin'} src={note} />
              <NoteItem value={'Hương thơm lài'} src={lai} />
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Order;
