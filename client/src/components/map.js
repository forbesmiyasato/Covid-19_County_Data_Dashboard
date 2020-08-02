import React, { useRef, useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import axios from "axios";

const Map = (props) => {
    const mapRef = useRef(null);

    const getColor = (countyName, stateName) => {
        const found = props.healthData.find(
            (element) =>
                element["county_name"] === countyName &&
                element["state_name"] === stateName
        );
        if (found) {
            if (found["new"] > 100) return "#4A6890";
            else if (found["new"] > 0) return "#99CCFF";
            else if (found["new"] === 0) return "#EEFFFF";
        } else return "#fff";
    };

    const GoogleMapExample = withGoogleMap((props) => (
        <GoogleMap
            defaultOptions={{
                styles: mapStyles
            }}
            defaultCenter={{ lat: 39.8097343, lng: -98.5556199 }}
            defaultZoom={4}
            onReady={(mapProps, map) => (mapRef = map)}
        >
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
                color: "#B5D1FF",
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
