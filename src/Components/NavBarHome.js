import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BsChatRightFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useOnOutsideClick } from "./OutsideClick.js";
import Logo from "../images/logo.png";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const navRef = useRef();

  // Toggle Nav
  function handleNavClick() {
    navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true);
    setIsActive(!isActive);
  }

  // Close Nav on outside click
  useOnOutsideClick(navRef, () => {
    if (navIsOpen) setNavIsOpen(false);
  });

  return (
    <div id="navhome">
      <div className="topbar">
        <div className="topbarLeft">
          <NavLink to="/Home" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>
              <img className="logo" src={Logo} alt="logo" />
            </span>
          </NavLink>
        </div>

        <div className="topbarRight">
          <div className="topbarItem">
            <NavLink to="/Ask" className={({ isActive }) => (isActive ? "active" : "")}>
              <BsChatRightFill className="topBarIcon" />
              <span>Spørg</span>
            </NavLink>
          </div>

          <div className="topbarItem">
            <NavLink to="/my-page" className={({ isActive }) => (isActive ? "active" : "")}>
              <FaUserAlt className="topBarIcon" />
              <span>Min side</span>
            </NavLink>
          </div>

          <nav ref={navRef}>
            <div className="burger" onClick={handleNavClick}>
              <em></em>
            </div>
            <ul
              className={`navList ${navIsOpen ? "navOpen" : "navClosed"}`}
              onClick={() => setNavIsOpen(false)}
            >
              <li className="toplistItem">
                <NavLink to="/filterpage" className={({ isActive }) => (isActive ? "active" : "")}>
                  Forside
                </NavLink>
              </li>
              <li className="toplistItem">
                <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>
                  Søgehistorik
                </NavLink>
              </li>
              <li className="toplistItem">
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  Om Jobtrend
                </NavLink>
              </li>
              <li className="toplistItem">
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                  Kontakt
                </NavLink>
              </li>

              <li className="toplistItem">
                <NavLink to="/help" className={({ isActive }) => (isActive ? "active" : "")}>
                  Hjælp
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
