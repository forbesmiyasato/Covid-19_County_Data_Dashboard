const express = require("express");
const cors = require("cors");
let fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/all", function (req, res) {
    fs.readFile(__dirname + "/states/" + req.query.state + ".json", function (
        err,
        data
    ) {
        if (err) {
            console.log(err);
            res.send("No such State");
            return;
        }
        console.log(req.query);
        jsonData = JSON.parse(data.toString());
        let response = "No such county";
        let result = [];

        for (x in jsonData) {
            if (jsonData[x].geometry == undefined) {
                break;
            }
            let countyBoundary = new Object();
            countyBoundary.county = jsonData[x]["County Name"];
            let coordinates = getCoordinates(jsonData[x].geometry);
            countyBoundary.state = req.query.state;
            countyBoundary.shape = coordinates;
            result.push(countyBoundary);
        }
        response = result;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
    });
});

app.get("/api", function (req, res) {
    fs.readFile(__dirname + "/states/" + req.query.state + ".json", function (
        err,
        data
    ) {
        if (err) {
            console.log(err);
            res.send("No such State");
            return;
        }
        console.log(req.query);
        jsonData = JSON.parse(data.toString());
        let response = "No such county";
        for (x in jsonData) {
            if (jsonData[x]["County Name"] === req.query.county) {
                let coordinates = getCoordinates(jsonData[x].geometry);
                let countyBoundary = new Object();
                countyBoundary.state = req.query.state;
                countyBoundary.county = req.query.county;
                countyBoundary.shape = coordinates;
                response = countyBoundary;
                break;
            }
        }
        res.setHeader("Content-Type", "application/json");
        res.json(response);
    });
});

function getCoordinates(data) {
    let rawCoordinates = data.split(" ");
    let polishedCoordinates = [];
    for (x in rawCoordinates) {
        coord = rawCoordinates[x].split(",");
        polishedCoordinates.push(coord.reverse());
    }
    return polishedCoordinates;
}
// //For heroku
// app.use(express.static(path.resolve(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
// });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
