import './PassengerDashboard.css'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import FeaturedInfo from '../featuredinfo/FeaturedInfo'
import WidgetLg from '../widgetLg/WidgetLg'
import WidgetSm from '../widgetSm/WidgetSm'

export default function PassengerDashboard() {
  return (
    <>
   
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
      </>
   
  );
}


