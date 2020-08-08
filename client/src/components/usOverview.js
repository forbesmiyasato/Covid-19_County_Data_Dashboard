import React from "react";
const formatWithCommas = require('./utilities');

var pStyleRed = {
    color: '#DB0700'
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
                            Active:
                            <p>{formatWithCommas(data.active)}</p>
                        </div>
                        <div className="col">
                            Cases:
                            <p>{formatWithCommas(data.cases)}</p>
                        </div>
                    </div>
                    <div className="row overview-data">
                        <div className="col">
                            Recovered:
                            <p style={pStyleGreen}>{formatWithCommas(data.recovered)}</p>
                        </div>
                        <div className="col">
                            Deaths:
                            <p style={pStyleRed}>{formatWithCommas(data.deaths)}</p>
                        </div>
                    </div>
                    <div className="row overview-data">
                        <div className="col">
                            Today's Cases:
                            <p>{formatWithCommas(data.todayCases)}</p>
                        </div>
                        <div className="col">
                            Today's Deaths:
                            <p>{formatWithCommas(data.todayDeaths)}</p>
                        </div>
                    </div>
                    <div className="row overview-data">
                        <div className="col overview-data">
                            Total Tests:
                            <p>{formatWithCommas(data.totalTests)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default countyOverview;
