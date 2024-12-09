import React from "react";
import { NavLink } from "react-router-dom";
import NavbarHome from "../Components/NavBarHome.js";
import { CiSearch, CiCircleCheck, CiBrightnessDown } from "react-icons/ci";
/*import { FaSistrix, FaRegCheckCircle } from "react-icons/fa";
import { FiSearch, FiCheckCircle, FiSun } from "react-icons/fi";*/

import Loop from "../images/loop.png";

export default function Home() {
  return (
    <div className="page home">
      <NavbarHome />
      <div className="flexColumn">
        <div className="homewrap flexRow">
          <div className="hometext flexColumn">
            <h2>Velkommen til Jobtrend</h2>
            <h3>kompetencematch mellem uddannelse og jobmarked</h3>
            <p>
              På Erhvervsakademi Aarhus er vores ambition at bedrive uddannelser, som kvalificerer
              dimittender bedst muligt, til det aktuelle arbejdsmarked. Efterspørgslen af
              forskellige kompetencer hos arbejdsgiverne er varierende fra branche til branche og år
              til år. Det kan derfor være vanskeligt for uddannelser at identificere og efterleve de
              agile behov og holde sig opdateret på matchet mellem uddannelse og arbejdsmarked.
            </p>

            <div className="homebnt flexRow">
              <div className="bnt readbnt">Læs mere</div>
              <NavLink to="/filterpage" className="bnt startbnt">
                <span>START</span>
              </NavLink>
            </div>
          </div>

          <div className="loop">
            <img src={Loop} alt="loop" />
          </div>
        </div>
        <div className="white ">
          <div className="cirkelwrap flexRow">
            <div className="cirkel">
              <CiSearch className="cirkelicon" />
              <p>At hjælpe med at identificere af eventuelle valgfag</p>
            </div>
            <div className="cirkel">
              <CiCircleCheck className="cirkelicon" />
              <p>At hjælpe med revision af studieordning</p>
            </div>
            <div className="cirkel">
              <CiBrightnessDown className="cirkelicon" />
              <p>At få støtte og inspirere tilrettelæggelsen af konkret undervisning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
