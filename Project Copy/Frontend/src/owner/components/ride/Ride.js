import "./Ride.css"
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../../passenger/components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Ride() {
  return (
    <div>
    <Topbar/>
    <div className="container">
      <Sidebar />
    <div className="home">
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </div>
    </div>
  );
}