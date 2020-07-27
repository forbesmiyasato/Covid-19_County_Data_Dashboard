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
    const [data, setData] = useState([]);

    //random color code from https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    useEffect(() => {
        async function fetchData() {
            const result = await axios("http://localhost:5000/all?state=OR");
            setData(result.data);
            console.log(result.data);
        }

        fetchData();
    }, []);

    const GoogleMapExample = withGoogleMap((props) => (
        <GoogleMap
            defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
            defaultZoom={4}
            onReady={(mapProps, map) => (mapRef = map)}
        >
            {data.map((county, i) => {
                return (
                    <Polygon
                        key={i}
                        path={county.shape}
                        options={{
                            fillColor: getRandomColor(),
                            fillOpacity: 0.4,
                            strokeColor: "#000",
                            strokeOpacity: 1,
                            strokeWeight: 1,
                        }}
                        onClick={() => {
                            console.log (county.county)}
                        }
                    />
                );
            })}
        </GoogleMap>
    ));

    return (
        <div class="container">
            <GoogleMapExample
                containerElement={
                    <div style={{ height: `500px`, width: "100%" }} />
                }
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default Map;
