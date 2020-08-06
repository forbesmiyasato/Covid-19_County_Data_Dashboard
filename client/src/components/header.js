import React, { useState, useEffect } from "react";
import "../countyList.css";
import "../header.css";

const Header = (props) => {
  const [data, setData] = useState(props.data);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setData(props.data);
  });

  const mobileSearch = (search) => {
    const string = search.target.value.toLowerCase();
    setResults(
      data.filter((county) =>
        `${county.state_name} - ${county.county_name}`
          .toLowerCase()
          .includes(string)
      )
    );
  };

  return (
    <div id="headerContainer">
      <h1 id="dashboardName">Coronavirus US County Tracker</h1>
      <div class="search-box" id="mobile-search-box">
        <input
          className="search-txt"
          type="text"
          placeholder="Search counties"
          onChange={mobileSearch}
        ></input>
        <ul id="mobile-searched">
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
    </div>
  );
};

export default Header;
