import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { useStoreState } from "easy-peasy";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// format data into xy datapoints

function formatDataActual(data) {
  if (data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].vec.sentiment);
      result.push({ x: data[i].vec.sentiment, y: data[i].vec.eps });
    }
    return result;
  } else {
    return [];
  }
}

// function formatDataActual(test, test2) {
//   const result = [];
//   for (let i = 0; i < test.length; i++) {
//     result.push({ x: test2[i].trend, y: test[i].actualEPS });
//   }
//   return result;
// }

function formatData(epsData) {
  var convertedData = [];

  if (epsData) {
    for (let i = 0; i < epsData.data.length; i++) {
      convertedData.push({
        x: epsData.data[i]["vec.sentiment"],
        y: epsData.data[i]["vec.eps"],
      });
    }
  }
  return convertedData;
}

function ScatterChart() {
  const searchHistory = useStoreState((state) => state.searchHistory);
  console.log(searchHistory);
  const epsData = searchHistory[searchHistory.length - 1];
  console.log("test", epsData);

  const data = {
    labels: ["Trend", "Actual EPS"],
    datasets: [
      {
        label: "Actual EPS",
        pointBackgroundColor: "Red",
        backgroundColor: "Red",
        data: formatData(epsData),
      },
    ],
  };

  return (
    <div>
      <h1>EPSViz Scatter Plot</h1>
      <Scatter
        key={Math.random()}
        redraw
        data={data} // insert actual data here later
        options={options}
      />
    </div>
  );
}

const options = {
  responsive: true,
  scales: {
    xAxis: {
      title: {
        display: true,
        color: "black",
        text: "Trend Score",
        font: {
          size: 20,
        },
      },
      type: "linear",
      max: 100,
      min: 0,
    },
    yAxis: {
      title: {
        display: true,
        color: "black",
        text: "EPS",
        font: {
          size: 20,
        },
      },
      type: "linear",
      // max: 20,
      // min: -20,
    },
  },
};

// const mapStateToProps = (state) => {
//   return {
//     eps: state.eps,
//     trends: state.trends,
//     rSquare: state.rSquare,
//     pValue: state.pValue,
//     nextPredictedEPS: state.nextPredictedEPS,
//   };
// };

export default ScatterChart;
