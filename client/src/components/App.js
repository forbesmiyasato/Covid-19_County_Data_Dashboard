import React, { useEffect, useState } from "react";
import Map from "./map";
import "../App.css";
import CountyOverview from "./countyOverview";
import TopCounties from "./topCounties";
import USOverview from "./usOverview";
import CountyList from './countyList';
import axios from "axios";

const App = () => {
    const [healthData, setHealthData] = useState([]);
    const [selectedCounty, setSelectedCounty] = useState(null);
    const [geometryData, setGeometryData] = useState([]);
    const [overviewUS, setOverviewUS] = useState({});
    const [countyCasesDeaths, setCountyCasesDeaths] = useState({});
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

        async function fetchCountyCasesDeaths() {
            const casesDeathsResult = await axios(
                "https://samboy.github.io/covid-19-html/covid-19-byCounty.json"
            );
            setCountyCasesDeaths(casesDeathsResult);
        }

        Promise.all([
            fetchGeometryData(),
            fetchHealthData(),
            fetchOverviewUS(),
            fetchCountyCasesDeaths()
        ]);
    }, []);

    console.log(overviewUS);
    console.log(healthData);

    const onCountyClick = (name, state) => {
        const found = healthData.find(
            (element) =>
                element["county_name"] === name &&
                element["state_name"] === state
        );
        if (found) {
            setSelectedCounty(found);
        }
    };

    return (
        <view>
            <div id="headerContainer">
                <h1 id="dashboardName">Coronavirus US County Tracker</h1>
            </div>
            <CountyList data={healthData} onClick={onCountyClick}></CountyList>
            <div id="dashboardMap">
                <Map
                    geometryData={geometryData}
                    healthData={healthData}
                    onClick={onCountyClick}
                ></Map>
                <TopCounties data={healthData}></TopCounties>
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
