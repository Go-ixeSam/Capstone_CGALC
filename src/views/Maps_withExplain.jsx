import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";
import fromm from "../assets/img/icon_from_55.png";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
var key = "AIzaSyAo421sSPdh65qh2f0B08C2U4eU5-pGg4c";
const google = (window.google = window.google ? window.google : {});
var googleWith2dot =
  "https://maps.googleapis.com/maps/api/js?key=" +
  key +
  "&v=3.exp&libraries=geometry,drawing,places";
const MyMapComponent = compose(
  // Với withProps ta sẽ khai báo các biến với gía trị khởi tạo của nó
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  //2 cái dưới là gộp lại chung với withProps, và export nó dưới cái tên là MyMapComponent
  //Và ta gộp bằng cách sử dụng hàm compose ở trêntrên
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

/**
 * Map với Marker thêm lần nữanữa
 * @param {}} param0
 */
const MapWithAMarker = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const { fromLat, fromLng, toLat, toLng } = this.props;
      const DirectionsService = new google.maps.DirectionsService();
      // const DirectionsRendererOptions = new google.maps.DirectionsRendererOptions();
      // DirectionsRendererOptions.suppressMarkers = true;
      var rendererOptions = {
        // map: map,
        suppressMarkers: true,
        directionsDisplay :new google.maps.DirectionsRenderer(rendererOptions)
      };
      const marker = new google.maps.Marker();
      DirectionsService.route(
        {
          origin: new google.maps.LatLng(fromLat, fromLng),
          // origin:
          // <Marker
          // icon={fromm}
          // position={{ lat: fromLat, lng: fromLng }} />,
          destination: new google.maps.LatLng(toLat, toLng),
          //   destination: this.props.destinations,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)((props) => (
  //   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
  <GoogleMap
    defaultZoom={8}
    // defaultCenter={{ lat: props.latlat, lng: props.longlong }}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker icon={fromm} position={{ lat: -34.397, lng: 150.644 }} />
    {/* <Marker
      // icon={fromm}
      position={{ lat: 41.85073, lng: -87.65126 }}
    /> */}
    {props.directions && <DirectionsRenderer directions={props.directions} options={MarkerClusterer}/>}

    {/* <Marker icon={fromm} position={{ lat: -34.397, lng: 150.644 }} /> */}
  </GoogleMap>
));

/**
 * Kiểm tra chức năng DirectionRenderDirectionRender
 * @param {*} param0
 */
const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  // lifecycle({
  //   componentDidMount() {
  //     const { fromLat, fromLng, toLat, toLng } = this.props;
  //     const DirectionsService = new google.maps.DirectionsService();
  //     const marker=new google.maps.Marker()
  //     DirectionsService.route(
  //       {
  //         origin: new google.maps.LatLng(fromLat, fromLng),
  //         // origin:
  //         // <Marker
  //         // icon={fromm}
  //         // position={{ lat: fromLat, lng: fromLng }} />,
  //         destination: new google.maps.LatLng(toLat, toLng),
  //         //   destination: this.props.destinations,
  //         travelMode: google.maps.TravelMode.DRIVING,
  //       },
  //       (result, status) => {
  //         if (status === google.maps.DirectionsStatus.OK) {
  //           this.setState({
  //             directions: result,
  //           });
  //         } else {
  //           console.error(`error fetching directions ${result}`);
  //         }
  //       }
  //     );
  //   },
  // })
)((props) => (
  <GoogleMap
    defaultZoom={7}
    // defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
    // ddefaultCenter={{ lat: 10.750073, lng: 106.631325 }}
    // defaultCenter={new google.maps.LatLng(props.lat, props.long)}
  >
    <Marker position={{ lat: 41.85073, lng: -87.65126 }} />
    {/* <MapWithAMarker/> */}
    {/* {props.directions && <DirectionsRenderer directions={props.directions} />} */}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    var fromLng = {
      lat: 41.85073,
      long: -87.65126,
    };
    var toLng = {
      lat: 41.85258,
      long: -87.65141,
    };
    var google = (window.google = window.google ? window.google : {});
    // var or = new google.maps.LatLng(41.85073, -87.65126);
    // var dsds = new google.maps.LatLng(41.85258, -87.65141);
    return (
      // <MyMapComponent
      //   isMarkerShown={true}
      //   onMarkerClick={this.handleMarkerClick}
      // />
      <MapWithAMarker
        googleMapURL={googleWith2dot}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        // latlat={-34.397}
        // longlong={150.644}
        fromLat={41.85073}
        fromLng={-87.65126}
        toLat={41.85258}
        toLng={-87.65141}
      />
      // <MapWithADirectionsRenderer
      //   fromLat={41.85073}
      //   fromLng={-87.65126}
      //   toLat={41.85258}
      //   toLng={-87.65141}
      // />
    );
  }
}

export default MyFancyComponent;
