import React, { Component } from "react";
import { Col, Form, Grid, Row } from "react-bootstrap";
import { CustomFormGroup } from "../components/ByMySelf/Form.js";
import { Card } from "../components/Card/Card.jsx";
import SeperateLine from "../components/formserparate/SeperateLine.js";
import { ShowPopUp } from "../components/Popup/Popup.js";
import { triptype } from "../variables/Variables.jsx";
import { Link } from "react-router-dom";
import { MyButton } from "../components/CustomButton/CustomButton.jsx";
import { connect } from "react-redux";
import { getRoute, login } from "../redux";
import * as actionTypes from "../store/actions";
import { AcessToken } from "../variables/Variables";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {
        startingLocation: "",
        destination: "",
        tripType: "One way",
        vehicleModel: "",
        carManufacturer: "",
        cityMpg: "",
        highwayMpg: "",
        tankSize: "",
        fuelType: "Ron95-IV",
        truck: {
          id: "",
          name: "",
          licensePlatesL: "",
          weight: "",
          driver: {
            id: "",
            name: "",
            phone: "",
          },
        },
      },
      username: "Samnk",
      password: "2511",
      full_name: "Nguyen Khac Sam",
      photo: "",
      gender: "male",
      password: "",
      address: "lê văn sĩ",
      city: "HCM",
      is_active: true,
      accounts: [],
      course: [],
      posts: [],
      myTitle: "",
      postResponse: "",
      checkboxChecked: false,
      tripTypeSelect: "One way",
      fuelTypeSelect: "Ron95-IV",
      driverSelect: false,
      driverList: [
        {
          driver: {
            id: "D1",
            name: "Srpint",
          },
        },
        {
          driver: {
            id: "D2",
            name: "Hayao",
          },
        },
        {
          driver: {
            id: "D3",
            name: "Ngo Ton",
          },
        },
      ],
      //state luu tru du lieu
      startingLocation: "",
      destination: "",
      tripType: "One way",
      vehicleModel: "",
      carManufacturer: "",
      cityMpg: "",
      highwayMpg: "",
      tankSize: "",
      fuelType: "Ron95-IV",
      driver: {
        id: "",
        name: "",
      },
      popupConten: {
        color: "green",
        message: "Nice",
      },
      visible: false,
      trucks: [
        {
          id: "1",
          name: "Isuzu – Isuzu Nhật Bản",
          licensePlatesL: "71-C405677",
          weight: "6",
          driver: {
            id: "1",
            name: "Trần Văn Cầu",
            phone: "08081508",
          },
        },
        {
          id: "2",
          name: "Suzuki – Suzuki Nhật Bản",
          licensePlatesL: "9898-K405657",
          weight: "6",
          driver: {
            id: "22",
            name: "Thông Tấn XXã",
            phone: "08081508",
          },
        },
        {
          id: "3",
          name: "JAC – Trung Quốc",
          licensePlatesL: "71-S4653911",
          weight: "12",
          driver: {
            id: "3",
            name: "Ông Bê LắpLắp",
            phone: "08081508",
          },
        },
        {
          id: "4",
          name: "JACFS – Hong Kong 1",
          licensePlatesL: "71-S46533",
          weight: "2.5",
          driver: {
            id: "3",
            name: "Hà Văn Ổn",
            phone: "08081508",
          },
        },
        {
          id: "5",
          name: "JAC2 – OSaka",
          licensePlatesL: "71-S24911",
          weight: "6",
          driver: {
            id: "3",
            name: "Lê Ô La",
            phone: "08081508",
          },
        },
        {
          id: "6",
          name: "JAC2 – Hong Kong 2",
          licensePlatesL: "71-S24911da",
          weight: "2.5",
          driver: {
            id: "3",
            name: "Sasuke",
            phone: "08081508",
          },
        },
        {
          id: "7",
          name: "Trump – Rokcet",
          licensePlatesL: "71-S24911",
          weight: "6",
          driver: {
            id: "3",
            name: "Lê Ô La",
            phone: "08081508",
          },
        },
      ], //đây sẽ là dạng mà api trả về
      truckValue: [], //Đây là dạng mà mình sẽ bỏ vào selectselect
    };
  }

  componentDidMount = () => {
    cookies.set(AcessToken, this.props.token, { path: "/" });
    console.log("đã set cookie")
    this.prepareValueForTruckSelect();
  };

  prepareValueForTruckSelect = () => {
    var values = {};
    const tmp = [...this.state.truckValue];
    // const tripTmp = { ...this.state.trip };
    this.state.trucks.map((obj) => {
      values = { id: obj.id, value: obj.name + " - " + obj.driver.name };
      tmp.push(values);
      console.log(values);
    });

    // Mặc định xe trọng tải 2.5 tấn là sẽ được hiện trong list select, fleet manager muốn thay đổi thì điền vào ô weight
    this.updateSelectTruckItem("2.5");
  };

  /**
   * Lựa xe dựa trên cân nặng hàng hóa, tiêu chí lựa chọn là dựa trên con số sau dấu
   */
  updateSelectTruckItem = (weight) => {
    let values = {};
    const truckValueTmp = [];
    const trucks = [];
    var tripTmp = { ...this.state.trip };
    this.state.trucks.map((obj) => {
      if (weight == obj.weight) {
        values = { id: obj.id, value: obj.name + " - " + obj.driver.name };
        trucks.push(obj);
        truckValueTmp.push(values);
      }

      //Nếu fleet manager xóa hết dữ liệu trong ô nhập thì những xe 2.5 tấn sẽ đc chon
      if (weight == "" || weight == null) {
        if (obj.weight == "2.5") {
          values = { id: obj.id, value: obj.name + " - " + obj.driver.name };
          trucks.push(obj);
          truckValueTmp.push(values);
        }
      }
    });

    tripTmp.truck = trucks[0]; //Mặc định xe đầu tiền trong danh sách hiển thị và tài xế của xe đó được chọn đầu tiên

    this.setState({
      truckValue: truckValueTmp,
      trip: tripTmp,
    });
  };

  getSelectOption = (event) => {
    this.setState({ myTitle: event.target.value });
    console.log("đây là title: " + this.state.myTitle);
  };

  handle = (event, fieldName, truckID) => {
    var tmp = { ...this.state.trip };
    switch (fieldName) {
      case "startingLocation":
        this.setState({
          trip: { ...tmp, startingLocation: event.target.value },
        });
        break;
      case "destination":
        this.setState({
          trip: { ...tmp, destination: event.target.value },
        });
        break;
      case "vehicleModel":
        this.setState({
          trip: { ...tmp, vehicleModel: event.target.value },
        });
        break;
      case "carManufacturer":
        this.setState({
          trip: { ...tmp, carManufacturer: event.target.value },
        });
        break;
      case "cityMpg":
        // ko còn dùng nữa
        this.setState({
          trip: { ...tmp, cityMpg: event.target.value },
        });
        break;
      case "highwayMpg":
        // ko còn dùng nữa
        this.setState({
          trip: { ...tmp, highwayMpg: event.target.value },
        });
        break;
      case "tankSize":
        // ko còn dùng nữa
        this.setState({
          trip: { ...tmp, tankSize: event.target.value },
        });
        break;
      case "tripType":
        this.setState({
          trip: { ...tmp, tripType: event.target.value },
        });
        break;
      case "fuelType":
        // Ko còn dùng nữa
        this.setState({
          trip: { ...tmp, fuelType: event.target.value },
        });
        break;
      case "Weight":
        //sau khi đa có weight thì tiến hành lựa xe dựa trên weight
        this.updateSelectTruckItem(event.target.value);
        break;
      case "truck":
        console.log("Da vao rui và đây là truckID= " + event.target.value);
        const selectId = event.target.value; //id lấy từ value của options trong select
        this.state.trucks.map((obj) => {
          //so sánh id người dùng chọn với id của mảng this.state.trucks
          if (selectId == obj.id) {
            tmp.truck = { ...obj };
            console.log(obj);
            this.setState({
              trip: { ...tmp, truck: { ...obj } },
            });
          }
        });

        break;
      case "driver":
        this.setState({
          trip: {
            ...tmp,
            driver: {
              name: event.target.value,
            },
          },
        });
        break;
    }
  };
  /**
   * Sự khác nhau khi đối số có { } và ko
   * Nếu ko có thì nó chỉ là đối số bt
   * Nếu có thì đối số nhận vào phải có field là event
   * Mấy cái hàm setState này ko thể tạo thành 1 hàm chung đc
   * Nó như get và set ấy, mà get và set thì mỗi class đều có riêngriêng
   * @param {*} event
   */
  checkBoxHandle = (event) => {
    this.setState({
      checkboxChecked: !this.state.checkboxChecked,
    });
  };
  submitForm = (event) => {
    // event.preventDefault();
    const tmp = { ...this.state.trip };
    tmp.truck.id = 1;
    // this.props.submitTheForm(tmp);
    this.props.getRoute(tmp);
  };
  /**
   * Dùng để test
   */
  clickCaiDitConMeMay = () => {
    console.log("Click đc rồi địt me");
    console.log(this.state.password);
  };
  /**
   * Mở popup lên
   */
  openModal = () => {
    this.setState({
      visible: true,
    });
  };
  /**
   * Đóng popup lại
   */
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const props = {
      fromLat: 41.85073,
      fromLng: -87.65126,
      toLat: 41.85258,
      toLng: -87.65141,
    };
    return (
      <div className="content">
        <ShowPopUp
          visible={this.state.visible}
          popupContent={this.state.popupConten}
          onCLose={this.closeModal}
        />
        <Form>
          <Grid fluid>
            <Row>
              <Col md={8}>
                <Card
                  title="Trip information"
                  content={
                    <div>
                      <Row>
                        <CustomFormGroup
                          xsNumber={5}
                          realValue={this.state.trip.startingLocation}
                          type="input"
                          change={(event) => {
                            this.handle(event, "startingLocation", "");
                          }}
                          labelText={"Starting Locatin"}
                          placeholderText={"starting location"}
                        />
                        <CustomFormGroup
                          xsNumber={5}
                          type="input"
                          realValue={this.state.trip.destination}
                          change={(event) => {
                            this.handle(event, "destination");
                          }}
                          labelText={"Destination"}
                          placeholderText={"destination"}
                        />
                      </Row>
                      <Row>
                        <CustomFormGroup
                          xsNumber={3}
                          type="select"
                          realValue={this.state.trip.tripType}
                          info={triptype}
                          labelText={"Trip Type"}
                          options={["One way", "Round Trip"]}
                          placeholderText={"trip type"}
                          currentValue={this.state.trip.tripType}
                          change={(event) => this.handle(event, "tripType")}
                        />
                      </Row>
                      <Row>
                        <SeperateLine text="Truck information" />
                      </Row>
                      <Row></Row>
                      <Row>
                        {/* <CustomFormGroup
                          realValue={this.state.trip.cityMpg}
                          xsNumber={3}
                          type="number"
                          change={(event) => {
                            this.handle(event, "cityMpg");
                          }}
                          labelText={"City (mpg)"}
                          placeholderText={""}
                        /> */}
                        {/* <CustomFormGroup
                          xsNumber={3}
                          realValue={this.state.trip.highwayMpg}
                          type="number"
                          change={(event) => {
                            this.handle(event, "highwayMpg");
                          }}
                          labelText={"highway (mpg)"}
                          placeholderText={""}
                        /> */}
                        {/* <CustomFormGroup
                          xsNumber={3}
                          realValue={this.state.trip.tankSize}
                          type="number"
                          change={(event) => {
                            this.handle(event, "tankSize");
                          }}
                          labelText={"Tank size"}
                          placeholderText={""}
                        /> */}
                        {/* <CustomFormGroup
                          xsNumber={3}
                          type="select"
                          realValue={this.state.trip.fuelType}
                          info={fueltype}
                          options={[
                            "Ron95-IV",
                            "Ron95-III",
                            "E5 Ron92-II",
                            "DO 0,001S-V",
                            "DO 0,05S-II",
                            "Dầu hỏa 2-K",
                          ]}
                          change={(event) => {
                            this.handle(event, "fuelType");
                          }}
                          labelText={"Fuel Type"}
                          placeholderText={""}
                        /> */}
                        <CustomFormGroup
                          xsNumber={3}
                          type="inputnovalidation"
                          helpblock="Mass: Ton"
                          change={(event) => {
                            this.handle(event, "Weight");
                          }}
                          labelText={"Weight"}
                          placeholderText={"2.5"}
                        />
                        <CustomFormGroup
                          xsNumber={7}
                          type="select"
                          info="truck"
                          realValue={this.state.trip.truck.id}
                          truckOptions={this.state.truckValue}
                          change={(event) => {
                            this.handle(event, "truck");
                          }}
                          labelText={"Truck"}
                          placeholderText={""}
                        />
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Link
                            // Đây là nơi ta sẽ navigate đến screen tương ứng, đường dẫn link sẽ được truyền tới Admin.jsxjsx
                            to={"/admin/routetrip"}
                          >
                            <MyButton
                              style="info"
                              fill
                              type="submit"
                              text="Find routes"
                              click={(event) => this.submitForm(event)}
                            />
                          </Link>
                        </Col>
                      </Row>
                      <div className="clearfix" />
                    </div>
                  }
                />
              </Col>
              {/* Hiện tại thì tài xế sẽ đi chung với xe tải luôn */}
              <Col
                md={2}
                style={{
                  background: "#fff",
                  border: "#333333",
                  display: "none",
                }}
              >
                {/* <Row>
                  <div style={{ marginTop: 15, marginLeft: 15 }}>
                    <h4>Driver</h4>
                  </div>
                  <div
                    style={{
                      marginLeft: 15,
                      marginRight: 15,
                      marginBottom: 15,
                    }}
                  >
                    {this.state.driverList.map((drv) => {
                      return (
                        <FormRadio
                          content={
                            <ItemRadio
                              cssClassName={
                                drv.driver.name == this.state.trip.driver.name
                                  ? "labelp_green"
                                  : "labelp"
                              }
                              label={drv.driver.name}
                              change={(event) => {
                                this.handle(event, "driver");
                              }}
                            />
                          }
                        />
                      );
                    })}
                  </div>
                </Row> */}

                {/* cos gif hot */}
              </Col>
            </Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fullprofile: state.userprofile,
    createtripss: state.trip,
    token: state.user.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitTheForm: (obj) =>
      dispatch({
        type: actionTypes.CREATETRIP,
        values: obj,
      }),
  };
};
// export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default connect(mapStateToProps, { getRoute, login })(UserProfile);
