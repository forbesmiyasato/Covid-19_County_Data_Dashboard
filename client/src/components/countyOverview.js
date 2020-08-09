import React from "react";
import "../countyOverview.css";
const formatWithCommas = require('./utilities');

var pStyleRed = {
    color: '#DB0700'
};

const countyOverview = (props) => {
    console.log(props.data);
    const data = props.data;
    // const formatWithCommas = (valueIn) => {
    //     return valueIn.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    // }
    return (
        <div class="side">
            <div class="container county-overview">
                <p>County Overview</p>
                <div class="row">
                    <div class="col button" onClick={props.togglePopup.bind(this, 'cases')}>Cases</div>
                    <div class="col button" onClick={props.togglePopup.bind(this, 'deaths')}>Deaths</div>
                </div>
                <p>
                    {data.county_name}, {data.state_name}
                </p>
                <div className="overview-data-container">
                    <div class="row overview-data">
                        <div class="col">
                            Confirmed:
                            <p>{formatWithCommas(data.confirmed)}</p>
                        </div>
                        <div class="col">
                            New:
                            <p>{formatWithCommas(data.new)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Deaths:
                            <p style={pStyleRed}>{formatWithCommas(data.death)}</p>
                        </div>
                        <div class="col">
                            New Deaths:
                            <p>{formatWithCommas(data.new_death)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Fatality Rate:
                            <p>{data.fatality_rate}</p>
                        </div>
                        <div class="col">
                            Last Update:
                            <p>{data.last_update}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default countyOverview;
