import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
// import React, { Component } from 'react'
// import 'components/Order/CustomerInfo.css'
import '../../components/Schedule/Schedule.css'
import '../../components/Schedule/table.css'
// import styled from "styled-components";
// import male from "assets/img/icons8-male-48.png";
// import female from "assets/img/icons8-female-48.png";
// import sillage from "assets/img/icons8-spa-flower-48.png";
// import longative from "assets/img/icons8-time-48.png";
// import lai from "assets/img/download.jpg";
// import perfume from "assets/img/nuoc-hoa.jpg";
// import note from "assets/img/ho-phach.jpg";
// import { blue } from "@material-ui/core/colors";
// import Autocomplete from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { createMuiTheme } from '@material-ui/core';

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";



export const AddAppoinment = (argument) => {
    return (
        <div className="addLayout" style={{ height: 100, background: "lightgrey", padding: 20 }}>
            <div style={{ alignSelf: "flex-end" }}>
                <p style={{ fontFamily: "Ribeye", color: "#AC8215", fontSize: 24 }}>The Note Scent Lab</p>
            </div>

            <div className="seleconheader" style={{ marginLeft: 20 }}>
                <p className="textontop">Order ID</p>
                <div>
                    <select id="ORDERID" style={{ border: 0, height: 35 }}>
                        <option value="#ID4s">#ID4s</option>
                        <option value="#ID5s">#ID5s</option>
                        <option value="#ID4fss">#ID4fss</option>
                    </select>
                </div>
            </div>
            <div className="seleconheader" style={{ marginLeft: 20 }}>
                <p className="textontop">Customer Name</p>
                <div >
                    <select id="ORDERCUSTOMER" style={{ border: 0, height: 35, width: 200 }}>
                        <option value="Nguyễn Khắc Sâm">#ID4s</option>
                        <option value="OOke Bêdde">#ID5s</option>
                        <option value="Lên nóc nhà múa con gà">#ID4fss</option>
                    </select>
                </div>
            </div>
            <div className="seleconheader" style={{ marginLeft: 20 }}>
                <p className="textontop">Time start</p>
                <div>
                    <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        customInput={<input style={{ height: 35, border: 0 }} />}
                        d={argument.selecte}
                        onChange={argument.change}
                    />
                </div>
            </div>

        </div>

    );


}

/**
      * Hàm cho ta biế ngày lịch cụ thể
      */
export const ViewAppoinment = (argument) => {
    const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const slots = ["Slot 1", "Slot 2", "Slot 3", "Slot 4", "Slot 5", "Slot 6", "Slot 7", "Slot 8"];
    var date = new Date();
    var list = new Array();
    var listOfWeek = new Array();
    var listOfDate = new Array();




    return (
        // <table>
        <table style={{ width: "auto" }}>
            <thead style={{ background: "coral" }}>
                <tr>
                    <th rowSpan="2" width="15%">
                        <div style={{ width: "fill-content", height: "fill-content", display: "flex", flexDirection: "column" }}>
                            <div className="year-pickup">
                                <p>Year</p>
                                <select className="year-pickup-item-inside" value={argument.yearValue} onChange={argument.yearchangehandler}>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                </select>
                            </div>
                            <div className="year-pickup">
                                <p>Week</p>
                                <select className="year-pickup-item-inside">
                                    <option>{
                                        date.getDate() + "/" + date.getMonth()

                                    }</option>
                                    <option>{date.toDateString()}</option>
                                    <option>12/08 to 30/08</option>
                                </select>
                            </div>
                        </div>
                    </th>
                    {
                        day.map(date => {
                            return <td style={{ fontWeight: "bold" }}>{date}</td>
                        })
                    }
                </tr>
                <tr>
                    <td>what</td>
                    <td>what</td>
                    <td>what</td>
                    <td>what</td>
                    <td>what</td>
                    <td>what</td>
                    <td>what</td>
                </tr>
            </thead>
            <tbody>
                {
                    slots.map(slot => {
                        return (
                            <tr style={{ height: 100 }}>
                                <td style={{ fontWeight: "bold" }}>{slot}</td>
                                <td>dsf</td>
                                <td>f</td>
                                <td>fsdf</td>
                                <td>fsd</td>
                                <td>fsd</td>
                                <td>fsd</td>
                                <td>fsd</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );

}