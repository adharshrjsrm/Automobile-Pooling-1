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
<<<<<<< HEAD:automobile-pooling/pooling/automobilepooling-fe/src/App.js
import { ViewAgenda } from '@mui/icons-material';
import View from './passenger/components/widgetLg/View';

=======
import View from './passenger/components/ownerlist/View';
>>>>>>> 0939057ae1fadfceebdbfbd9a727138523d4af51:automobile-pooling-bk/pooling/automobilepooling-fe/src/App.js
function App() {
  return (
    
      <Router>

     <Switch>
<<<<<<< HEAD:automobile-pooling/pooling/automobilepooling-fe/src/App.js
         <Route exact path='/' component={MyHome} />
         <Route exact path='/home' component={MyHome} />
=======
          <Route exact path="/">
            <MyHome />
          </Route>
          <Route exact path = '/home' component = {MyHome}/>
>>>>>>> 0939057ae1fadfceebdbfbd9a727138523d4af51:automobile-pooling-bk/pooling/automobilepooling-fe/src/App.js
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
          <PrivateRoute exact path='/view' component={View} />
<<<<<<< HEAD:automobile-pooling/pooling/automobilepooling-fe/src/App.js
         
=======
>>>>>>> 0939057ae1fadfceebdbfbd9a727138523d4af51:automobile-pooling-bk/pooling/automobilepooling-fe/src/App.js
        </Switch>
    </Router>
    
    
  );
 
    
}

export default App;
