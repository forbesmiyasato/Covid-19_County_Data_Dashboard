import React from "react";


var pStyleRed = {
    color: '#DB0700'
};

var pStyleGreen = {
    color: '#1ADB4A'
};

const countyOverview = (props) => {
    let data = props.data;
    const formatWithCommas = (valueIn) => {
        if(!valueIn) 
            return 0;
        else
            return valueIn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <div class="side" style={{ color: "#777" }}>
            <div class="container county-overview">
                <p>US Overview</p>
                <div className="overview-data-container">
                    <div class="row overview-data">
                        <div class="col">
                            Active:
                            <p>{formatWithCommas(data.active)}</p>
                        </div>
                        <div class="col">
                            Cases:
                            <p>{formatWithCommas(data.cases)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Recovered:
                            <p style={pStyleGreen}>{formatWithCommas(data.recovered)}</p>
                        </div>
                        <div class="col">
                            Deaths:
                            <p style={pStyleRed}>{formatWithCommas(data.deaths)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Today's Cases:
                            <p>{formatWithCommas(data.todayCases)}</p>
                        </div>
                        <div class="col">
                            Today's Deaths:
                            <p>{formatWithCommas(data.todayDeaths)}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
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
