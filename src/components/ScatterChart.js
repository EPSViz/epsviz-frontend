import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// test data
let test = [
  { EPSReportDate: "2021-10-20", consensusEPS: "1.59", actualEPS: "1.86" },
  { EPSReportDate: "2021-10-20", consensusEPS: "1.59", actualEPS: "1.86" },
  { EPSReportDate: "2021-07-26", consensusEPS: "0.98", actualEPS: "1.45" },
  { EPSReportDate: "2021-04-26", consensusEPS: "0.79", actualEPS: "0.93" },
  { EPSReportDate: "2021-01-27", consensusEPS: "1.03", actualEPS: "0.8" },
  { EPSReportDate: "2020-10-21", consensusEPS: "0.58", actualEPS: "0.76" },
  { EPSReportDate: "2020-07-22", consensusEPS: "-0.04", actualEPS: "0.44" },
  { EPSReportDate: "2020-04-29", consensusEPS: "-0.06", actualEPS: "0.23" },
  { EPSReportDate: "2020-01-29", consensusEPS: "0.35", actualEPS: "0.41" },
  { EPSReportDate: "2019-10-23", consensusEPS: "-0.08", actualEPS: "0.37" },
  { EPSReportDate: "2019-07-24", consensusEPS: "-0.07", actualEPS: "-0.22" },
  { EPSReportDate: "2019-04-24", consensusEPS: "-0.14", actualEPS: "-0.58" },
  { EPSReportDate: "2019-01-30", consensusEPS: "0.44", actualEPS: "0.39" },
  { EPSReportDate: "2018-10-24", consensusEPS: "-0.04", actualEPS: "0.58" },
  { EPSReportDate: "2018-08-01", consensusEPS: "-2.92", actualEPS: "-3.06" },
  { EPSReportDate: "2018-05-02", consensusEPS: "-3.58", actualEPS: "-3.35" },
  { EPSReportDate: "2018-02-07", consensusEPS: "-3.09", actualEPS: "-3.04" },
  { EPSReportDate: "2017-11-01", consensusEPS: "-2.2", actualEPS: "-2.92" },
  { EPSReportDate: "2017-08-02", consensusEPS: "-1.82", actualEPS: "-1.33" },
  { EPSReportDate: "2017-05-03", consensusEPS: "-0.81", actualEPS: "-1.33" },
  { EPSReportDate: "2017-02-22", consensusEPS: "-0.43", actualEPS: "-0.69" },
  { EPSReportDate: "2016-10-26", consensusEPS: "-0.54", actualEPS: "0.71" },
  { EPSReportDate: "2016-08-03", consensusEPS: "-0.51", actualEPS: "-1.61" },
  { EPSReportDate: "2016-05-04", consensusEPS: "-0.58", actualEPS: "-1.45" },
  { EPSReportDate: "2016-02-10", consensusEPS: "0.1", actualEPS: "-0.87" },
  { EPSReportDate: "2015-11-03", consensusEPS: "-0.49", actualEPS: "-0.58" },
  { EPSReportDate: "2015-08-05", consensusEPS: "-0.6", actualEPS: "-0.48" },
  { EPSReportDate: "2015-05-06", consensusEPS: "-0.5", actualEPS: "-0.36" },
  { EPSReportDate: "2015-02-11", consensusEPS: "0.31", actualEPS: "-0.13" },
  { EPSReportDate: "2014-11-05", consensusEPS: "-0.01", actualEPS: "0.02" },
  { EPSReportDate: "2014-07-31", consensusEPS: "0.04", actualEPS: "0.11" },
  { EPSReportDate: "2014-05-07", consensusEPS: "0.1", actualEPS: "0.12" },
  { EPSReportDate: "2014-02-19", consensusEPS: "0.21", actualEPS: "0.33" },
  { EPSReportDate: "2013-11-05", consensusEPS: "0.11", actualEPS: "0.12" },
  { EPSReportDate: "2013-08-07", consensusEPS: "-0.17", actualEPS: "0.2" },
  { EPSReportDate: "2013-05-08", consensusEPS: "0.04", actualEPS: "0.12" },
  { EPSReportDate: "2013-02-20", consensusEPS: "-0.53", actualEPS: "-0.65" },
  { EPSReportDate: "2012-11-05", consensusEPS: "-0.9", actualEPS: "-0.92" },
  { EPSReportDate: "2012-07-25", consensusEPS: "-0.92", actualEPS: "-0.89" },
  { EPSReportDate: "2012-05-09", consensusEPS: "-0.69", actualEPS: "-0.76" },
  { EPSReportDate: "2012-02-15", consensusEPS: "-0.63", actualEPS: "-0.69" },
  { EPSReportDate: "2011-11-02", consensusEPS: "-0.59", actualEPS: "-0.55" },
  { EPSReportDate: "2011-08-03", consensusEPS: "-0.51", actualEPS: "-0.53" },
  { EPSReportDate: "2011-05-04", consensusEPS: "-0.51", actualEPS: "-0.44" },
  { EPSReportDate: "2011-02-15", consensusEPS: "-0.5", actualEPS: "-0.47" },
  { EPSReportDate: "2010-11-09", consensusEPS: "-0.43", actualEPS: "-0.37" },
];

let test2 = [
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
  { trend: "50" },
];

// format data into xy datapoints
function formatDataConsensus(test, test2) {
  const result = [];
  for (let i = 0; i < test.length; i++) {
    result.push({ x: test2[i].trend, y: test[i].consensusEPS });
  }
  return result;
}

function formatDataActual(test, test2) {
  const result = [];
  for (let i = 0; i < test.length; i++) {
    result.push({ x: test2[i].trend, y: test[i].actualEPS });
  }
  return result;
}

function ScatterChart({ chartData }) {
  return (
    <div>
      <h1>EPSViz Scatter Plot</h1>
      <Scatter
        data={data} // insert actual data here later
        options={options}
      />
    </div>
  );
}

const data = {
  labels: ["Consensus EPS", "Actual EPS"],
  datasets: [
    {
      label: "Consensus EPS",
      pointBackgroundColor: "Green",
      backgroundColor: "Green",
      data: formatDataConsensus(test, test2),
    },
    {
      label: "Actual EPS",
      pointBackgroundColor: "Red",
      backgroundColor: "Red",
      data: formatDataActual(test, test2),
    },
  ],
};

const options = {
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

export default connect(null, null)(ScatterChart);
