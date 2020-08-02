import React from "react";

const countyOverview = (props) => {
    let data = props.data
    return (
        <div class="side" style={{color: "#777"}}>
            <h3>USA Overview</h3>
            <p>{data.cases}</p>
            <p>{data.deaths}</p>
            <p>{data.recovered}</p>
        </div>
    );
};

export default countyOverview;
