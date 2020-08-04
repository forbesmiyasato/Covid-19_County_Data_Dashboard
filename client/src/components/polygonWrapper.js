import React, { useState } from "react";
import { Polygon } from "react-google-maps";

const PolygonWrapper = (props) => {
    const [hovered, setHovered] = useState(null);

    const customControl = document.getElementsByClassName("card-text")[0];

    const onHover = (county, state, i) => {
        if (customControl) {
            customControl.innerHTML = `${county} - ${state}`;
        }

        setHovered(i)

        console.log("over");
    };

    const onLeave = () => {
        if (customControl) {
            customControl.innerHTML = "Hover over county";
        }

        setHovered(null);
    }

    return (
        <Polygon
            key={props.i}
            path={props.shape}
            options={{
                fillColor: props.color,
                fillOpacity: 0.4,
                strokeColor: hovered == props.i ? "#000" : "#fff",
                strokeOpacity: hovered == props.i ? 1 : 0.4,
                strokeWeight: hovered == props.i ? 2 : 0.5,
            }}
            onClick={props.onClick.bind(this, props.county, props.state)}
            onMouseMove={() => {
                onHover(props.county, props.state, props.i);
            }}
            onMouseOut={() => {
                onLeave();
            }}
        />
    );
};

export default PolygonWrapper;
