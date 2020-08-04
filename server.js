const express = require("express");
const cors = require("cors");
const path = require('path');
let fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/all", function (req, res) {
    console.log("Received Request")
    fs.readFile(__dirname + "/states/" + req.query.state + ".json", function (
        err,
        data
    ) {
        if (err) {
            console.log(err);
            res.send("No such State");
            return;
        }
        jsonData = JSON.parse(data.toString());
        let result = [];

        for (x in jsonData) {
            if (jsonData[x].geometry == undefined) {
                break;
            }
            let countyBoundary = new Object();
            countyBoundary.county = jsonData[x]["County Name"];
            countyBoundary.state = jsonData[x]["Geographic Name"].split(", ")[1];
            let coordinates = getCoordinates(jsonData[x].geometry);
            countyBoundary.shape = coordinates;
            result.push(countyBoundary);
        }
        res.setHeader("Content-Type", "application/json");
        res.json(result);
    });
});

function getCoordinates(data) {
    let rawCoordinates = data.split(" ");
    let polishedCoordinates = [];
    for (x in rawCoordinates) {
        coord = rawCoordinates[x].split(",");
        let coords = new Object();
        coords.lat = parseFloat(coord[1]);
        coords.lng = parseFloat(coord[0]);
        polishedCoordinates.push(coords);
        // if (coords.lat == null || coords.lat == NaN || coords.lat == undefined) {
        //     console.log(coords.lat)
        // }
        // if (coords.lng == null || coords.lng == NaN || coords.lng == undefined) {
        //     console.log(coords.lng)
        // }
    }
    return polishedCoordinates;
}
//For heroku
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
