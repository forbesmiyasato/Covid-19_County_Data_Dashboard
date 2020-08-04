import React, { useState } from "react";
import { Polygon } from "react-google-maps";

const PolygonWrapper = (props) => {
    const [hovered, setHovered] = useState(null);

    const onHovered = (i) => {
        setHovered(i)
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
            onMouseOver={() => {
                props.onHover(props.county, props.state);
                onHovered(props.i);
            }}
            onMouseOut={() => {
                setHovered(null);
            }}
        />
    );
};

export default PolygonWrapper;
