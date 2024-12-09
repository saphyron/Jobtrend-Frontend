import React from "react";
import { NavLink } from "react-router-dom";
import EducationFilter from "./filters/EducationFilter.js";
import SkilleFilter from "./filters/SkillsFilter.js";
import TimeFilter from "./filters/TimeFilter.js";
import MapFilter from "./filters/MapFilter.js";
import RegionFilter from "./filters/RegionFilter.js";

export default function Leftsite() {
  function resetValue() {
    window.location.reload(false);
  }

  return (
    <div className=" leftsite flexColumn">
      <div className="bntwrap flexRow">
        <div className="bntfirst">Ekskludere</div>
        <div className="bntsec" onClick={resetValue}>
          Ryd søgningen
        </div>
      </div>

      <div className="leftborder">
        <h3>Uddannelser</h3>
        <EducationFilter />
      </div>

      <div className="leftborder">
        <h3>Skills</h3>
        <SkilleFilter />
      </div>

      <div className="leftborder">
        <h3>Periode</h3>
        <TimeFilter />
      </div>

      <div className="leftborder flexColumn">
        <h3>Sted</h3>
        <RegionFilter />
        <MapFilter />
      </div>

      <NavLink to="/Jobs">
        <div className="sbnt">Søg</div>
      </NavLink>
    </div>
  );
}
