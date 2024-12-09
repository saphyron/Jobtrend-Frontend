import React from "react";
import { Chart } from "react-google-charts";

export default function Pietitle() {
  const bardata = [
    ["Branche", "Antal"],
    ["It og kommunikation", 87],
    ["Reklame", 52],
    ["Undervisning", 28],
    ["Hospitaler", 10],
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
