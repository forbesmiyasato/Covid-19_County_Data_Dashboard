import React, { useRef, useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import "../map.css";
import CustomMapControl from "./customControl";

const Map = (props) => {
    const mapRef = useRef(null);

    const getColor = (countyName, stateName) => {
        const found = props.healthData.find(
            (element) =>
                element["county_name"] === countyName &&
                element["state_name"] === stateName
        );
        if (found) {
            if (found["new"] > 100) return "#BD0026";
            else if (found["new"] > 0) return "#FC4E2A";
            else if (found["new"] === 0) return "#D48166";
        } else return "#fff";
    };

    const onHover = (county, state) => {
        const customControl = document.getElementsByClassName(
            "card-text"
        )[0];
        customControl.innerHTML = `${county} - ${state}`;
    };
    const google = window.google;

    const GoogleMapExample = withGoogleMap((props) => (
        <GoogleMap
            defaultOptions={{
                styles: mapStyles,
                streetViewControl: false,
                mapTypeControl: false,
            }}
            defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
            defaultZoom={4.3}
            onReady={(mapProps, map) => (mapRef = map)}
            restriction={{
                latLngBounds: USA_BOUNDs,
                strictBounds: false,
            }}
        >
            <CustomMapControl position={google.maps.ControlPosition.TOP_RIGHT}>
                <div
                    class="card border-dark mb-3"
                    style={{ maxWidth: "18rem" }}
                >
                    <div class="card-header">US Counties</div>
                    <div class="card-body text-dark">
                        <p class="card-text">Hover over county</p>
                    </div>
                </div>
            </CustomMapControl>
            {props.geometryData &&
                props.geometryData.map((county, i) => {
                    return (
                        <Polygon
                            key={i}
                            path={county.shape}
                            options={{
                                fillColor: getColor(
                                    county.county,
                                    county.state
                                ),
                                fillOpacity: 0.4,
                                strokeColor: "#000",
                                strokeOpacity: 0.4,
                                strokeWeight: 0.5,
                            }}
                            onClick={props.onClick.bind(
                                this,
                                county.county,
                                county.state
                            )}
                            onMouseOver={onHover.bind(
                                this,
                                county.county,
                                county.state
                            )}
                        />
                    );
                })}
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                geometryData={props.geometryData}
                onClick={props.onClick}
                containerElement={
                    <div
                        style={{
                            height: `55vh`,
                            width: "100%",
                            borderRadius: "20px!important",
                        }}
                    />
                }
                mapElement={<div className="map" style={{ height: `100%` }} />}
            />
        </div>
    );
};

const USA_BOUNDs = {
    east: -58.715582,
    north: 49.938475,
    south: 20.284843,
    west: -137.908919,
};

const mapStyles = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5",
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#f5f5f5",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#bdbdbd",
            },
        ],
    },
    {
        featureType: "poi",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeeee",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#e5e5e5",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e",
            },
        ],
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#dadada",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e",
            },
        ],
    },
    {
        featureType: "transit",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
                color: "#e5e5e5",
            },
        ],
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeeee",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#373A36",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e",
            },
        ],
    },
];

export default Map;
