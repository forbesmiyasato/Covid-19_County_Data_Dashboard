import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

const Map = (props) => {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
      defaultZoom={4}
    ></GoogleMap>
  ));
  
  return (
    <div class="container">
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
export default Map;
