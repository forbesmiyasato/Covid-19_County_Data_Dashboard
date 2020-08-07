import React from "react"
import "../colors.css"
import "../map.css"

    var color1 = "#BD0026"
    var color2 = "#FC4E2A"
    var color3 = "#D48166"

const showOptions = () =>{
    if(document.getElementById("access-options").style.display == "none"){
        document.getElementById("access-options").style.display = "block"
    }
    else {
        document.getElementById("access-options").style.display = "none"
    }
}

const standard = () =>{
    let color1 = document.getElementsByClassName("severity-1")
    for(let i = 0; i < color1.length; ++i){
        console.log(color1.length)
        color1[i].style.fill = "#D48166"
        setColor1("#D48166")
    }
    let color2 = document.getElementsByClassName("severity-2")
    for(let i = 0; i < color1.length; ++i){
        color2[i].style.fill = "#FC4E2A"
        setColor2("#FC4E2A")
    }
    let color3 = document.getElementsByClassName("severity-3")
    for(let i = 0; i < color1.length; ++i){
        color3[i].style.fill = "#BD0026"
        setColor3("#BD0026")
    }
}

const protanopia = () =>{
    let color1 = document.getElementsByClassName("severity-1")
    for(let i = 0; i < color1.length; ++i){
        color1[i].style.fill = "#C2ACFF"
        setColor1("#C2ACFF")
    }
    let color2 = document.getElementsByClassName("severity-2")
    for(let i = 0; i < color1.length; ++i){
        color2[i].style.fill = "#6F3BFF"
        setColor2("#6F3BFF")
    }
    let color3 = document.getElementsByClassName("severity-3")
    for(let i = 0; i < color1.length; ++i){
        color3[i].style.fill = "#1F0076"
        setColor3("#1F0076")
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


const accessColors = () => {  
    return (
        <div class="accessibility-menu">
            <button class="drop" onClick={showOptions}>Colorblind Options <i id="down-arrow" class='fa fa-angle-down'></i></button>
            <ul id="access-options">
                <li class="access-item" id="access-1" onClick={standard}>Standard</li>
                <li class="access-item" id="access-2" onClick={protanopia}>Protanopia</li>
                <li class="access-item" id="access-3" onClick={standard}>Protanomaly</li>
                <li class="access-item" id="access-4" onClick={standard}>Deuteranopia</li>
                <li class="access-item" id="access-5" onClick={standard}>Deuteranomaly</li>
                <li class="access-item" id="access-6" onClick={standard}>Tritanopia</li>
                <li class="access-item" id="access-7" onClick={standard}>Tritanomaly</li>
                <li class="access-item" id="access-8" onClick={standard}>Achromatopsia</li>
                <li class="access-item" id="access-8" onClick={standard}>Achromatomaly</li>
            </ul>
        </div>
    )
}

export default accessColors
export {
    getColor1,
    getColor2,
    getColor3,
}