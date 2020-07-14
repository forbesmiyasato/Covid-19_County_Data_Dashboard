import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

const Map = (props) => {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    ></GoogleMap>
  ));

  console.log(process.env.REACT_APP_GOOGLE_API);
  
  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
export default Map;
