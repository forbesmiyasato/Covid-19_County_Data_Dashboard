import React, { useEffect, useState } from "react";
import Map from "./map";
import "../App.css";
import CountyOverview from "./countyOverview";
import TopCounties from "./topCounties";
import USOverview from "./usOverview";
import axios from "axios";

const App = () => {
    const [healthData, setHealthData] = useState([]);
    const [selectedCounty, setSelectedCounty] = useState(null);
    const [geometryData, setGeometryData] = useState([]);
    const [overviewUS, setOverviewUS] = useState({});
    useEffect(() => {
        async function fetchGeometryData() {
            const geoResult = await axios("http://localhost:5000/all?state=OR");
            setGeometryData(geoResult.data);
        }

        async function fetchHealthData() {
            const healthResult = await axios(
                "https://covid19-us-api.herokuapp.com/county"
            );
            setHealthData(healthResult.data.message);
        }

        async function fetchOverviewUS() {
            const overviewResult = await axios(
                "https://coronavirus-19-api.herokuapp.com/countries/usa"
            );
            setOverviewUS(overviewResult.data);
        }

        Promise.all([
            fetchGeometryData(),
            fetchHealthData(),
            fetchOverviewUS(),
        ]);
    }, []);

    console.log(overviewUS);

    const onMapCountyClick = (name, state) => {
        const found = healthData.find(
            (element) =>
                element["county_name"] === name &&
                element["state_name"] === state
        );
        if (found) {
            setSelectedCounty(found);
        }
        console.log(found);
    };

    return (
        <view>
            <div id="headerContainer">
                <h1 id="dashboardName">Coronavirus US County Tracker</h1>
            </div>
            <div class="dataContainer">Test</div>
            <div id="dashboardMap">
                <Map
                    geometryData={geometryData}
                    healthData={healthData}
                    onClick={onMapCountyClick}
                ></Map>
                <TopCounties></TopCounties>
            </div>
            {selectedCounty ? (
                <CountyOverview data={selectedCounty}></CountyOverview>
            ) : (
                <USOverview data={overviewUS}></USOverview>
            )}
        </view>
    );
};

export default App;
