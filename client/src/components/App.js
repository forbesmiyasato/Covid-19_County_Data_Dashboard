import React, { useEffect, useState } from "react";
import Map from "./map";
import "../App.css";
import CountyOverview from "./countyOverview";
import TopCounties from "./topCounties";
import Header from "./header";
import USOverview from "./usOverview";
import CountyList from "./countyList";
import axios from "axios";
import Popup from "./popup";

const App = () => {
  const [healthData, setHealthData] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [geometryData, setGeometryData] = useState([]);
  const [overviewUS, setOverviewUS] = useState({});
  const [countyCasesDeaths, setCountyCasesDeaths] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [chartType, setChartType] = useState();
  const [selectedTimelineData, SetSelectedTimelineData] = useState();

  useEffect(() => {
    async function fetchGeometryData() {
      const geoResult = await axios("/all?state=OR");
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

    async function fetchStateCasesDeaths() {
      const stateDeathsResult = await axios(
        "https://api.covidtracking.com/v1/states/ca/current.json"
      );
      setStateDeaths(statesDeathsResult);
    }


    Promise.all([
      fetchGeometryData(),
      fetchHealthData(),
      fetchOverviewUS(),
      fetchCountyCasesDeaths(),
      fetchStateCasesDeaths(),
    ]);
  }, []);

  const togglePopup = (type) => {
    setShowPopup(!showPopup);
    setChartType(type);
  };
  console.log(overviewUS);
  console.log(healthData);

  const onCountyClick = (name, state) => {
    const found = healthData.find(
      (element) =>
        element["county_name"] === name && element["state_name"] === state
    );
    if (found) {
      setSelectedCounty(found);
    }

    const timelineData = countyCasesDeaths.data[state][name];
    if (timelineData) {
      SetSelectedTimelineData(timelineData);
    }
    // const found2 = (countyCasesDeaths.find(element => element == state));
    // console.log(found2);
  };

  const onListItemHover = (county, state) => {
    // console.log(this.refs[`${county}${state}`]);
    console.log("hovered");
  };

  const onListItemLeave = (county, state) => {};

  return (
    <view>
      <Header data={healthData} onClick={onCountyClick}></Header>
      <CountyList
        data={healthData}
        onClick={onCountyClick}
        onHover={onListItemHover}
        onLeave={onListItemLeave}
      ></CountyList>
      <div id="dashboardMap">
        <Map
          geometryData={geometryData}
          healthData={healthData}
          onClick={onCountyClick}
        ></Map>
        <TopCounties data={healthData} onClick={onCountyClick}></TopCounties>
      </div>
      {selectedCounty ? (
        <CountyOverview
          data={selectedCounty}
          togglePopup={togglePopup}
        ></CountyOverview>
      ) : (
        <USOverview data={overviewUS}></USOverview>
      )}
      {showPopup ? (
        <Popup
          togglePopup={togglePopup}
          chartType={chartType}
          timelineData={selectedTimelineData}
        />
      ) : null}
    </view>
  );
};

export default App;
