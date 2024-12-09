import React from 'react';
import { Chart } from "react-google-charts";


export default function Pietitle() {

     const piedata = [
        ["Valgfag", "Antal "],
        ["Content", 48],
        ["UX", 15],
        ["Frontend", 22]
      ];

      const options = {
        colors: ["#3494ba", "#58b6c0", "#75bda7"],
      };


  return (
    <div>

<Chart 
      chartType="PieChart"
      data={piedata}
      options={options}  
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}
