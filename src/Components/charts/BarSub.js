import React from "react";
import { Chart } from "react-google-charts";

export default function Pietitle() {
  const bardata = [
    ["valgfag", "Antal"],
    ["Dataanalyse", 25],
    ["Video produktion", 52],
    ["Branding", 28],
    ["Marketing", 40],
  ];

  const options = {
    colors: ["#3494ba"],
    width: ["95%"],
    height: 300,
  };

  return (
    <div>
      <Chart
        chartType="BarChart"
        data={bardata}
        options={options}
        width={"100%"}
        height={"300px"}
      />
    </div>
  );
}
