import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Forum.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Forum() {
  return (
    <div className="Forum">
      <QHeader />
      <div className="Forum__content">
        <Sidebar />
         <Feed />
         {/* <Widget /> */}
      </div>
    </div>
  );
}

export default Forum;
