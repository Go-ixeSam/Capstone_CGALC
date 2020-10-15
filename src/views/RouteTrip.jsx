import React, { Component } from "react";
import { Col, Form, Grid, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CustomFormGroup } from "../components/ByMySelf/Form.js";
import { Card } from "../components/Card/Card.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";
import {
  FormRadio,
  ItemRadio,
} from "../components/CustomRadio/CustomRadio.jsx";
import { MyButton } from "../components/CustomButton/CustomButton.jsx";
import time from "../assets/img/time.png";
import trip from "../assets/img/icon_estimate.png";
import fromm from "../assets/img/icon_from_55.png";
import to from "../assets/img/icon_to_55.png";
import driver from "../assets/img/driver-icon.png";
import phone from "../assets/img/icon_phone.png";
import truck from "../assets/img/truck.png";
import weight from "../assets/img/weight.png";
// import phone from "../assets/img/icon_phone.png";
import sortingsorting from "../assets/img/icon_ascending_sorting.png";
import SeperateLine from "../components/formserparate/SeperateLine.js";
import * as actionTypes from "../store/actions";
import { fueltype, triptype } from "../variables/Variables.jsx";
import {
  CustomTable,
  TableHeader,
  TableHeaderItem,
  TableBodyItem,
} from "../components/CustomTable/CustomeTable.js";
/////
class RouteTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
      headerItemsss: [
        {
          src: sortingsorting,
          name: "Order",
        },
        {
          src: trip,
          name: "Estimate Cost",
        },
        {
          src: time,
          name: "Estimate Time",
        },
        // {
        //   src: time,
        //   name: "",
        // },
        // {
        //   src: time,
        //   name: "Estimate Time",
        // },
        // {
        //   src: time,
        //   name: "Estimate Time",
        // },
        // {
        //   src: time,
        //   name: "Estimate Time",
        // },
      ],
      bodyValue: [
        {
          order: 1,
          estimateCost: "2.000.000",
          estimateTime: "56",
        },
        {
          order: 2,
          estimateCost: "33.000.000",
          estimateTime: "23",
        },
      ],
    };
  }

  chooseRoute = (id) => {
    this.state.bodyValue.map((obj) => {
      if (obj.order == id) {
        this.setState({
          selectedId: id,
        });
      }
    });
  };
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              {/* <div style={{ background: "white", padding: 10, height: 300 }}> */}
              <Card
                title="Recommend Routes"
                content={
                  <div>
                    <div className="headerTable">
                      {this.state.headerItemsss.map((obj) => {
                        return (
                          <TableHeaderItem
                            img={obj.src}
                            text={obj.name}
                            number={1}
                          />
                        );
                      })}
                    </div>
                    {this.state.bodyValue.map((obj) => {
                      return (
                        <div>
                          <div
                            // className="bodyTable"
                            className={
                              obj.order == this.state.selectedId
                                ? "bodyTableDeeper"
                                : "bodyTable"
                            }
                            onClick={(e) => this.chooseRoute(obj.order)}
                          >
                            <TableBodyItem value={obj.order} />
                            <TableBodyItem value={obj.estimateCost} />
                            <TableBodyItem value={obj.estimateTime} />
                            {/* <div className="displayFlexRow" style={{ width: "auto" }}> */}
                            {/* <DecideButton text="Choose" select={true} /> */}
                            {/* <div style={{ visibility: "hidden" }}>A</div> */}
                            {/* <DecideButton text="Remove" select={false} /> */}
                            {/* </div> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                }
              />
              {/* </div> */}

              {/* <Card title="Route list" content={<div>Route list</div>} /> */}
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Card
                title="Address"
                content={

                  // Ta trừ đi 10 đơn vị vì template mặc định card content sẽ paddingBottom là 10px, 
                  // ta làm vậy để đảm bảo toàn vẹn giao diện
                  <div style={{ height: 500-10 }}>
                    <TableHeaderItem
                      img={fromm}
                      text={"44 duong so 9 c/x dai ra da PHu Lam, p13, QUan 6"}
                      number={2}
                    />
                    <TableHeaderItem
                      img={to}
                      text={"44 duong 12, ok"}
                      number={2}
                    />
                    <SeperateLine
                      changeMargin={true}
                      number={0}
                      text="Truck"
                    />
                    <TableHeaderItem img={truck} text={"Xe tải Nhật"} number={2} />
                    <TableHeaderItem img={weight} text={"5 tấn"} number={2} />

                    <SeperateLine
                      changeMargin={true}
                      number={0}
                      text="Driver"
                    />
                    <TableHeaderItem
                      img={driver}
                      text={"Cục xì ngầu"}
                      number={2}
                    />
                    <TableHeaderItem img={phone} text={"08081508"} number={2} />
                    <SeperateLine
                      hidden={true}
                      changeMargin={true}
                      number={0}
                      text="Driver"
                    />
                    <MyButton
                      style="info"
                      fill
                      // type="Choose a route"
                      // routes={routes}
                      text="Choose a routes"
                    />
                    <div style={{height:200, border:"1px solid black",marginTop:30}}>
                        Phan cua map
                    </div>
                  </div>
                }
              />
            </Col>
            <Col md={7}>
              <Card
              title="Route details"
                content={
                  <div style={{ height: 500-10 }}>
                    {/* Ý tưởng là ta sẽ tạo 1 một mảng chứachứa các hướng dẫn rồi show, nó sẽ tự động format cho tata */}
                    {/* (1) hướng dẫn đàu tiên */}
                    Rẽ <b>trái</b> tại Cửa Hàng Đtdđ Minh Long vào{" "}
                    <b>Hẻm 842 Nguyễn Kiệm</b>/<wbr />
                    <b>Số 21</b>
                    <div style={{ fontSize: 12 }}>Điểm đến sẽ ở bên phải</div>
                    {/* (2) hướng dẫn thứ 2 */}
                    Đi về hướng <b>Tây Bắc</b> lên <b>Đường Nguyễn Văn Nghi</b>{" "}
                    về phía <b>Lý Thường Kiệt</b>
                    <div style={{ fontSize: 12 }}>
                      Đi qua Cửa Hàng Nữ Trang Minh Phát (ở phía bên phải)
                    </div>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default RouteTrip;
