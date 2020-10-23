import React from "react";
import { withHandlers, withProps, withState, compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  lifecycle,
  Marker,
  BicyclingLayer,
  Circle,
  DirectionsRenderer,
  FusionTablesLayer,
  InfoWindow,
  GroundOverlay,
  KmlLayer,
  OverlayView,
} from "react-google-maps";
const google = (window.google = window.google ? window.google : {});
// const DirectionsService = new google.maps.DirectionsService();
const Testing = ({ direction }) => {
  console.log("Ở Testing");
  console.log(direction);
  return (
    <GoogleMap defaultZoom={7} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {direction && <DirectionsRenderer directions={direction} />}
    </GoogleMap>
  );
};

// export const PrepareData = ({ ...location }) => {
export const PrepareData = (fromLat, fromLng, toLat, toLng) => {
  let tmp = {};
  const DirectionsService = new google.maps.DirectionsService();
  var origin = {
    lat: fromLat,
    lng: fromLng,
  };
  var destination = { lat: toLat, lng: toLng };
  console.log("Phan component");
  console.log(origin);
  console.log(destination);

  DirectionsService.route(
    {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log("Vào thành công");
        console.log(result);
        tmp = result.route;
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );
  return tmp;
};
var key = "AIzaSyAo421sSPdh65qh2f0B08C2U4eU5-pGg4c";

// Để cái component sau compose nhận đc prop từ withProps thì cứ đặt tên props của cái component giống là đc
//Làm sao để truyền data vào component có compose và để cái data đó chảy từ compose xuống cái
//component sau compose???
//Đối với componetn có withProps thì nếu ta để mấy cái props ở đó thì mọi data truyền từ bên ngoài vào
// cũng sẽ bị ghi đè
//vậy nên cái nào cần đc truyền từ bên ngoài vào, thì ko nên khai báo trong withProps
// googleMapURL:

// "https://maps.googleapis.com/maps/api/js?key=" +
// key +
// "&v=3.exp&libraries=geometry,drawing,places",
// loadingElement: <div style={{ height: `100%` }} />,
// containerElement: <div style={{ height: `200px` }} />,
// mapElement: <div style={{ height: `100%` }} />,
// Mấy dòng trên luôn chỉ như thế nên ta khai báo thằng vào withProp cho tiệntiện, khỏi phải
//truyền đi truyèn lại  từng cái mỗi khi dùng đển component có compose

//Vậy cái <TênComponent {...props} /> là sao??
//Coi ở link này
export const MapTest = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      key +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `200px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={7} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.direction && (
      <DirectionsRenderer
        directions={PrepareData(
          props.fromLat,
          props.fromLng,
          props.toLat,
          props.toLng
        )}
      />
    )}
    {/* <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    /> */}
  </GoogleMap>
));



// export const GetMap = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=" +
//       key +
//       "&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `200px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       var { fromLat, fromLng, toLat, toLng } = this.props;
//       var origin = { lat: fromLat, lng: fromLng };
//       var destination = { lat: toLat, lng: toLng };
//       console.log("Phan component");
//       console.log(origin);
//       console.log(destination);
//       const arr = [];

//       arr.push({
//         location: new google.maps.LatLng(10.772497, 106.698464),
//         stopover: true,
//       }); //Chuẩn bị waypoint

//       DirectionsService.route(
//         {
//           origin: origin,
//           destination: destination,
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               // icons: iconBase,
//               directions: result,
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     },
//   })
// )((props) => (
//   // <PrepareData
//   //   fromLat={props.fromLat}
//   //   fromLng={props.fromLng}
//   //   toLat={props.toLat}
//   //   toLng={props.toLng}
//   // />

//   <GoogleMap
//     defaultZoom={7}
//     defaultCenter={{ lat: props.fromLat, lng: props.fromLng }}
//   >
//     {props.directions && (
//       <DirectionsRenderer
//         directions={
//           props.directions
//           //   PrepareData(
//           //   props.fromLat,
//           //   props.fromLng,
//           //   props.toLat,
//           //   props.toLng
//           // )
//         }
//       />
//     )}
//   </GoogleMap>
// ));

// export const MapTest = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=" +
//       key +
//       "&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `200px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       var { fromLat, fromLng, toLat, toLng } = this.props.location;
//       console.log(fromLat, fromLng, toLat, toLng)
//       var origin = {lat: fromLat,lng: fromLng};
//       var destination = { lat: toLat, lng: toLng };
//       console.log("Phan component");
//       console.log(origin);
//       console.log(destination);

//       DirectionsService.route(
//         {
//           origin: origin,
//           destination: destination,
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result,
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     },
//   })
// )((props) => (
//   <GoogleMap defaultZoom={7}>
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// ));
// export const GetMap = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=" +
//       key +
//       "&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `200px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       var { fromLat, fromLng, toLat, toLng } = this.props;
//       var origin = { lat: fromLat, lng: fromLng };
//       var destination = { lat: toLat, lng: toLng };
//       console.log("Phan component");
//       console.log(origin);
//       console.log(destination);
//       const arr = [];

//       arr.push({
//         location: new google.maps.LatLng(10.772497, 106.698464),
//         stopover: true,
//       }); //Chuẩn bị waypoint

//       DirectionsService.route(
//         {
//           origin: origin,
//           destination: destination,
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               // icons: iconBase,
//               directions: result,
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     },
//   })
// )((props) => (
//   <GoogleMap defaultZoom={7}>
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// ));