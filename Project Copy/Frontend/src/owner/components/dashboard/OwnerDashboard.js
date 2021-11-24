import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import "./dashboard.css";
import WidgetSm from "../widgetSm/WidgetSm";
import WidgetLg from "../widgetLg/WidgetLg";
import Topbar from "../../../passenger/components/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

export default function OwnerDashboard() {
  return (
      <div>
    <Topbar />
    <div className="container">
      <Sidebar />
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </div>
    </div>
  );
}
