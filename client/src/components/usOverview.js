import React from "react";
import "../usOverview.css"

const formatWithCommas = require('./utilities');


var pStyleRed = {
    color: "#F78905"
};

var pStyleGreen = {
    color: '#1ADB4A'
};

const countyOverview = (props) => {
    let data = props.data;
    
    return (
        <div className="side" style={{ color: "#777" }}>
            <div className="container county-overview">
                <p>US Overview</p>
                <div className="overview-data-container">
                    <div className="row overview-data">
                        <div className="col">
                            <div className="covid-header">Active:</div>
                            <p className="covid-data">{formatWithCommas(data.active)}</p>
                        </div>
                        <div className="col">
                            <div className="covid-header">Cases:</div>
                            <p className="covid-data">{formatWithCommas(data.cases)}</p>
                        </div>
                    </div>
                    <div className="row overview-data">
                        <div className="col">
                            <div className="covid-header">Recovered:</div>
                            <p className="covid-data" style={pStyleGreen}>{formatWithCommas(data.recovered)}</p>
                        </div>
                        <div className="col">
                            <div className="covid-header">Deaths:</div>
                            <p className="covid-data" style={pStyleRed}>{formatWithCommas(data.deaths)}</p>
                        </div>
                    </div>
                    <div className="row overview-data">
                        <div className="col">
                            <div className="covid-header">Today's Cases:</div>
                            <p className="covid-data">{formatWithCommas(data.todayCases)}</p>
                        </div>
                        <div className="col">
                            <div className="covid-header">Today's Deaths:</div>
                            <p className="covid-data">{formatWithCommas(data.todayDeaths)}</p>
                        </div>
                    </div>
                    <div className="row overview-data">
                        <div className="col">
                            <div className="covid-header">Total Tests:</div>
                            <p className="covid-data">{formatWithCommas(data.totalTests)}</p>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default countyOverview;
