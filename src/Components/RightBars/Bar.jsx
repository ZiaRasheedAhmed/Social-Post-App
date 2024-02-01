import React from "react";
import "./Bar.css";

const Bar = ({ title }) => {
  return (
    <div>
      <div className="list-bar">
        <div className="item-bar">
          <div className="item-title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
