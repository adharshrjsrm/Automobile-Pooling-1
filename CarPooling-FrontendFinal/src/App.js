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
         
          <PrivateRoute exact path='/newvehicle' component={NewVehicle} />
          <PrivateRoute exact path='/newuser' component={NewUser} />
          <PrivateRoute exact path='/ownerdashboard' component={OwnerDashboard} />
        </Switch>
     
    </Router>
  );
}

export default App;
