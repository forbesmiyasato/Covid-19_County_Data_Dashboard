import React, {useState} from "react"
import "../colors.css"
import "../map.css"

var color1 = "#D48166"
var color2 = "#FC4E2A"
var color3 = "#BD0026"

const showOptions = () =>{
    if(document.getElementById("access-options").style.display == "none"){
        document.getElementById("access-options").style.display = "block"
    }
    else {
        document.getElementById("access-options").style.display = "none"
    }
}


const setColor1 = (color) =>{
    color1 = color
}
const setColor2 = (color) =>{
    color2 = color
}
const setColor3 = (color) =>{
    color3 = color
}

const getColor1 = () =>{
    return color1
}
const getColor2 = () =>{
    return color2
}
const getColor3 = () =>{
    return color3
}


const AccessColors = (props) => {
    const [color, setColor] = useState({
        standard1: "#D48166",
        standard2: "#FC4E2A",
        standard3: "#BD0026",
        protanopia1: "#C2ACFF",
        protanopia2: "#6F3BFF",
        protanopia3: "#1F0076",
        protanomaly1: "#6F65FF",
        protanomaly2: "#2F25BB",
        protanomaly3: "#08007E",
        deuteranopia1: "#A395FF",
        deuteranopia2: "#5646BC",
        deuteranopia3: "#13008C",
        deuteranomaly1: "#C1BAF8",
        deuteranomaly2: "#726AB2",
        deuteranomaly3: "#39316F",
        tritanopia1: "#71DEE1",
        tritanopia2: "#00C4CB",
        tritanopia3: "#00797D",
        tritanomaly1: "#B0A4FD",
        tritanomaly2: "#503EC7",
        tritanomaly3: "#251688",
        achromatopsia1: "#FF9F9F",
        achromatopsia2: "#C94646",
        achromatopsia3: "#720F0F",
        achromatomally1: "#FF8FC9",
        achromatomally2: "#FF4EA9",
        achromatomally3: "#F90081"

        
    });

    const standard = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.standard1
            setColor1(color.standard1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.standard2
            setColor2(color.standard2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.standard3
            setColor3(color.standard3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.standard1
        }
        props.colorChange();
    }

    const protanopia = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.protanopia1
            setColor1(color.protanopia1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.protanopia2
            setColor2(color.protanopia2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.protanopia3
            setColor3(color.protanopia3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.protanopia1
        }
        props.colorChange();
    }

    const protanamoly = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.protanomaly1
            setColor1(color.protanomaly1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.protanomaly2
            setColor2(color.protanomaly2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.protanomaly3
            setColor3(color.protanomaly3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.protanomaly1
        }
        props.colorChange();
    }

    const deuteranopia = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.deuteranopia1
            setColor1(color.deuteranopia1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.deuteranopia2
            setColor2(color.deuteranopia2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.deuteranopia3
            setColor3(color.deuteranopia3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.deuteranopia1
        }
        props.colorChange();
    }

    const deuteranomaly = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.deuteranomaly1
            setColor1(color.deuteranomaly1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.deuteranomaly2
            setColor2(color.deuteranomaly2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.deuteranomaly3
            setColor3(color.deuteranomaly3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.deuteranomaly1
        } 
        props.colorChange();
    }

    const tritanopia = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.tritanopia1
            setColor1(color.tritanopia1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.tritanopia2
            setColor2(color.tritanopia2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.tritanopia3
            setColor3(color.tritanopia3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.tritanopia1
        } 
        props.colorChange();
    }

    const tritanomaly = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.tritanomaly1
            setColor1(color.tritanomaly1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.tritanomaly2
            setColor2(color.tritanomaly2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.tritanomaly3
            setColor3(color.tritanomaly3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.tritanomaly1
        }
        props.colorChange();
    }

    const achromatopsia = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.achromatomally1
            setColor1(color.achromatopsia1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.achromatopsia2
            setColor2(color.achromatopsia2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.achromatopsia3
            setColor3(color.achromatopsia3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.achromatopsia1
        }
        props.colorChange();
    }

    const achromatomally = () =>{
        let color1 = document.getElementsByClassName("severity-1")
        for(let i = 0; i < color1.length; ++i){
            color1[i].style.fill = color.achromatomally1
            setColor1(color.achromatomally1)
        }
        let color2 = document.getElementsByClassName("severity-2")
        for(let i = 0; i < color2.length; ++i){
            color2[i].style.fill = color.achromatomally2
            setColor2(color.achromatomally2)
        }
        let color3 = document.getElementsByClassName("severity-3")
        for(let i = 0; i < color3.length; ++i){
            color3[i].style.fill = color.achromatomally3
            setColor3(color.achromatomally3)
        }
        var background = document.getElementsByTagName('view')
        for(let i = 0; i < background.length; ++i){
            background[i].style.backgroundColor = color.achromatomally1
        } 
        props.colorChange();
    }
    

    
    return (
        <div class="accessibility-menu">
            <button class="drop" onClick={showOptions}>Colorblind Options <i id="down-arrow" class='fa fa-angle-down'></i></button>
            <ul id="access-options">
                <li class="access-item" id="access-1" onClick={standard}>Standard</li>
                <li class="access-item" id="access-2" onClick={protanopia}>Protanopia</li>
                <li class="access-item" id="access-3" onClick={protanamoly}>Protanomaly</li>
                <li class="access-item" id="access-4" onClick={deuteranopia}>Deuteranopia</li>
                <li class="access-item" id="access-5" onClick={deuteranomaly}>Deuteranomaly</li>
                <li class="access-item" id="access-6" onClick={tritanopia}>Tritanopia</li>
                <li class="access-item" id="access-7" onClick={tritanomaly}>Tritanomaly</li>
                <li class="access-item" id="access-8" onClick={achromatopsia}>Achromatopsia</li>
                <li class="access-item" id="access-8" onClick={achromatomally}>Achromatomaly</li>
            </ul>
        </div>
    )
}

export default AccessColors
export {
    getColor1,
    getColor2,
    getColor3,
}