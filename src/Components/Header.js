import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FiPrinter, FiDownload, FiShare2 } from "react-icons/fi";
import Download from "./Download.js";
import Share from "./Share.js";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(true);
  }, [isActive]);

  // print
  function printPage() {
    window.print();
  }

  return (
    <header className="header ">
      <div className=" headeruser flexRow">
        <FaUsers className="userIcon" />
        <div className="infotext">
          <h4>852 søgeresultater</h4>
          <p>2.389.412 jobannoncer</p>
        </div>
      </div>

      <div className="headerbntwrap">
        <div className="download headerbnt">
          <Download />
          <FiDownload />
        </div>

        <div onClick={printPage} className="print headerbnt">
          <span>Print</span>
          <FiPrinter />
        </div>
        <div className="share headerbnt">
          <Share/>
          <FiShare2 />
        </div>
      </div>

      <ul className="headerNav">
        <NavLink to="/jobs" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>Andre Jobtitler</span>
        </NavLink>
        <span>|</span>
        <NavLink to="/subject" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>Valgfag</span>
        </NavLink>
        <span>|</span>
        <NavLink to="/companys" className={({ isActive }) => (isActive ? "active" : "")}>
          <span>Virksomheder</span>
        </NavLink>
      </ul>
    </header>
  );
}
