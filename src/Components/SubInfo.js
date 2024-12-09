import React from "react";
import Pietitle from "./charts/PieSub.js";
import Barsub from "./charts/BarSub.js";

export default function Subinfo() {
  return (
    <div className="subinfo flexColumn">
      <div className="jobinfotext">
        <h2>Overblik</h2>
        <p>
          Her er et overblik over hvilke faglige kompetencer virksomhederne eftersørger når de søger
          en ny medarbejder, med de jobtitler som dimittender med en multimediedesigneruddannelse,
          er kvalificeret til at blive ansat som.
        </p>
      </div>

      <div className="cirkelsection flexColumn">
        <h3>Nuværende valgfag</h3>
        <p>Mest efterspurgte af de nuværende valgfag</p>

        <div className="pie">
          <Pietitle />
        </div>
      </div>

      <div className="cirkelsection flexColumn">
        <h3>Valgfags forslag</h3>
        <p>
          De mest efterspurgte faglige kompetencer, der ikke høre under nogen af de nuværende
          valgfag.
        </p>
        <div className="brancedia">
          <Barsub />
        </div>
      </div>
    </div>
  );
}
