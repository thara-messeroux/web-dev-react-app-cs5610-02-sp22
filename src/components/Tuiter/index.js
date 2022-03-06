import React from "react";
import { Link } from "react-router-dom";
import ExploreComponent from "./ExploreComponent/ExploreComponent";
import ExploreScreen from "./ExploreComponent/ExploreScreen";
import NavigationSidebar from "./NavigationSidebar";
import PostSummaryList from "./PostSummaryList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import WhoToFollowListItem from "./WhoToFollowList/index.js";

const Tuiter = () => {
  return (
    <>
      {/* <h1>Tuiter</h1>
      <Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link> */}
      {/* 
      <PostSummaryItem
        post={{
          topic: "Web Development",
          userName: "",
          title: "jQuery",
          time: "last week",
          image: "./images/jquery.png",
          tweets: "122K",
        }}
      /> */}

      {/* <NavigationSidebar active="home" />
      <WhoToFollowListItem
        who={{
          avatarIcon: "../../../images/virgin.png",
          userName: "Virgin Galactic",
          handle: "virgingalactic",
        }}
      />

      <PostSummaryList /> */}
      <ExploreScreen/>
    </>
  );
};

export default Tuiter;
