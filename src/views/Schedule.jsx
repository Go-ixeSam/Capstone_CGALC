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
import * as actionTypes from '../store/actions';
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



import { connect } from 'react-redux';
// import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
// import Button from "components/CustomButton/CustomButton.jsx";
// import { CustomFormGroup } from "components/ByMySelf/Form.js";
// import avatar from "../assets/img/default-avatar.png";
import { AddAppoinment, ViewAppoinment } from "../components/Schedule/Schedule.jsx";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Samnk',
      password: '2511',
      full_name: 'Nguyen Khac Sam',
      photo: '',
      gender: 'male',
      password: '',
      address: 'lê văn sĩ',
      city: 'HCM',
      is_active: true,
      accounts: [],
      course: [],
      posts: [],
      myTitle: '',
      postResponse: "",
      startDate: new Date(),
      yearValue: "2020",
      listOfDate: new Array(),
      listOfWeek: new Array()
    }

  }


  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  yearHanderChange = year => {
    this.setState(
      {
        yearValue: year.target.value
      }
    )
  }



  /**
   * Kiểm tra năm nhuận
   * @param {} year 
   */
  isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
  }

  /**
  * 
  * @param {*} date: ngày  
  * @param {*} days :số lượng ngày cần tính
  */
  addDate = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  /**
  * tạo ra 1 list chứa ngày trong tuần, và chứa tuần trong năm
  * @param {*} numberOfDays 
  * @param {*} selectedYear 
  */
  getListDateInWeek = (numberOfDays, selectedYear) => {
    var dates = new Array();//list chưa ngày trong tuần
    var weeks = new Array();//list chứa tuần trong năm
    console.log(new Date().toString());
    var newDate = new Date(selectedYear, 1, 1);//ngày đầu tiên trong năm
    var currentYear = newDate.getYear();//năm hiện tại
    var count = 0;//đếm số lương ngày trong tuần
    console.log("selected year= " + selectedYear)

    for (var i = 0; i < numberOfDays; i++) {
      count++;
      // dates.push(newDate.getDate()+"/"+newDate.getMonth());
      dates.push(newDate.toDateString());
      newDate = this.addDate(newDate, 1);

      //cứ mỗi lần count = 7 sẽ đưa cái list nhỏ vào cái list mới và reset lại count và list nhỏ
      if (count == 7) {
        weeks.push(dates);
        this.setState(
          this.state.listOfWeek.concat(dates)
        )
        dates = new Array()
        count = 0;
      }
      if (newDate.getYear() !== currentYear) {
        break;
      }
    }
    console.log("độ dài của tuần= " + weeks.length)
    // listOfWeek = weeks;
    // listOfDate = dates;
    const newWeek=[...weeks];
    // this.setState({
    //   listOfWeek: newWeek,
    //   listOfDate: dates
    // })
    this.state.listOfWeek.map(dates => {
      dates.map(date => {
        console.log("Ngày= " + date);
      })
    })

    

  }
  /**
   * 
   */
  createDateSelection = () => {
    // if (this.isLeapYear(argument.yearValue)) {
    if (this.isLeapYear(this.state.yearValue)) {
      console.log("Năm nhuận")
      // getListDateInWeek(366, argument.yearValue)
      this.getListDateInWeek(366, this.state.yearValue)
      console.log("Độ dài của list of week: " + this.state.listOfWeek);
    console.log("Độ dài của list of week: " + this.state.listOfDate.length);
    } else {
      console.log("Năm ngược với năm nhuận")
      // getListDateInWeek(365, argument.yearValue)
      this.getListDateInWeek(365, this.state.yearValue)
    }
  }

  /**
   * Những dữ liệu load khi web mới đc bật lên thì bỏ hết vào đay
   * Vì cái hàm này nó chỉ chạy 1 lân trong cả vòng đời thôi
   */
componentDidMount(){
  this.createDateSelection();
}
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AddAppoinment
          selecte={this.state.startDate}
          change={this.handleChange} />
        <ViewAppoinment
          yearValue={this.state.yearValue}
          yearchangehandler={this.yearHanderChange}
        />
      </div>

    );
  }
}

//Có tác dụng select ra những state cần xử lí
/**
 * state này là của redux, và chữ fn đóng vai trò là 1 props
 * fn có giá trị là state.full_name của redux
 * @param {} state 
 */
const mapStateToProps = state => {


  return {
    fullprofile: state.userprofile,
    up: state.userprofile
  }
};

//gọi những function tương ứng để xử lí state đưa đến
const mapDispatchToProps = dispatch => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
