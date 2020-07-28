import React from "react";
import "../RightSideBar.css";

const RightSideBar = (props) => {
    console.log(props.data);
    return (
        <div class="side">
            <div class="headerInfo">Cases overview</div>
            <div id="state">
                State:
                <item id="byState">
                    <p>
                    {props.data.state_name}
                    </p>
                </item>
            </div>
            <div id="county">
                County:
                <item id="byCounty">
                    <p>
                    {props.data.county_name}
                    </p>
                </item>
            </div>
            <section class="grid-container">
                <div class="grid-item confirmed">
                    Confirmed:
                    <p>{props.data.confirmed}</p>
                </div>
                <div class="grid-item income">
                    New Cases:
                    <p>{props.data.new}</p>
                </div>
                <div class="grid-item recovered">
                    New Deaths:
                    <p>{props.data.new_death}</p>
                </div>
                <div class="grid-item deaths">
                    Total Deaths:
                    <p>{props.data.death}</p>
                </div>
                <div class="grid-item race">
                    Fatality Rate:
                    <p>{props.data.fatality_rate}</p>
                </div>
                <div class="grid-item average-age">
                    Average age:
                </div>
            </section>
        </div>
    );
};

export default RightSideBar;
