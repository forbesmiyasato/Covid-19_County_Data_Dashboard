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
                <p>
                    {data.county_name}, {data.state_name}
                </p>
                <div class="row">
                    <div class="col button" onClick={props.togglePopup.bind(this, 'cases')}>Cases</div>
                    <div class="col button" onClick={props.togglePopup.bind(this, 'deaths')}>Deaths</div>
                </div>
                <div className="overview-data-container">
                    <div class="row overview-data">
                        <div class="col">
                            <div className="covid-header">Confirmed:</div>
                            <p className="covid-data">{formatWithCommas(data.confirmed)}</p>
                        </div>
                        <div class="col">
                            <div className="covid-header">New:</div>
                            <p className="covid-data">{formatWithCommas(data.new)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            <div className="covid-header">Deaths:</div>
                            <p className="covid-data">{formatWithCommas(data.death)}</p>
                        </div>
                        <div class="col">
                            <div className="covid-header">New Deaths:</div>
                            <p className="covid-data">{formatWithCommas(data.new_death)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            <div className="covid-header">Fatality Rate:</div>
                            <p className="covid-data">{data.fatality_rate}</p>
                        </div>
                        <div class="col">
                            <div className="covid-header">Last Update:</div>
                            <p className="covid-data">{data.last_update}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default countyOverview;
