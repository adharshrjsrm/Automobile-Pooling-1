import './App.css';
import MyHome from "./home/MyHome"
import PassengerDB from './passenger/PassengerDB';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './passenger/components/userList/UserList';
import RideHistory from './passenger/components/ridehistory/RideHistory';
import PassengerProfile from './passenger/components/profile/PassengerProfile';
import OwnerDashboard from "./owner/components/dashboard/OwnerDashboard";
import User from "./owner/components/user/User";
import Vehicle from "./owner/components/user/Vehicle";
import NewUser from "./owner/components/newUser/NewUser";
import NewVehicle from "./owner/components/newUser/NewVehicle";
import Ride from "./owner/components/ride/Ride";

import { ViewAgenda } from '@mui/icons-material';





function App() {
  return (
    
      <Router>
        <div >

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
          <PrivateRoute exact path='/passengerdash' component={PassengerDB} />
          <PrivateRoute exact path='/newvehicle' component={NewVehicle} />
          <PrivateRoute exact path='/newuser' component={NewUser} />
          <PrivateRoute exact path='/ownerdashboard' component={OwnerDashboard} />
          <PrivateRoute exact path='/passengerprofile' component={PassengerProfile} />
        

        </Switch>
        </div>
    </Router>
    
    
  );
 
    
}

export default App;
