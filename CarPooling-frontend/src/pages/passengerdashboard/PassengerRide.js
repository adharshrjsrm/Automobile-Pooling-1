import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "../home/home.css";
import WidgetSm from "../../pages/passengerdashboard/widgetSm/WidgetSm";
import WidgetLg from "../../pages/passengerdashboard/widgetLg/WidgetLg";
import Topbar from "../../pages/passengerdashboard/topbar/Topbar";
import Sidebar from "../../pages/passengerdashboard/sidebar/Sidebar";

export default function PassengerRide() {
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