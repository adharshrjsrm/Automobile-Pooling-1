import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,AccountCircle } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SRM Technologies Car Pooling</span>
        </div>
        <div className="topRight">
          < AccountCircle alt="" className="topAvatar" />
          Divya<br/>
          Owner
        </div>
      </div>
    </div>
  );
}
