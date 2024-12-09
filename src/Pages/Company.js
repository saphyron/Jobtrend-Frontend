import React from "react";
import Addlist from "../Components/AddList.js";
import Cominfo from "../Components/ComInfo.js";
import Comlist from "../Components/ComList.js";
import Header from "../Components/Header.js";
import Leftsite from "../Components/LeftSite.js";

export default function Companys() {
  return (
    <div className="page coms main">
      <Header />
      <Leftsite />
      <Comlist />
      <Cominfo />
      <Addlist />
    </div>
  );
}
