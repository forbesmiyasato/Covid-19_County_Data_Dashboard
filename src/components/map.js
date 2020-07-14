import React from "react";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";

const coords = [
  { lat: 40, lng: -70 },
  { lat: 50, lng: -70 },
  { lat: 50, lng: -80 },
  { lat: 40, lng: -80 }
];

const Map = (props) => {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
      defaultZoom={4}
    >
      <Polygon
        path={coords}
        key={1}
        options={{
          fillColor: "#000",
          fillOpacity: 0.4,
          strokeColor: "#000",
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("ahmet");
        }}
      />
    </GoogleMap>
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
