import './PassengerDB.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import FeaturedInfo from './components/featuredinfo/FeaturedInfo'
import WidgetLg from '../passenger/components/widgetLg/WidgetLg'
import WidgetSm from '../passenger/components/widgetSm/WidgetSm'

export default function PassengerDB() {
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


