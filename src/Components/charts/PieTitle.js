import React from 'react';
import { Chart } from "react-google-charts";


export default function Pietitle() {

     const piedata = [
        ["Titler", "Antal annoncer"],
        ["Account Manager", 48],
        ["Software udvikler", 39],
        ["E-commerce", 35],
        ["Content creator", 20],
        ["Backend udvikler", 24],
      ];

      const options = {
        colors: ["#3494ba", "#58b6c0", "#75bda7", "#7a8c8e", "#84acb6"],
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
