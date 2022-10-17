import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://drive.google.com/uc?export=view&id=1xeTuuFf5NNugOgSf-2yjtUXi3whybZp2"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sonny Sangha</h2>
        <h4>sonny.sangha@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viwed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,400</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("softwareenginering")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
