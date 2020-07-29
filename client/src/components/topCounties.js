import React from "react"
import "../topCounties.css"

const topCounties = () => {
    return (
        <div class="side" id="topContainer">
            <div id="topSelector">
               <input type="button" value="Deaths"></input>
               <input type="button" value="Cases"></input>
               <input type="button" value="Mortality"></input>
            </div>
            <div class="countyHolder">1</div>
            <div class="countyHolder">2</div>
            <div class="countyHolder">3</div>
            <div class="countyHolder">4</div>
            <div class="countyHolder">5</div>
        </div>
    );
};

export default topCounties;