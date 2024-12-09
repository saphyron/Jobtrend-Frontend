import React from "react";
import kort from "../images/kort.jpg";
import Bartitle from "./charts/BarTitle.js";

export default function Cominfo() {
  return (
    <div className="cominfo flexColumn">
      <div className="jobinfotext">
        <h2>Overblik</h2>
        <p>
          Her er et overblik over hvilke virksomheder der ansætter dimittender med de
          kvalifikationer som en multimediedesigneruddannelse giver.
        </p>
      </div>

      <div className="cirkelsection flexColumn">
        <h3>Kort over virksomhederne</h3>
        <p>Mest efterspurgte af de nuværende valgfag</p>

        <div className="pie">
          <img src={kort} alt="kort" className="map" />
        </div>
      </div>

      <div className="cirkelsection flexColumn">
        <h3>Brancher</h3>
        <p>
          Virksomheder der søger medarbejdere med samme kompetencer som en multimediedesigner,
          bliver typisk ansat indenfor disse brancher.
        </p>
        <div className="brancedia">
          <Bartitle />
        </div>
      </div>
    </div>
  );
}
