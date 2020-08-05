
/*
import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
    const timelineData = props.data;
    const type = props.type;
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);

    useEffect (() => {
        const labelsArray = [];
        const dataArray = [];
        let prev = 0;
        for (const[key, value] of Object.entries(timelineData)) {
            labelsArray.push(key);
            dataArray.push(value[type] - prev);
            prev = value[type];
        }

        setLabels(labelsArray);
        setData(dataArray);
    }, [])

    console.log(timelineData);
    console.log(labels);
    console.log(data);


    const chartData = {
        labels: labels,
        datasets: [
            {
                label: type === 'cases' ? 'New Cases' : 'New Deaths',
                data: data,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            }
        ],
    };

    return <Line data={chartData} />;
};

export default LineChart;
*/
