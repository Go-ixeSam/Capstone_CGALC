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
import React from "react";
import { MapTest } from "./Testing_HOC.jsx";

import fromm from "../assets/img/from_location.png";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
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
import {
  compose,
  withProps,
  withStateHandlers,
  withHandlers,
  lifecycle,
  withState,
} from "recompose";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import { FaAnchor } from "react-icons/fa";
//Cái biểu tượng mỏ neo, và trang này còng nhiều biểu tượng nữa cơcơ
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
const {
  StandaloneSearchBox,
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");
const _ = require("lodash");
// Đây là giải thích về lodash
const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");
// const FaAnchor = require("react-icons/lib/fa/anchor");

// Bắt đầu giai đoạn testing

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const fetch = require("isomorphic-fetch");

// const demoFancyMapStyles = require("./demoFancyMapStyles.json");
var key = "AIzaSyAo421sSPdh65qh2f0B08C2U4eU5-pGg4c";
var googleWith2dot =
  "https://maps.googleapis.com/maps/api/js?key=" +
  key +
  "&v=3.exp&libraries=geometry,drawing,places";
const google = (window.google = window.google ? window.google : {});
// InfoBox

/**
 * Kiểm tra chức năng infoBoxinfoBox
 */
const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      key +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 25.03, lng: 121.6 },
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={props.center}
    // defaultOptions={{ styles: demoFancyMapStyles }}
  >
    <InfoBox
      defaultPosition={google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div
        style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}
      >
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Hello, Taipei!
        </div>
      </div>
    </InfoBox>
    <Marker
      position={{ lat: 22.6273, lng: 120.3014 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoBox
          onCloseClick={props.onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div
            style={{
              backgroundColor: `yellow`,
              opacity: 0.75,
              padding: `12px`,
            }}
          >
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              Hello, Kaohsiung!
            </div>
          </div>
        </InfoBox>
      )}
    </Marker>
  </GoogleMap>
));

const CustomMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />

      {/* Day la marker voi label */}
      {/* <MarkerWithLabel
        position={{ lat: -34.397, lng: 150.644 }}
        labelStyle={{
          backgroundColor: "yellow",
          fontSize: "12px",
          padding: "8px",
          // marginLeft:"22px",
          
        }}
      >
        <div>Hello There!</div>
      </MarkerWithLabel> */}
    </GoogleMap>
  ))
);

/**
 * Kiểm tra chức năng MarkerClustererMarkerClusterer
 */
const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      key +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker) => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));
class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] });
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
    ].join("");

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    return <MapWithAMarkerClusterer markers={this.state.markers} />;
  }
}

/**
 * Kiểm tra chức năng markerWithLabel
 *
 * @param {*} param0
 */
const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <MarkerWithLabel
      position={{ lat: -34.397, lng: 150.644 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{
        backgroundColor: "yellow",
        fontSize: "32px",
        padding: "16px",
      }}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>
  </GoogleMap>
));

/**
 * Kiểm tra chức năng BicyclingLayer
 * @param {*} param0
 */
const MapWithABicyclingLayer = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 34.17223, lng: -118.37897 }}
  >
    <BicyclingLayer autoUpdate />
  </GoogleMap>
));

/**
 * Kiểm tra chức năng DirectionRenderDirectionRender
 * @param {*} param0
 */

export const MapWithADirectionsRenderer = compose(
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
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      var { fromLat, fromLng, toLat, toLng } = this.props;
      var origin = {
        lat: fromLat,
        lng: fromLng,
      };
      var destination = { lat: toLat, lng: toLng };
      console.log("Phan component");
      console.log(origin);
      console.log(destination);

      var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(10.750073, 106.631325),
        map: google.maps,
        icon: fromm,
      });
      const arr = [];

      arr.push({
        location: new google.maps.LatLng(10.772497, 106.698464),
        stopover: true,
      }); //Chuẩn bị waypoint

      DirectionsService.route(
        {
          origin: origin,
          // origin: new google.maps.LatLng(fromLat, fromLng),
          destination: destination,
          // destination: new google.maps.LatLng(toLat, toLng),
          // waypoints: arr,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              icons: iconBase,
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
  <GoogleMap defaultZoom={7}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

// Đây là cách giống với file về composer, tường minh hơn nhưng viết dài dòng hơn
// const Mapss = (props) => {
//   return (
//     <GoogleMap
//       defaultZoom={7}
//       defaultCenter={new google.maps.LatLng(10.75223, 106.62743)}
//     >
//       {props.directions && <DirectionsRenderer directions={props.directions} />}
//     </GoogleMap>
//   );
// };

/**
 * Kiểm tra chức năng DrawingManagerDrawingManager
 * @param {*} param0
 */
const MapWithADrawingManager = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
));

/**
 * Kiểm tra chức năngnăng MapWithAFusionTablesLayer
 * @param {*} param0
 */
const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
  >
    <FusionTablesLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{
        query: {
          select: `Geocodable address`,
          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`,
        },
      }}
    />
  </GoogleMap>
));

/**
 * Kiểm tra chức năngnăng MapWithControlledZoom
 * @param {*} param0
 */
const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState("zoom", "onZoomChange", 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      },
    };
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div>
          <FaAnchor /> Controlled zoom: {props.zoom}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
));

/**
 * Kiểm tra chức năng GroundOverlay
 * @param {*} param0
 */
const MapWithGroundOverlay = compose(
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 40.74, lng: -74.18 }}>
    <GroundOverlay
      defaultUrl="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
      defaultBounds={
        new google.maps.LatLngBounds(
          new google.maps.LatLng(40.712216, -74.22655),
          new google.maps.LatLng(40.773941, -74.12544)
        )
      }
      defaultOpacity={0.5}
    />
  </GoogleMap>
));

/**
 * Kiểm tra chức năng MapWithAMakredInfoWindow
 * @param {*} param0
 */
const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <FaAnchor />
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

/**
 * Kiểm tra chức năng KmlLayer
 * @param {*} param0
 */
const MapWithAKmlLayer = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={9} defaultCenter={{ lat: 41.9, lng: -87.624 }}>
    <KmlLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
));

/**
 * Map với Marker thêm lần nữanữa
 * @param {}} param0
 */
const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker icon={fromm} position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

/**
 * Kiểm tra chức năng OverlayView
 * @param {*} param0
 */

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MapWithAnOverlayView = compose(
  withStateHandlers(
    () => ({
      count: 0,
    }),
    {
      onClick: ({ count }) => () => ({
        count: count + 1,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <OverlayView
      position={{ lat: -34.397, lng: 150.644 }}
      /*
       * An alternative to specifying position is specifying bounds.
       * bounds can either be an instance of google.maps.LatLngBounds
       * or an object in the following format:
       * bounds={{
       *    ne: { lat: 62.400471, lng: -150.005608 },
       *    sw: { lat: 62.281819, lng: -150.287132 }
       * }}
       */
      /*
       * 1. Specify the pane the OverlayView will be rendered to. For
       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
       *    Defaults to `OverlayView.OVERLAY_LAYER`.
       */
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      /*
       * 2. Tweak the OverlayView's pixel position. In this case, we're
       *    centering the content.
       */
      getPixelPositionOffset={getPixelPositionOffset}
      /*
       * 3. Create OverlayView content using standard React components.
       */
    >
      <div
        style={{ background: `white`, border: `1px solid #ccc`, padding: 15 }}
      >
        <h1>OverlayView</h1>
        <button onClick={props.onClick} style={{ height: 60 }}>
          I have been clicked {props.count} time{props.count > 1 ? `s` : ``}
        </button>
      </div>
    </OverlayView>
  </GoogleMap>
));

/**
 * Kiem tra chức năng SearchBox
 * @param {*} param0
 */
const MapWithASearchBox = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: {
          lat: 41.9,
          lng: -87.624,
        },
        markers: [],
        onMapMounted: (ref) => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          });
        },
        onSearchBoxMounted: (ref) => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach((place) => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map((place) => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      });
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    {props.markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ))}
  </GoogleMap>
));

/**
 * Kiểm tra chức năng Standalone SearchBox
 * @param {*} param0
 */
const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: googleWith2dot,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: (ref) => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places,
          });
        },
      });
    },
  }),
  withScriptjs
)((props) => (
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
    <ol>
      {props.places.map(
        ({ place_id, formatted_address, geometry: { location } }) => (
          <li key={place_id}>
            {formatted_address}
            {" at "}({location.lat()}, {location.lng()})
          </li>
        )
      )}
    </ol>
  </div>
));

/**
 * Kiểm tra chức năng Polygon
 * @param {*} param0
 */

export function Maps(prop) {
  //   var argument = prop.locations;
  //   console.log("Bên nhận");
  //   console.log(prop.locations);

  // {
  //   from: { fromLat: 41.85073, fromLng: -87.65126 },
  //   to: { toLat: 41.85258, toLng: -87.65141 },
  // };
  //...prop cho ta biét sẽ có nhiều tham số đc thêm vào, và ta ko cần phải mất công đặt tên từng cái
  const location = {
    fromLat: 10.7521826,
    fromLng: 106.6273672,
    toLat: 10.7530514,
    toLng: 106.6268726,
  };
  return (
    // <MapTest {...location} />
    <MapWithADirectionsRenderer
    fromLat={41.85073}
    fromLng={-87.65126}
    toLat={41.85258}
    toLng={-87.65141}
    // location={prop.locations}
  />
    // <StyledMapWithAnInfoBox />
  );
  // <CustomMap
  //   googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+key+"&v=3.exp&libraries=geometry,drawing,places"}
  //   // AIzaSyAo421sSPdh65qh2f0B08C2U4eU5-pGg4c
  //   loadingElement={<div style={{ height: `100%` }} />}
  //   containerElement={<div style={{ height: `100vh` }} />}
  //   mapElement={<div style={{ height: `100%` }} />}
  // />
  // <StyledMapWithAnInfoBox/>
  // <DemoApp/>
  // <MapWithAMarkerWithLabel
  //   googleMapURL={
  //     "https://maps.googleapis.com/maps/api/js?key=" +
  //     key +
  //     "&v=3.exp&libraries=geometry,drawing,places"
  //   }
  //   loadingElement={<div style={{ height: `100%` }} />}
  //   containerElement={<div style={{ height: `400px` }} />}
  //   mapElement={<div style={{ height: `100%` }} />}
  // />
  // <MapWithABicyclingLayer />
  // origin: <Marker noRedraw={true} position={{ lat: 10.752230, lng: 106.627430 }} />,
  // new google.maps.marmar
  // destination: new google.maps.LatLng(10.824594, 106.685824),
 
  // <MapWithADrawingManager />
  // <MapWithAFusionTablesLayer/>
  // <MapWithControlledZoom/>
  //     <MapWithGroundOverlay
  //   googleMapURL={googleWith2dot}
  //   loadingElement={<div style={{ height: `100%` }} />}
  //   containerElement={<div style={{ height: `400px` }} />}
  //   mapElement={<div style={{ height: `100%` }} />}
  // />
  // <MapWithAMakredInfoWindow
  //   googleMapURL={googleWith2dot  }
  //   loadingElement={<div style={{ height: `100%` }} />}
  //   containerElement={<div style={{ height: `400px` }} />}
  //   mapElement={<div style={{ height: `100%` }} />}
  // />
  // <MapWithAKmlLayer />
  //     <MapWithAMarker
  //   googleMapURL={googleWith2dot}
  //   loadingElement={<div style={{ height: `100%` }} />}
  //   containerElement={<div style={{ height: `400px` }} />}
  //   mapElement={<div style={{ height: `100%` }} />}
  // />
  // <MapWithAnOverlayView
  //   googleMapURL={googleWith2dot}
  //   loadingElement={<div style={{ height: `100%` }} />}
  //   containerElement={<div style={{ height: `400px` }} />}
  //   mapElement={<div style={{ height: `100%` }} />}
  // />
  // <MapWithASearchBox />
  // <PlacesWithStandaloneSearchBox/>
  //   );
}

export default Maps;
// export default MapWithADirectionsRenderer(Mapss);
