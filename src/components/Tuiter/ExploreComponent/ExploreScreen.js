import React from "react";
import "../ExploreComponent/explore.css";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";


const ExploreScreen = () => {
  return (
    <div className="row mt-2">
      <div className="col-sm-2 col-md-3">
        <NavigationSidebar active="explore" />
      </div>
      <div className="col" style={{ position: "relative" }}>
        <ExploreComponent />
      </div>
      <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 right-sidebar">
        <WhoToFollowList />
      </div>
    </div>
  );
};
export default ExploreScreen;

// <div class="row">
//   <div class="col-sm-2 col-md-3">${NavigationSidebar()}</div>

//   <div class="col">${ExploreComponent()}</div>

//   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 right-sidebar">
//     ${WhoToFollowList()}
//   </div>
// </div>;
