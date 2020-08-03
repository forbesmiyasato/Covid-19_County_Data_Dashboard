import React, {useState, useEffect} from "react";
import "../countyList.css";

const CountyList = (props) => {
    const [data, setData] = useState(props.data);
    const [filteredData, setFilteredData] = useState();
    useEffect(() => {
        setData(props.data)
    })

    const handleChange = (e) => {
        const string = e.target.value.toLowerCase();
        console.log(string);
        const result = data.filter(county => (`${county.state_name} - ${county.county_name}`.toLowerCase().includes(string)));
        setFilteredData(result);
    };

    return (
        <div class="side">
            <div className="search-box">
                <input
                    className="search-txt"
                    type="text"
                    placeholder="Search counties"
                    onChange={handleChange}></input>
                <button className="search-btn">
                    <i className="icon-basic-magnifier"></i>
                </button>
            </div>
            <ul>
                {filteredData ? 
                filteredData.map((county, i) => {
                    return (
                        <li key={i} onClick={props.onClick.bind(this, county.county_name, county.state_name)}>
                            {county.state_name} - {county.county_name}
                        </li>
                    );
                }) 
                :
                data.map((county, i) => {
                    return (
                        <li key={i} onClick={props.onClick.bind(this, county.county_name, county.state_name)}>
                            {county.state_name} - {county.county_name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CountyList;
