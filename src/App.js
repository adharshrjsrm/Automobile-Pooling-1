import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Vehicle from "./pages/user/Vehicle";
import Ride from "./pages/ride/Ride";
import OwnerDashboard from "./pages/dashboard/OwnerDashboard";
import MyHome from "./pages/home/MyHome";
import NewVehicle from "./pages/newUser/NewVehicle";
import PrivateRoute from "./PrivateRoute";
import Passengerdashboard from "./pages/passengerdashboard/Passengerdashboard";
import PassengerProfile from "./pages/passengerdashboard/PassengerProfile";
import PassengerRide from "./pages/passengerdashboard/PassengerRide";

function App() {
  return (
    <Router>
     
        <Switch>
          <Route exact path="/">
            <MyHome />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/vehicle">
            <Vehicle />
          </Route>
          <Route path="/profile">
            <User />
          </Route>
          <Route path="/ride">
            <Ride />
          </Route>
          <Route path="/passengerdashboard">
            <Passengerdashboard />
          </Route>
          <Route path="/passengerprofile">
            <PassengerProfile />
          </Route>
          <Route path="/passengerride">
            <PassengerRide />
          </Route>
         
          <PrivateRoute exact path='/newvehicle' component={NewVehicle} />
          <PrivateRoute exact path='/newuser' component={NewUser} />
          <PrivateRoute exact path='/ownerdashboard' component={OwnerDashboard} />
        </Switch>
     
    </Router>
  );
}

export default App;
