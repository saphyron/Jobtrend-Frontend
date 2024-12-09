import React from "react";
import Pietitle from "./charts/PieTitle.js";
import Bartitle from "./charts/BarTitle.js";


export default function Jobinfo() {
  
  return (
    <div className="jobinfo flexColumn">
      <div className="jobinfotext">
        <h2>Overblik</h2>
        <p>
          Her er et overblik over hvilke andre stillingsbetegnelser, som dimittender med en
          multimediedesigneruddannelse, er kvalificeret til at blive ansat som.
        </p>
      </div>

      <div className="cirkelsection flexColumn">
        <h3>Kompetencer</h3>
        <p>
          Mest efterspurgte kvalifikationer i stillingsbetegnelser, som kan besides med de
          kompetancer som en multimediedesigner har.
        </p>

        <div id="pie">
          <Pietitle />
        </div>
      </div>

      <div className="cirkelsection flexColumn">
        <h3>Brancher</h3>
        <p>
          Folk med samme kompetencer som en multimediedesigner, bliver typisk ansat indenfor disse
          brancher
        </p>
        <div className="brancedia">
          <Bartitle/>
        </div>
      </div>
    </div>
  );
}
