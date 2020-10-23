import React, { Component } from "react";
import { Col, Form, Grid, Row, FormGroup, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MapTest } from "./Testing_HOC.jsx";
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
import route_icon from "../assets/img/route_icon.png";
import sortingsorting from "../assets/img/icon_ascending_sorting.png";
import SeperateLine from "../components/formserparate/SeperateLine.js";
import {
  MapWithADirectionsRenderer,
  Maps,
  MapWithADirectionsRendererSSS,
} from "../views/Maps.jsx";
// import { PrepareData, GetMap } from "../views/Testing_HOC";
import * as actionTypes from "../store/actions";
import { fueltype, triptype } from "../variables/Variables.jsx";
import { AxiosMethod } from "../axios.js";
import {
  CustomTable,
  TableHeader,
  TableHeaderItem,
  TableBodyItem,
} from "../components/CustomTable/CustomeTable.js";
class RouteTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
      headerItemsss: [
        {
          src: sortingsorting,
          name: "No.",
        },
        {
          src: route_icon,
          name: "Sumary",
        },
        // {
        //   src: trip,
        //   name: "Estimate Cost",
        // },
        // {
        //   src: time,
        //   name: "Estimate Time",
        // },
      ],
      bodyValue: [],
      location: {
        from: {
          fromLat: 0,
          fromLng: 0,
        },
        to: {
          toLat: 0,
          toLng: 0,
        },
      },
      // from: { fromLat: 41.85073, fromLng: -87.65126 },
      // to: { toLat: 41.85258, toLng: -87.65141 },
    };
  }

  componentDidMount = () => {
    //Lấy dữ liệu đường đi về
    const tripInfo = this.props.createtripss.trip;
    this.getRoute(
      tripInfo.startingLocation,
      tripInfo.destination,
      tripInfo.truck.id
    );
  };

  chooseRoute = (id) => {
    this.state.bodyValue.map((obj) => {
      if (obj.order == id) {
        this.setState({
          selectedId: id,
        });
      }
    });
  };

  getRoute = (start, end, truckID) => {
    const data = new AxiosMethod();
    const tmp = [...this.state.bodyValue];
    // const tmpLocation = {};
    var orderNumber = 0;
    const params = {
      url: "Trip/GetRoute",
      type: "get",
      parameter: {
        from: start,
        to: end,
        truckid: truckID,
        weight: 1.1,
      },
      token: this.props.token,
    };

    data.metdasdhod(params).then((result) => {
      console.log(result.data);
      result.data.map((obj) => {
        orderNumber++;
        const sumary = obj.route.summary;
        tmp.push({ order: orderNumber, summary: sumary });
      });

      const legs = result.data[0].route.legs;
      //Bản đồ hiển thị mặc định phần tử đầu tiên trong legs
      const firstChild = legs[0]; //Để đảm bảo legs luôn có 1 phần tử, trong waypoint nhớ sử dụng via=
      console.log(firstChild);

      console.log(firstChild.startLocation.latitude);

      const tmpLocation = {
        from: {
          fromLat: firstChild.startLocation.latitude,
          fromLng: firstChild.startLocation.longitude,
        },
        to: {
          toLat: firstChild.endLocation.latitude,
          toLng: firstChild.endLocation.longitude,
        },
      };
      // tmpLocation.from.fromLat = firstChild.startLocation.latitude;
      // tmpLocation.from.fromLng = firstChild.startLocation.longitude;
      // tmpLocation.to.toLat = firstChild.endLocation.latitude;
      // tmpLocation.to.toLng = firstChild.endLocation.longitude;

      this.setState({
        bodyValue: [...tmp], //dữ liệu để hiển thị cho user
        location: { ...tmpLocation }, // toa độ điểm đi và đến
      });
    });
  };
  render() {
    // Ta có thể viết detructing như ở dưới
    const {
      startingLocation,
      destination,
      driverName = this.props.createtripss.trip.truck.driver.name,
      truckName = this.props.createtripss.trip.truck.name,
      truckWWeight = this.props.createtripss.trip.truck.weight,
    } = this.props.createtripss.trip;

    var width = "";

    //2 biến dưới dùng cho xác định chiều dài dữ liệu
    const width_50px = "50px";
    const width_300px = "300px";
    let mapLocation = {
      fromLat: 0,
      fromLng: 0,
      toLat: 0,
      toLng: 0,
    };
    if (this.state.location.from.fromLat != 0) {
      const { fromLat, fromLng } = { ...this.state.location.from };
      const { toLat, toLng } = { ...this.state.location.to };
      mapLocation = {
        fromLat: fromLat,
        fromLng: fromLng,
        toLat: toLat,
        toLng: toLng,
      };
    }
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
                      {this.state.headerItemsss.map((obj, index) => {
                        if (index == 0) {
                          width = width_50px;
                        } else if (index == 1) {
                          width = width_300px;
                        }
                        return (
                          <TableHeaderItem
                            width={width}
                            img={obj.src}
                            text={obj.name}
                            number={1}
                          />
                        );
                      })}
                    </div>
                    {this.state.bodyValue.map((obj, index) => {
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
                            {/* Ta bỏ trực tiếp width vào vì cách map của mảng này duyệt khác với cái header */}

                            <TableHeaderItem
                              width={width_50px}
                              img={trip}
                              show={false}
                              text={obj.order}
                              number={0}
                            />
                            <TableHeaderItem
                              width={width_300px}
                              img={trip}
                              show={false}
                              text={obj.summary}
                              number={0}
                            />
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
                  <div style={{ height: 500 - 10 }}>
                    <TableHeaderItem
                      img={fromm}
                      text={startingLocation}
                      number={2}
                      width={"auto"}
                    />
                    <TableHeaderItem
                      img={to}
                      text={destination}
                      number={2}
                      width={"auto"}
                    />
                    <SeperateLine changeMargin={true} number={0} text="Truck" />
                    <TableHeaderItem
                      img={truck}
                      text={truckName}
                      number={2}
                      width={"max-content"}
                    />
                    <TableHeaderItem
                      img={weight}
                      text={truckWWeight + " tấn"}
                      number={2}
                    />

                    <SeperateLine
                      changeMargin={true}
                      number={0}
                      text="Driver"
                    />
                    <TableHeaderItem
                      img={driver}
                      text={driverName}
                      number={2}
                    />
                    <TableHeaderItem img={phone} text={"08081508"} number={2} />
                    <div
                      style={{
                        marginLeft: 15,
                        marginBottom: 10,
                        marginTop: 5,
                      }}
                    />
                    <MyButton
                      style="info"
                      fill
                      // type="Choose a route"
                      // routes={routes}
                      text="Choose a routes"
                      click={this.getRoute}
                    />
                  </div>
                }
              />
            </Col>
            <Col md={7}>
              <Card
                title="Route details"
                content={
                  <div style={{ height: 500 - 10 }}>
                    <div
                      style={{
                        // height: 200,
                        border: "1px solid black",
                        // marginTop: 30,
                      }}
                    >
                      {/* <Maps /> */}
                      <MapWithADirectionsRenderer
                        // fromLat={41.85073}
                        // fromLng={-87.65126}
                        // toLat={41.85258}
                        // toLng={-87.65141}
                        {...mapLocation}
                      />
                      {/* <GetMap
                        fromLat={41.85073}
                        fromLng={-87.65126}
                        toLat={41.85258}
                        toLng={-87.65141}
                      /> */}
                      {/* <MapTest fromLat={} toLat={}/> */}
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

//Có tác dụng select ra những state cần xử lí
/**
 * state này là của redux, và chữ fn đóng vai trò là 1 props
 * fn có giá trị là state.full_name của redux
 * @param {} state
 */
const mapStateToProps = (state) => {
  return {
    fullprofile: state.userprofile,
    createtripss: state.trip,
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(RouteTrip);
