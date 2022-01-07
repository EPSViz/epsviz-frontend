import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input.js";
import Results from "./components/Results";
import ScatterChart from "./components/ScatterChart.js";

function App() {
  const [chartData, setChartData] = useState([]);

  console.log(chartData);

  const childToParent = () => {};

  return (
    <div className="App" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="App-container">
        <Input childToParent={childToParent} />
      </div>
      <div className="Chart-container">
        <ScatterChart />
      </div>
      <div className="App-container">
        <Results chartData={chartData}></Results>
      </div>
    </div>
  );
}

export default App;
