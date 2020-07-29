import React, { useRef, useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import axios from "axios";

const Map = (props) => {
    const mapRef = useRef(null);

    const getColor = (countyName, stateName) => {
        const found = props.healthData.find(element => 
            element["county_name"] === countyName && element["state_name"] === stateName);
        if (found) {
            if (found["new"] > 100) return '#FF3333'
            else if (found["new"] > 0) return '#FFFB33'
            else if (found["new"] === 0) return '#3AFF33'
        }
        else return '#000'
    }
    
    const GoogleMapExample = withGoogleMap((props) => (
        <GoogleMap
            defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
            defaultZoom={4}
            onReady={(mapProps, map) => (mapRef = map)}
        >
            {props.geometryData && props.geometryData.map((county, i) => {
                return (
                    <Polygon
                        key={i}
                        path={county.shape}
                        options={{
                            fillColor: getColor(county.county, county.state),
                            fillOpacity: 0.4,
                            strokeColor: "#000",
                            strokeOpacity: 0.4,
                            strokeWeight: 0.5,
                        }}
                        onClick={props.onClick.bind(this, county.county, county.state)}
                    />
                );
            })}
        </GoogleMap>
    ));

    return (
        <div class="container">
            <GoogleMapExample
                geometryData={props.geometryData}
                onClick={props.onClick}
                containerElement={
                    <div style={{ height: `500px`, width: "100%" }} />
                }
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default Map;
