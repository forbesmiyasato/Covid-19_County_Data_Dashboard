import React, { useRef, useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import axios from "axios";

const coords = [
    { lat: 40, lng: -70 },
    { lat: 50, lng: -70 },
    { lat: 50, lng: -80 },
    { lat: 40, lng: -80 },
];

const Map = (props) => {
    const mapRef = useRef(null);
    const [geometryData, setGeometryData] = useState([]);

    console.log(props.healthData)
    const getColor = (countyName, stateName) => {
        const found = props.healthData.find(element => 
            element["county_name"] == countyName && element["state_name"] == stateName);
        if (found) {
            if (found["new"] > 100) return '#FF3333'
            else if (found["new"] > 0) return '#FFFB33'
            else if (found["new"] === 0) return '#3AFF33'
        }
        else return '#000'
    }

    useEffect(() => {
        async function fetchData() {
             const geoResult = await axios("http://localhost:5000/all?state=OR");
            setGeometryData(geoResult.data);
        }

        fetchData();
    }, []);

    const GoogleMapExample = withGoogleMap((props) => (
        <GoogleMap
            defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
            defaultZoom={4}
            onReady={(mapProps, map) => (mapRef = map)}
        >
            {geometryData.map((county, i) => {
                return (
                    <Polygon
                        key={i}
                        path={county.shape}
                        options={{
                            fillColor: getColor(county.county, county.state),
                            fillOpacity: 0.4,
                            strokeColor: "#000",
                            strokeOpacity: 1,
                            strokeWeight: 1,
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
