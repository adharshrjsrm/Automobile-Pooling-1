import './App.css';
import MyHome from "./home/MyHome"
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './passenger/components/userList/UserList';
import RideHistory from './passenger/components/ridehistory/RideHistory';
import PassengerProfile from './passenger/components/profile/PassengerProfile';
import OwnerDashboard from "./owner/components/dashboard/OwnerDashboard";
import PassengerDashboard from "./passenger/components/dashboard/PassengerDashboard";
import User from "./owner/components/user/User";
import Vehicle from "./owner/components/user/Vehicle";

import NewUser from "./owner/components/newUser/NewUser";
import NewVehicle from "./owner/components/newUser/NewVehicle";
import Ride from "./owner/components/ride/Ride";
import { ViewAgenda } from '@mui/icons-material';
import View from './passenger/components/widgetLg/View';
import Favorite from "./passenger/components/widgetSm/Favorite";



function App() {
  return (
    
      <Router>

     <Switch>

         <Route exact path='/' component={MyHome} />
         <Route exact path='/home' component={MyHome} />

          <Route exact path="/">
            <MyHome />
          </Route>
          <Route exact path = '/home' component = {MyHome}/>

          <PrivateRoute exact path='/users' component={UserList} />
          <PrivateRoute exact path='/vehicle' component={Vehicle} />
          <PrivateRoute exact path='/ridehistory' component={RideHistory} />
          <PrivateRoute exact path='/profile' component={User} />
          <PrivateRoute exact path='/ride' component={Ride} />
          <PrivateRoute exact path='/newvehicle' component={NewVehicle} />
          <PrivateRoute exact path='/newuser' component={NewUser} />
          <PrivateRoute exact path='/ownerdashboard' component={OwnerDashboard} />
          <PrivateRoute exact path='/passengerprofile' component={PassengerProfile} />
          <PrivateRoute exact path='/view' component={View} />
          <PrivateRoute exact path='/passengerdashboard' component={PassengerDashboard} />
          <PrivateRoute exact path='/favorite' component={Favorite} />


         

        </Switch>
    </Router>
    
    
  );
 
    
}

export default App;
