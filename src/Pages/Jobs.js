import React from "react";
import Addlist from "../Components/AddList.js";
import Jobinfo from "../Components/JobInfo.js";
import Joblist from "../Components/JobList.js";
import Header from "../Components/Header.js";
import Leftsite from "../Components/LeftSite.js";

export default function Jobs() {
  return (
    <div className="page jobs main">
      <Header />
      <Leftsite />
      <Joblist />
      <Jobinfo />
      <Addlist />
    </div>
  );
}
