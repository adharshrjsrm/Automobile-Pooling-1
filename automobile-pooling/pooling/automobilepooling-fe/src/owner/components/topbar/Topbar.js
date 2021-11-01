import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,AccountCircle } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="Title">SRM Technologies Car Pooling</div>
        </div>
        <div className="topRight">
          < AccountCircle alt="" className="topAvatar" />
         Owner
        </div>
      </div>
    </div>
  );
}
