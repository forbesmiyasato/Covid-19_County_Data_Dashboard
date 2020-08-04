import React, { useState, useEffect } from "react";
import "../countyList.css";

const CountyList = (props) => {
    const [data, setData] = useState(props.data);
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        setData(props.data);
    });

    const handleChange = (e) => {
        const string = e.target.value.toLowerCase();
        const result = data.filter((county) =>
            `${county.state_name} - ${county.county_name}`
                .toLowerCase()
                .includes(string)
        );
        setFilteredData(result);
    };

    const sortByCases = () => {
        setData([...data.sort((a, b) => {
            return b.confirmed - a.confirmed;
        })])
    }

    const sortByDeaths = () => {
        setData([...data.sort((a, b) => {
            return b.death - a.death;
        })])
    }

    const sortByFatalityRate = () => {
        setData([...data.sort((a, b) => {
            return parseFloat(b.fatality_rate) - parseFloat(a.fatality_rate);
        })])
    }

    return (
        <div class="side" id="county-list">
            <div className="search-box">
                <input
                    className="search-txt"
                    type="text"
                    placeholder="Search counties"
                    onChange={handleChange}
                ></input>
                <button
                    className="search-btn"
                    id="sortDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="icon-basic-magnifier"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={sortByCases}>
                        Sort by cases
                    </a>
                    <a class="dropdown-item" onClick={sortByDeaths}>
                        Sort by deaths
                    </a>
                    <a class="dropdown-item" onClick={sortByFatalityRate}>
                        Sort by fatality rate
                    </a>
                </div>
            </div>
            <ul>
                {filteredData
                    ? filteredData.map((county, i) => {
                          return (
                              <li
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
                      })
                    : data.map((county, i) => {
                          return (
                              <li
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
    );
};

export default CountyList;
