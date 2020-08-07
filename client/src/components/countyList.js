import React, { useState, useEffect } from "react";
import "../countyList.css";
import menu from "../menu.png";

const CountyList = (props) => {
    const [modifiedData, setModifiedData] = useState(props.data);
    const [sortState, setSortState] = useState({
        byState: true,
        byCases: false,
        byDeaths: false,
        byFatality: false,
    });

    const originalData = props.data;

    useEffect(() => {
        // setOriginalData(props.data);
        setModifiedData([...originalData]);
        console.log("COUNTY LIST");
    }, [originalData]);

    const handleChange = (e) => {
        const string = e.target.value.toLowerCase();
        const result = originalData.filter((county) =>
            `${county.state_name} - ${county.county_name}`
                .toLowerCase()
                .includes(string)
        );
        console.log("change handled");

        if (sortState.byState) {
            setModifiedData(result);
        } else if (sortState.byCases) {
            console.log(result);
            setModifiedData(
                result.sort((a, b) => {
                    return b.confirmed - a.confirmed;
                })
            );
        } else if (sortState.byDeaths) {
            setModifiedData(
                result.sort((a, b) => {
                    return b.death - a.death;
                })
            );
        } else if (sortState.byFatality) {
            setModifiedData(
                result.sort((a, b) => {
                    return (
                        parseFloat(b.fatality_rate) -
                        parseFloat(a.fatality_rate)
                    );
                })
            );
        } else {
            console.log("change not properly handled in sort");
        }
    };

    const sortByCases = () => {
        setSortState({
            byState: false,
            byCases: true,
            byDeaths: false,
            byFatality: false,
        });
        setModifiedData([
            ...modifiedData.sort((a, b) => {
                return b.confirmed - a.confirmed;
            }),
        ]);
    };

    const sortByDeaths = () => {
        console.log("called");
        setSortState({
            byState: false,
            byCases: false,
            byDeaths: true,
            byFatality: false,
        });
        setModifiedData([
            ...modifiedData.sort((a, b) => {
                return b.death - a.death;
            }),
        ]);
    };

    const sortByFatalityRate = () => {
        setSortState({
            byState: false,
            byCases: false,
            byDeaths: false,
            byFatality: true,
        });
        setModifiedData([
            ...modifiedData.sort((a, b) => {
                return (
                    parseFloat(b.fatality_rate) - parseFloat(a.fatality_rate)
                );
            }),
        ]);
    };

    const sortByStates = () => {
        setSortState({
            byState: true,
            byCases: false,
            byDeaths: false,
            byFatality: false,
        });
        console.log("invoked");
        setModifiedData([...originalData]);
    };

    return (
        <div className="side" id="county-list">
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
                    <i className="fas fa-bars"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item sort-by-states" onClick={sortByStates}>
                        Sort by states (default)
                    </a>
                    <a className="dropdown-item sort-by-cases" onClick={sortByCases}>
                        Sort by cases
                    </a>
                    <a className="dropdown-item sort-by-death" onClick={sortByDeaths}>
                        Sort by deaths
                    </a>
                    <a className="dropdown-item sort-by-fatality" onClick={sortByFatalityRate}>
                        Sort by fatality rate
                    </a>
                </div>
            </div>
            <ul>
                {modifiedData
                    ? modifiedData.map((county, i) => {
                          return (
                              <li
                              className="county-list-item"
                                  key={i}
                                  onClick={props.onClick.bind(
                                      this,
                                      county.county_name,
                                      county.state_name
                                  )}
                                  onMouseEnter={props.onHover.bind(
                                      this,
                                      county.county_name,
                                      county.state_name
                                  )}
                                  onMouseLeave={props.onLeave.bind(
                                      this,
                                      county.county_name,
                                      county.state_name
                                  )}
                              >
                                  {county.state_name} - {county.county_name}
                              </li>
                          );
                      })
                    : null}
            </ul>
        </div>
    );
};

export default CountyList;
