
import FeaturedInfo from "../../pages/passengerdashboard/featuredInfo/FeaturedInfo";
import "../home/home.css";
import WidgetSm from "../../pages/passengerdashboard/widgetSm/WidgetSm";
import WidgetLg from "../../pages/passengerdashboard/widgetLg/WidgetLg";
import Sidebar from "../../pages/passengerdashboard/sidebar/Sidebar";

export default function Passengerdashboard() {
  return (
      <div className="container">
    <Sidebar/>
    <div className="home">
         
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </div>
  );
}
