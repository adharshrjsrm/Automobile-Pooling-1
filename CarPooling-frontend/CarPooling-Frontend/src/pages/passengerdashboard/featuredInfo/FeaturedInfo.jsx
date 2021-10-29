import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from 'react-live-clock';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        {/* <span className="featuredTitle">Availability</span><br/> */}
        <div className="featuredMoneyContainer">
        <div class="form-check form-switch">
 
  {/* <div>
 
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label >Set availability status</label>
  </div> */}
</div>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </span>
          
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"></span>
          <span className="featuredMoneyRate">
           
          </span>
        </div>
       
      </div>
    </div>
  );
}
