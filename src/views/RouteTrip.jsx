// import React, { Component } from "react";
// import { Col, Grid, Row } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import { connect } from "react-redux";
// import Cookies from "universal-cookie";
// import driver from "../assets/img/driver-icon.png";
// import direction from "../assets/img/icons8-direction-64.png";
// import sortingsorting from "../assets/img/icon_ascending_sorting.png";
// import trip from "../assets/img/icon_estimate.png";
// import fromm from "../assets/img/icon_from_55.png";
// import phone from "../assets/img/icon_phone.png";
// import to from "../assets/img/icon_to_55.png";
// import route_icon from "../assets/img/route_icon.png";
// import truck from "../assets/img/truck.png";
// import weight from "../assets/img/weight.png";
// import { AxiosMethod } from "../axios.js";
// import { Card } from "../components/Card/Card.jsx";
// import { MyButton } from "../components/CustomButton/CustomButton.jsx";
// import { CustomInput } from "../components/CustomInput/CustomInput.jsx";
// import { TableHeaderItem } from "../components/CustomTable/CustomeTable.js";
// import SeperateLine from "../components/formserparate/SeperateLine.js";
// import { Helper } from "../helper";
// import { AcessToken } from "../variables/Variables";
// import { MapWithADirectionsRenderer } from "../views/Maps.jsx";
// const cookies = new Cookies();

// class RouteTrip extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       route: [],
//       selectedId: "",
//       headerItemsss: [
//         {
//           src: sortingsorting,
//           name: "No.",
//         },
//         {
//           src: route_icon,
//           name: "Sumary",
//         },
//         {
//           src: trip,
//           name: "Estimate Cost",
//         },
//         // {
//         //   src: trip,
//         //   name: "Estimate Cost",
//         // },
//         // {
//         //   src: time,
//         //   name: "Estimate Time",
//         // },
//       ],
//       datetime: new Date(),
//       dateValue: "",
//       bodyValue: [],
//       location: {
//         fromLat: 0,
//         fromLng: 0,
//         toLat: 0,
//         toLng: 0,
//       },
//       // from: { fromLat: 41.85073, fromLng: -87.65126 },
//       // to: { toLat: 41.85258, toLng: -87.65141 },
//     };
//   }

//   componentDidMount = () => {
//     //Lấy dữ liệu đường đi về
//     // cookies.set(AcessToken, this.props.userData, { path: "/" });
//     // const tripInfo = this.props.createtripss.trip;
//     // this.getRoute(
//     //   tripInfo.startingLocation,
//     //   tripInfo.destination,
//     //   tripInfo.truck.id,
//     //   tripInfo.truck.weight
//     // );
//   };

//   chooseRoute = (id) => {
//     this.state.bodyValue.map((obj) => {
//       if (obj.order == id) {
//         this.setState({
//           selectedId: id,
//         });
//       }
//     });
//   };

//   setTime = (event) => {
//     let time = new Helper();
//     console.log(time.formatTime(event));
//     this.setState({
//       datetime: event,
//     });
//   };

//   getRoute = (start, end, truckID, weight) => {
//     const data = new AxiosMethod();
//     const tmp = [...this.state.bodyValue];
//     let arr = [];
//     // const tmpLocation = {};
//     var orderNumber = 0;
//     const params = {
//       url: "Trip/GetRoute",
//       type: "get",
//       parameter: {
//         from: start,
//         to: end,
//         truckid: truckID,
//         weight: weight,
//       },
//     };
//     data.metdasdhod(params).then((result) => {
//       console.log(result.data);
//       let route = {
//         order: 0,
//       }; // phần tử chứa order và route
//       // arr = [...result.data];
//       result.data.map((obj) => {
//         orderNumber++;
//         const sumary = obj.route.summary;
//         const estimateCost = obj.estimatedCost;

//         tmp.push({
//           order: orderNumber,
//           summary: sumary,
//           estimateCost: estimateCost,
//         });
//       });

//       const legs = result.data[0].route.legs;
//       //Bản đồ hiển thị mặc định phần tử đầu tiên trong legs
//       const firstChild = legs[0]; //Để đảm bảo legs luôn có 1 phần tử, trong waypoint nhớ sử dụng via=
//       console.log(firstChild);

//       console.log(firstChild.startLocation.latitude);

//       const tmpLocation = {
//         fromLat: firstChild.startLocation.latitude,
//         fromLng: firstChild.startLocation.longitude,
//         toLat: firstChild.endLocation.latitude,
//         toLng: firstChild.endLocation.longitude,
//       };

//       this.setState({
//         bodyValue: [...tmp], //dữ liệu để hiển thị cho user
//         location: { ...tmpLocation }, // toa độ điểm đi và đến
//         // route: [...arr],
//       });
//     });
//   };
//   render() {
//     // Ta có thể viết detructing như ở dưới
//     console.log("Cookie ne: ", cookies.get(AcessToken));
//     console.log(this.props.createtripss.trip);
//     const {
//       startingLocation,
//       destination,
//       tripType,
//       // driverName = this.props.createtripss.trip.truck.driver.name,
//       // truckName = this.props.createtripss.trip.truck.name,
//       // truckWWeight = this.props.createtripss.trip.truck.weight,
//     } 
//     = this.props.createtripss.trip;

//     var width = "";

//     //2 biến dưới dùng cho xác định chiều dài dữ liệu
//     const width_50px = "50px";
//     const width_300px = "300px";
//     const width_130px = "130px";
//     var count = 0;
//     // let mapLocation = {
//     //   fromLat: 0,
//     //   fromLng: 0,
//     //   toLat: 0,
//     //   toLng: 0,
//     //   count: count,
//     // };
//     // if (this.state.location.from.fromLat != 0) {
//     //   const { fromLat, fromLng } = { ...this.state.location.from };
//     //   const { toLat, toLng } = { ...this.state.location.to };
//     //   count = count + 1;
//     //   mapLocation = {
//     //     fromLat: fromLat,
//     //     fromLng: fromLng,
//     //     toLat: toLat,
//     //     toLng: toLng,
//     //     count: count,
//     //   };
//     // }
//     return (
//       <div className="content">
//         <Grid fluid>
//           <Row>
//             <Col md={12}>
//               {/* <div style={{ background: "white", padding: 10, height: 300 }}> */}
//               <Card
//                 title="Recommend Routes"
//                 content={
//                   <div>
//                     <div className="headerTable">
//                       {this.state.headerItemsss.map((obj, index) => {
//                         if (index == 0) {
//                           width = width_50px;
//                         } else if (index == 1) {
//                           width = width_300px;
//                         } else if (index == 2) {
//                           width = width_130px;
//                         }
//                         return (
//                           <TableHeaderItem
//                             width={width}
//                             img={obj.src}
//                             text={obj.name}
//                             number={1}
//                           />
//                         );
//                       })}
//                     </div>
//                     {this.state.bodyValue.map((obj, index) => {
//                       return (
//                         <div>
//                           <div
//                             // className="bodyTable"
//                             className={
//                               obj.order == this.state.selectedId
//                                 ? "bodyTableDeeper"
//                                 : "bodyTable"
//                             }
//                             onClick={(e) => this.chooseRoute(obj.order)}
//                           >
//                             {/* Ta bỏ trực tiếp width vào vì cách map của mảng này duyệt khác với cái header */}
//                             <TableHeaderItem
//                               width={width_50px}
//                               img={trip}
//                               show={false}
//                               text={obj.order}
//                               number={0}
//                             />
//                             <TableHeaderItem
//                               width={width_300px}
//                               img={trip}
//                               show={false}
//                               text={obj.summary}
//                               number={0}
//                             />
//                             <TableHeaderItem
//                               width={width_130px}
//                               img={trip}
//                               show={false}
//                               text={obj.estimateCost}
//                               number={0}
//                             />
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 }
//               />
//               {/* </div> */}

//               {/* <Card title="Route list" content={<div>Route list</div>} /> */}
//             </Col>
//           </Row>
//           <Row>
//             <Col md={5}>
//               <Card
//                 title="Address"
//                 content={
//                   // Ta trừ đi 10 đơn vị vì template mặc định card content sẽ paddingBottom là 10px,
//                   // ta làm vậy để đảm bảo toàn vẹn giao diện
//                   <div style={{ height: 500 - 10 }}>
//                     <TableHeaderItem
//                       img={fromm}
//                       text={startingLocation}
//                       number={2}
//                       width={"auto"}
//                     />
//                     <TableHeaderItem
//                       img={to}
//                       text={destination}
//                       number={2}
//                       width={"auto"}
//                     />
//                     <TableHeaderItem
//                       img={direction}
//                       text={tripType}
//                       number={2}
//                       width={"auto"}
//                     />
//                     <SeperateLine changeMargin={true} number={0} text="Truck" />
//                     {/* <TableHeaderItem
//                       img={truck}
//                       text={truckName}
//                       number={2}
//                       width={"max-content"}
//                     /> */}
//                     {/* <TableHeaderItem
//                       img={weight}
//                       text={truckWWeight + " tấn"}
//                       number={2}
//                     /> */}

//                     <SeperateLine
//                       changeMargin={true}
//                       number={0}
//                       text="Driver"
//                     />
//                     {/* <TableHeaderItem
//                       img={driver}
//                       text={driverName}
//                       number={2}
//                     /> */}
//                     <TableHeaderItem img={phone} text={"08081508"} number={2} />
//                     <SeperateLine
//                       changeMargin={true}
//                       number={0}
//                       text="Time start"
//                     />
//                     <CustomInput
//                       // label="Ok"
//                       child={
//                         <DatePicker
//                           selected={this.state.datetime}
//                           className={"form-control"}
//                           showTimeInput
//                           fixedHeight
//                           onChange={(event) => this.setTime(event)}
//                           dateFormat="MM/dd/yyyy h:mm aa"
//                           // locale={"vi"}
//                         />
//                       }
//                     />
//                     <div
//                       style={{
//                         marginLeft: 15,
//                         marginBottom: 10,
//                         marginTop: 5,
//                       }}
//                     />
//                     <MyButton bsStyle="info" text="Choose a routes" />
//                   </div>
//                 }
//               />
//             </Col>
//             <Col md={7}>
//               <Card
//                 title="Route details"
//                 content={
//                   <div style={{ height: 500 - 10 }}>
//                     <div
//                       style={{
//                         // height: 200,
//                         border: "1px solid black",
//                         marginTop: 30,
//                       }}
//                     >
//                       {/* <Maps /> */}
//                       {/* <MapWithADirectionsRenderer {...this.state.location} /> */}
//                       {/* // fromLat={41.85073}
//                       // fromLng={-87.65126}
//                       // toLat={41.85258}
//                       // toLng={-87.65141} */}
//                       {/* <GetMap {...mapLocation} /> */}
//                       {/* <MapTest fromLat={} toLat={}/> */}
//                     </div>
//                   </div>
//                 }
//               />
//             </Col>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }

// //Có tác dụng select ra những state cần xử lí
// /**
//  * state này là của redux, và chữ fn đóng vai trò là 1 props
//  * fn có giá trị là state.full_name của redux
//  * @param {} state
//  */
// const mapStateToProps = (state) => {
//   return {
//     fullprofile: state.userprofile,
//     createtripss: state.trip,
//     token: state.user.token,
//   };
// };

// export default connect(mapStateToProps)(RouteTrip);
