import React, { useState, useEffect } from "react";
import "../countyList.css";

const CountyList = (props) => {
    const [data, setData] = useState(props.data);
    const [filteredData, setFilteredData] = useState();
    const [sortState, setSortState] = useState({byState: true, byCases: false, byDeaths: false, byFatality: false});
    useEffect(() => {
        console.log("called");
        setData(props.data);
    });

    console.log("County list render");

    const handleChange = (e) => {
        const string = e.target.value.toLowerCase();
        const result = data.filter((county) =>
            `${county.state_name} - ${county.county_name}`
                .toLowerCase()
                .includes(string)
        );
        console.log(string);

        if (sortState.byState) {
            setFilteredData(result);
        } else if (sortState.byCases) {
            setFilteredData(
                result.sort((a, b) => {
                    return b.confirmed - a.confirmed;
                })
            );
        } else if (sortState.byDeaths) {
            setFilteredData(
                result.sort((a, b) => {
                    return b.death - a.death;
                })
            );
        } else if (sortState.byFatality) {
            setFilteredData(
                result.sort((a, b) => {
                    return (
                        parseFloat(b.fatality_rate) -
                        parseFloat(a.fatality_rate)
                    );
                })
            );
        }
    };

    const sortByCases = () => {
        if (filteredData) {
            setData([
                ...filteredData.sort((a, b) => {
                    return b.confirmed - a.confirmed;
                }),
            ]);
        } else {
            setData([
                ...data.sort((a, b) => {
                    return b.confirmed - a.confirmed;
                }),
            ]);
        }

        setSortState({byState: false, byCases: true, byDeaths: false, byFatality: false});
    };

    const sortByDeaths = () => {
        if (filteredData) {
            setData([
                ...filteredData.sort((a, b) => {
                    return b.death - a.death;
                }),
            ]);
        } else {
            setData([
                ...data.sort((a, b) => {
                    return b.death - a.death;
                }),
            ]);
        }
        setSortState({byState: false, byCases: false, byDeaths: true, byFatality: false});
    };

    const sortByFatalityRate = () => {
        if (filteredData) {
            setData([
                ...filteredData.sort((a, b) => {
                    return (
                        parseFloat(b.fatality_rate) -
                        parseFloat(a.fatality_rate)
                    );
                }),
            ]);
        } else {
            setData([
                ...data.sort((a, b) => {
                    return (
                        parseFloat(b.fatality_rate) -
                        parseFloat(a.fatality_rate)
                    );
                }),
            ]);
        }

        setSortState({byState: false, byCases: false, byDeaths: false, byFatality: true});
    };

    const sortByStates = () => {
        console.log("invoked");
        setFilteredData([...data]);

        setSortState({byState: true, byCases: false, byDeaths: false, byFatality: false});
    };

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
                    <a class="dropdown-item" onClick={sortByStates}>
                        Sort by states (default)
                    </a>
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
