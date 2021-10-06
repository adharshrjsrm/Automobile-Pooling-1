import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Dashboard from './components/passenger/Dashboard';
import Request from './components/passenger/Request';
import Profile from './components/passenger/Profile';
import History from './components/passenger/History';
import Contact from './components/passenger/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav id="navigation">
            <a href="Dashboard" className="logo">SRM TEchnologies<span>Auto Pooling</span></a>
              <ul className="links">
                <li><a href="Dashboard">Dashboard</a></li>
                <li className="dropdown"><a href="#" className="trigger-drop">Request<i className="arrow"></i></a>
                  <ul className="drop">
                    <li><a href="Request">Ride</a></li>
                    <li><a href="History">History</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="trigger-drop">Settings<i className="arrow"></i></a>
                  <ul className="drop">
                    <li><a href="Profile">Profile</a></li>
                    <li><a href="Contact">Contact</a></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
          </nav>
        </div>
          <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/Dashboard' exact component={Dashboard}></Route>
            <Route path='/Request' exact component={Request}></Route>
            <Route path='/Profile' exact component={Profile}></Route>
            <Route path='/History' exact component={History}></Route>
            <Route path='/Contact' exact component={Contact}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
