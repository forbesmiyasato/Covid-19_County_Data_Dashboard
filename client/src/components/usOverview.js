import React from "react";

const countyOverview = (props) => {
    let data = props.data;
    return (
        <div class="side" style={{ color: "#777" }}>
            <div class="container county-overview">
                <p>US Overview</p>
                <div className="overview-data-container">
                    <div class="row overview-data">
                        <div class="col">
                            Active:
                            <p>{data.active}</p>
                        </div>
                        <div class="col">
                            Cases:
                            <p>{data.cases}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Recovered:
                            <p>{data.recovered}</p>
                        </div>
                        <div class="col">
                            Deaths:
                            <p>{data.deaths}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div class="col">
                            Today Cases:
                            <p>{data.todayCases}</p>
                        </div>
                        <div class="col">
                            Today Deaths:
                            <p>{data.todayDeaths}</p>
                        </div>
                    </div>
                    <div class="row overview-data">
                        <div className="col overview-data">
                            Total Tests:
                            <p>{data.totalTests}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default countyOverview;
