import React, { Component } from "react";
import { Col, Form, Grid, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { FormInput, useFormResult } from "../components/ByMySelf/Form.js";
import Validation from "../components/ByMySelf/InputValidation";
import { Card, CardNoFooter } from "../components/Card/Card.jsx";
import { MyButton } from "../components/CustomButton/CustomButton";
import CustomMaterialTable from "../components/CustomTable/CustomeMaterialTable";
import { ShowPopUp } from "../components/Popup/Popup.js";
import VerticalTabs from '../components/CustomTable/CustomTableDetail'
import {
  addTrip,
  addTripTableHeader,
  getRoute,
  login,
  modifyContract,
  ModifyContractFomr,
} from "../redux";
import ContractType from "../redux/contract/contractType.js";
import * as variable from "../variables/Variables";
import {
  AcessToken,
  id,
  positiveNumber,
  required,
  success,
} from "../variables/Variables";

const cookies = new Cookies();

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripTableButton: {
        style: {
          height: variable.buttonHeight,
          borderRadius: variable.borderRadius,
          padding: variable.buttonPadding,
          marginRight: 5,
        },
        buttons: [
          {
            config: {
              bsStyle: "info",
              text: variable.arrangeGoods,
            },
          },
          {
            config: {
              bsStyle: "info",
              text: variable.addContract,
            },
          },
          // {
          //   config: {
          //     bsStyle: "danger",
          //     text: variable.deleteButton,
          //   },
          // },
        ],
      },
      contractFormButton: {
        style: {
          height: variable.buttonHeight,
          borderRadius: variable.borderRadius,
          padding: variable.buttonPadding,
          marginRight: 5,
        },
        buttons: [
          {
            config: {
              bsStyle: "info",
              text: variable.updateButton,
            },
          },
          {
            config: {
              bsStyle: "danger",
              text: variable.deleteButton,
            },
          },
        ],
      },
      // contractFilterRequire: [variable.searchFilter, variable.timeFilter],
      contractFilterRequire: [],
      tripFilterRequire: [variable.searchFilter, variable.timeFilter],
      tableHeader: [
        {
          id: variable.id,
          value: "ID",
        },
        {
          id: variable.destination,
          value: "Destination",
        },
        {
          id: variable.status,
          value: "Status",
        },
      ],
      contractTableHeader: [
        {
          id: variable.id,
          value: "ID",
        },
      ],
      contractForm: [],
      contracts: {},
      tripType: {
        colNumber: 6,
        elementType: "select",
        elementConfig: {
          labeltext: "Trip Type",
          options: [
            { id: "oneway", value: "oneway", displayValue: "One way" },
            { id: "roundtrip", value: "roundtrip", displayValue: "Round trip" },
          ],
          value: "oneway",
        },
        valid: {},
      },
      contractTable: {
        tableHeader: [
          {
            id: variable.id,
            value: "ID",
          },
          {
            id: variable.time,
            value: "Date created",
          },
        ],
        tableBody: {
          detail: "none",
          record: [
            {
              [variable.id]: 1,
              [variable.startingLocation]: "Ahah",
              [variable.destination]: "22 phuowfng 6",
              [variable.ward]: "phường 55",
              [variable.district]: "quận 12",
              [variable.cargoVolume]: 8.5,
              [variable.check]: false,
              [variable.time]: new Date().toString(),
            },
            {
              [variable.id]: 2,
              [variable.startingLocation]: "Ahah",
              [variable.destination]: "5 duong ngon lanh",
              [variable.ward]: "phường 34",
              [variable.district]: "quận 5",
              [variable.cargoVolume]: 12.5,
              [variable.check]: false,
              [variable.time]: new Date().toString(),
            },
            {
              [variable.id]: 3,
              [variable.startingLocation]: "Ahah",
              [variable.destination]: "44 duong so 2",
              [variable.ward]: "phường 55",
              [variable.district]: "quận 7",
              [variable.cargoVolume]: 7.5,
              [variable.check]: false,
              [variable.time]: new Date().toString(),
            },
            {
              [variable.id]: 4,
              [variable.startingLocation]: "Hang tre",
              [variable.destination]: "12353",
              [variable.ward]: "phường 55 56",
              [variable.district]: "quận Cu chi",
              [variable.cargoVolume]: 20,
              [variable.check]: false,
              [variable.time]: new Date().toString(),
            },
            {
              [variable.id]: 5,
              [variable.startingLocation]: "Ahahfsdfa",
              [variable.destination]: "Kinh duong vuong",
              [variable.ward]: "phường 525",
              [variable.district]: "quận 47",
              [variable.cargoVolume]: 7.5,
              [variable.check]: false,
              [variable.time]: new Date().toString(),
            },
            {
              [variable.id]: 6,
              [variable.startingLocation]: "Luom oiw",
              [variable.destination]: "Ha Noi",
              [variable.ward]: "phường 345",
              [variable.district]: "quận 3",
              [variable.cargoVolume]: 7.5,
              [variable.check]: false,
              [variable.time]: new Date().toString(),
            },
          ],
        },
      },
      tripTable: {
        tableHeader: [],
        tableBody: {
          record: [],
        },
      },

      formIsValid: false,
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
    this.setState({
      contractForm: [...this.props.contractForm],
      // contracts:{...this.props.contract}
    });
  };

  prepareValueForTripTable = () => {
    let tmp = { ...this.state.tripTable };
    let records = [...this.props.tripRecord];
    tmp.tableHeader = [];
    this.props.tripRecord.map((item) => {
      records.push({ ...item, checked: false });
      for (let name in item) {
        tmp.tableHeader.push({
          id: name,
          label: name,
        });
      }
    });
    tmp.tableBody.record = records;
    console.log(tmp);
    this.setState({
      tripTable: { ...tmp },
    });
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
    var tripTmp = { ...this.props.contractForm };
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

  handleInput = (event) => {
    let result = {};
    let formIsValid = true;
    let validation = new Validation();
    // var tmp = [...this.state.contractForm];
    var tmp = [...this.props.contractForm];
    const { name, value } = event.target;
    console.log(value);
    tmp.map((rows) => {
      rows.row.cols.map((col) => {
        //lấy từng column ra
        if (col.elementConfig.name == name) {
          result = validation.getValidationState(value, col.validation);

          //gán lại giá trị
          col.elementConfig.value = value;
          console.log("result", result);
          col.valid = { ...result };
        }
      });
    });

    tmp.map((rows) => {
      rows.row.cols.map((col) => {
        formIsValid = col.valid.type == success && formIsValid;
      });
    });

    console.log(tmp);
    this.setState({
      // contractForm: [...tmp],
      formIsValid: formIsValid,
    });
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
    event.preventDefault();
    /**
     * *Nếu như formIsValid == true thì tiến hành add trip
     */
    if (this.state.formIsValid == true) {
      this.addNewTrip();
    }
  };

  addNewTrip() {
    let trip = {};
    this.props.contractForm.map((rows) => {
      rows.row.cols.map((col) => {
        let name = col.elementConfig.name;
        trip = { ...trip, [name]: col.elementConfig.value };
      });
    });

    /**
     * ! tạm thời thì id sẽ tạo bằng cách này để test
     */
    trip = {
      ...trip,
      id: this.props.tripRecord.record.length + 1,
      status: "ready",
    };
    this.props.addTrip(trip);
    console.log("trip data= ", this.props.tripRecord);
  }

  /**
   * * Add theem contract
   * @param {*} event
   */
  addContract(event) {
    event.preventDefault();
    let contract = {};
    // this.state.contractForm.map((rows) => {
    this.props.contract.map((rows) => {
      rows.row.cols.map((col) => {
        let name = col.elementConfig.name;
        contract = { ...contract, [name]: col.elementConfig.value };
      });
    });
    console.log("contracs= ", this.props.contract.record.length);
    contract = {
      [variable.id]: this.props.contract.record.length + 1,
      ...contract,
      [variable.check]: false,
      [variable.time]: new Date().toString(),
    };
    this.props.modifyContract(contract, ContractType.ADD_CONTRACT);
  }

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
    const array = [];
    const popUpHeight = 350;
    console.log("contact=", this.state.contracts);
    console.log("hi hi", this.props.contract);
    let col = <Col></Col>;
    return (
      <div className="content">
        <ShowPopUp
          visible={this.state.visible}
          popupContent={this.state.popupConten}
          onCLose={this.closeModal}
          length="80%"
        >
          <Grid fluid style={{ margin: 0, padding: 0 }}>
            <CardNoFooter
              title="Contract form"
              content={
                <Row>
                  <Col xs={7} style={{ height: popUpHeight }}>
                    <Form onSubmit={(event) => [this.addContract(event)]}>
                      {this.props.contractForm.map((obj, index) => {
                        let columnss = obj.row.cols;
                        return (
                          <Row key={"row-" + index}>
                            {columnss.map((col, index) => {
                              col = (
                                <Col xs={col.colNumber} key={"col-" + index}>
                                  <FormInput
                                    {...col}
                                    id={col.name}
                                    valid={col.valid}
                                    change={(event) => {
                                      this.handleInput(event);
                                    }}
                                  />
                                </Col>
                              );
                              return col;
                            })}
                          </Row>
                        );
                      })}
                      <Row>
                        <Col xs={6}>
                          <div style={{ display: "flex" }}>
                            <MyButton
                              bsStyle="info"
                              result={!this.state.formIsValid}
                              type="submit"
                              text="Add"
                            />

                            <div style={{ marginLeft: 15 }}>
                              <MyButton
                                bsStyle="danger"
                                text="Close box"
                                onClick={this.closeModal}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                  <Col xs={5} style={{ height: popUpHeight }}>
                    <CustomMaterialTable
                      actionDisable={[variable.showDetail]}
                      buttons={this.state.contractFormButton}
                      {...this.state.contractTableHeader}
                      filterList={this.state.contractFilterRequire}
                      tableHeader={this.state.contractTable.tableHeader}
                      tableBody={this.props.contract}
                      // tableBody={this.state.contractTable.tableBody}
                      detail={this.state.contractTable.tableBody.detail}
                      addTrip={this.openModal}
                    />
                  </Col>
                </Row>
              }
            />
          </Grid>
        </ShowPopUp>
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Trip information"
                content={
                  <div>
                    <Row>
                      <Col md={12}>
                        <CustomMaterialTable
                          {...this.state.tripTable}
                          actionDisable={[
                            variable.showDetail,
                            variable.showSelect,
                          ]}
                          buttons={this.state.tripTableButton}
                          filterList={this.state.tripFilterRequire}
                          tableHeader={this.state.tableHeader}
                          tableBody={this.props.tripRecord}
                          addTrip={this.openModal}
                        />
                      </Col>

                    </Row>
                    {/* <Row>
                      <Col xs={12}>
                        <Button bsStyle="primary" onClick={this.openModal}>
                          Open modal
                        </Button>
                      </Col>
                    </Row> */}
                    {/* <Row>
                        <Col xs={this.state.cargoVolume.colNumber}>
                          <FormInput
                            {...this.state.cargoVolume}
                            id={"cargoVolume"}
                            valid={this.state.cargoVolume.valid}
                            change={(event) => {
                              this.handle(event, "cargoVolume", "cargoVolume");
                            }}
                          />
                        </Col>
                      </Row> */}

                    {/* Loại chuyến */}
                    {/* <Row>
                        <Col xs={this.state.tripType.colNumber}>
                          <CustomFormGroup
                            {...this.state.tripType}
                            value={this.state.tripType.value}
                            valid={this.state.tripType.valid}
                            change={(event) => {
                              this.handle(event, "tripType", "tripType");
                            }}
                          />
                        </Col>
                      </Row> */}
                    {/* <Row>
                        <Col xs={12}>
                          <MyButton
                            bsStyle="info"
                            disable={!this.state.formIsValid}
                            type="submit"
                            text="Find routes"
                          />
                        </Col>
                      </Row> */}

                    {/* <CustomFormGroup
                          xsNumber={5}
                          type="input"
                          realValue={this.state.trip.destination}
                          change={(event) => {
                            this.handle(event, "destination");
                          }}
                          labelText={"Destination"}
                          placeholderText={"destination"}
                        />
                      </Row> */}

                    {/* <Row>
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
                      </Row> */}
                    {/* <Row></Row> */}
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

                    {/* <Row>
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
                      </Row> */}
                    <div className="clearfix" />
                  </div>
                }
              />
            </Col>
            {/* Hiện tại thì tài xế sẽ đi chung với xe tải luôn */}
            <Col md={6}>
<Card 
title="Trip Detail"
content={
  <div>
    <VerticalTabs/>
  </div>
}
/>
            </Col>
            {/* <Col
              md={2}
              style={{
                background: "#fff",
                border: "#333333",
                display: "none",
              }}
            ></Col> */}

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
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fullprofile: state.userprofile,
    tripRecord: state.trip.tripData.tableBody,
    token: state.user.token,
    contract: state.contract.contracts,
    contractForm: state.contract.contractForm,
  };
};
export default connect(mapStateToProps, {
  getRoute,
  login,
  addTrip,
  addTripTableHeader,
  modifyContract,
  ModifyContractFomr,
})(UserProfile);
