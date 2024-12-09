import React from "react";
import Addlist from "../Components/AddList.js";
import Addinfo from "../Components/AddInfo.js";
import Joblist from "../Components/JobList.js";
import Header from "../Components/Header.js";
import Leftsite from "../Components/LeftSite.js";

export default function AddPage() {
  return (
    <div className="page adds main">
      <Header />
      <Leftsite />
      <Joblist />
      <Addinfo/>
      <Addlist />
    </div>
  );
}
