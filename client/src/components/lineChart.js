import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getColor1, getColor3 } from "./colors";

const LineChart = (props) => {
    const timelineData = props.data;
    const type = props.type;
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);

    //converter from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
    function hexToRgbA(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)';
        }
        throw new Error('Bad Hex');
    }

    useEffect(() => {
        const labelsArray = [];
        const dataArray = [];
        let prev = 0;
        if (timelineData) {
            for (const [key, value] of Object.entries(timelineData)) {
                labelsArray.push(key);
                dataArray.push(value[type] - prev);
                prev = value[type];
            }

            setLabels(labelsArray);
            setData(dataArray);
        }
    }, []);

    console.log(timelineData);
    console.log(labels);
    console.log(data);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: type === "cases" ? "New Cases" : "New Deaths",
                data: data,
                fill: true,
                backgroundColor: hexToRgbA(getColor1()),
                borderColor: getColor1(),
            },
        ],
    };

    return <Line data={chartData} />;
};

export default LineChart;
