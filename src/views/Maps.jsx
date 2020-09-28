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
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  // Marker,
} from "react-google-maps";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";


const CustomMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={25}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >
      {/* {props.isMarkerShown && (
        <Marker position={{ lat: -33.8599358, lng: 151.2090295 }} />
      )} */}
      {/* <Marker
       position={{  lat: -34.397, lng: 150.644 }} 
       /> */}
      <MarkerWithLabel
        position={{ lat: -34.397, lng: 150.644 }}
        // labelAnchor={new google.maps.Point(12, 0)}
        labelStyle={{
          backgroundColor: "yellow",
          fontSize: "12px",
          padding: "8px",
          // marginLeft:"22px",
          
        }}
      >
        <div>Hello There!</div>
      </MarkerWithLabel>
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  //...prop cho ta biét sẽ có nhiều tham số đc thêm vào, và ta ko cần phải mất công đặt tên từng cái
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAo421sSPdh65qh2f0B08C2U4eU5-pGg4c&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
