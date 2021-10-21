import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MyHome from "./components/MyHome";
import MyRegister from './components/MyRegister';
import MyOwnerDashboard from './components/dashboard/MyOwnerDashboard';
import MyPassengerDashboard from './components/dashboard/MyPassengerDashboard';
import {getCurrentUser,logout} from "./components/services/authService";
import MyOwnerLogin from './components/MyOwnerLogin';
import MyPassengerLogin from './components/MyPassengerLogin';
import EventBus from "./common/EventBus";
import User from './components/dashboard/User';

import MyNavbar from './components/MyNavbar';
import PassengerTopbar from './components/dashboard/passenger/PassengerTopbar';
import Vehicle from './components/dashboard/Vehicle';
import Ride from './components/dashboard/Ride';
import Profile from './components/dashboard/Profile';


function App() {

  const [showPassengerBoard, setShowPassengerBoard] = useState(false);
  const [showOwnerBoard, setShowOwnerBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  
  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowPassengerBoard(user);
      setShowOwnerBoard(user)
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    logout();
    setShowPassengerBoard(false);
    setShowOwnerBoard(false);
    setCurrentUser(undefined);
  };

  
  return (
    <Router>
    <div className="App">
    {/* <MyPassengerDashboard/> */}
    <User/>
 
    <Switch>
               
                <Route path='/home' component={MyHome} />
                <Route path='/owner' component={MyOwnerLogin} />
                <Route path='/passenger' component={MyPassengerLogin} />
                {/* <Route path='/passenger' component={MyPassengerLogin/User} />
                <Route path='/owner' component={MyOwnerLogin/User} /> */}
                <Route protected path="/profdash" component={MyPassengerDashboard} />
                <Route protected path="/ownerdashboard" component={MyOwnerDashboard}/>
                <Route protected path="/register" component={MyRegister}/>

    </Switch>


    </div>
    </Router>
    
  );
}

export default App;
