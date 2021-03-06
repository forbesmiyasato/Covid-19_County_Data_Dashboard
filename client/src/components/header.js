import React, { useState, useEffect } from "react";
import "../countyList.css";
import "../header.css";
import AccessColors from "./colors.js";

const hideSearch = () => {
  document.getElementById("mobile-searched").style.display = "none";
};

const showSearch = () => {
  document.getElementById("mobile-searched").style.display = "flex";
};

const Header = (props) => {
  const [data, setData] = useState(props.data);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setData(props.data);
  });

  const mobileSearch = (search) => {
    const string = search.target.value.toLowerCase();
    if (string == "") {
      setResults([]);
      document.getElementById("mobile-searched").style.opacity = "0";
    } else {
      document.getElementById("mobile-searched").style.opacity = "1";
      setResults(
        data.filter((county) =>
          `${county.state_name} - ${county.county_name}`
            .toLowerCase()
            .includes(string)
        )
      );
    }
  };

  return (
    <div id="headerContainer" role="banner">
      <h1 id="dashboardName">Coronavirus US County Tracker</h1>
      <div class="search-box" id="mobile-search-box">
        <input
          className="search-txt-mobile"
          type="text"
          placeholder="&#xF002; Search Counties"
          onChange={mobileSearch}
          onClick={showSearch}
        ></input>
        <ul id="mobile-searched" onClick={hideSearch}>
          {results.map((county, i) => {
            return (
              <li
                class="mobile-searched-item"
                key={i}
                onClick={props.onClick.bind(
                  this,
                  county.county_name,
                  county.state_name
                )}
              >
                {county.state_name} - {county.county_name}
              </li>
            );
          })}
        </ul>
      </div>
      <AccessColors colorChange={props.colorChange}></AccessColors>
    </div>
  );
};

export default Header;
