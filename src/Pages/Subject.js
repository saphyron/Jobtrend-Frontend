import React from "react";
import Sublist from "../Components/SubList.js";
import Subinfo from "../Components/SubInfo.js";
import Addlist from "../Components/AddList.js";
import Header from "../Components/Header.js";
import Leftsite from "../Components/LeftSite.js";

export default function Subject() {
  return (
    <div className="page subs main">
      <Header />
      <Leftsite />
      <Sublist />
      <Subinfo />
      <Addlist />
    </div>
  );
}
