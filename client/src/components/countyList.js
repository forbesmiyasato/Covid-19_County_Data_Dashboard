import React from "react";
import '../countyList.css'

const countyList = (props) => {
    let data = props.data
    return (
        <div class="side">
            <ul>
                {data.map(county => {
                    return <li>{county.state_name} - {county.county_name}</li>
                })}
            </ul>
        </div>
    );
};

export default countyList;
