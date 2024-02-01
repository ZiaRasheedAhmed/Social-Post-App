import React from "react";
import Bar from "./Bar";
import "./Topbar.css";

const TopBar = ({completion}) => {
  return (
    <>
      <div className="rightTop">
        <div className="h2">
            <h2>Profile Completion</h2>
        </div>
        <div className="item-progress">
          <div className="progress-bar" style={{ width: `${completion}%` }}>
            73% Completed
          </div>
        </div>
        <Bar title="General information" />
        <Bar title="Work Experience" />
        <Bar title="Profile Photo" />
        <Bar title="Cover Letter" />
      </div>
    </>
  );
};

export default TopBar;
