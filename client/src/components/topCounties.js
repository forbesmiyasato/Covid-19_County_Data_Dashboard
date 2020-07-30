import React from "react"
import "../topCounties.css"

const findGreatest = (data, number) => {
    //searching for the highest states up to a certain number
    let greatestDeaths = new Array();
    let current = null;
    for(var i = 0; i < data.length; ++i){
        //if county and state name are the same, its a state
        if(data[i].county_name == data[i].state_name){
            //first push up to the number specified
            console.log(data[i])
            if(greatestDeaths.length < number){
                greatestDeaths.push(data[i])
            }
            else{
                //then start replacing when a greater is found
                for(var j = 0; j < number; ++j){
                    if(data[i].death > greatestDeaths[j].death){
                        current = greatestDeaths[j]
                        greatestDeaths[j] = data[i]
                        //if we make a replacement we need to take out the smallest and not the current
                        //value from the list
                        console.log(current)
                        for(var k = 0; k < number; ++k){
                            if(current != null && greatestDeaths[k].death < current.death){
                                console.log(greatestDeaths[k])
                                let temp = greatestDeaths[k]
                                greatestDeaths[k] = current
                                current = temp
                                break
                            }
                        }
                        break
                    }
                    
                }
            }
        }
    }
    console.log(greatestDeaths)
}


const topCounties = (props) => {
    let data = props.data
    findGreatest(data, 5)
    return (
        <div class="side" id="topContainer">
            <div id="topSelector">
               <input type="button" value="Deaths"></input>
               <input type="button" value="Cases"></input>
               <input type="button" value="Recovered"></input>
               <input type="button" value="Mortality"></input>
            </div>
            <div class="countyHolder">
                <p clas="deaths">

                </p>
                <p class="cases">
                    
                </p>
                <p class="recovered">

                </p>
                <p class="mortality">

                </p>
            </div>
            <div class="countyHolder">

            </div>
            <div class="countyHolder">

            </div>
            <div class="countyHolder">

            </div>
            <div class="countyHolder">

            </div>
        </div>
    );
};

export default topCounties;