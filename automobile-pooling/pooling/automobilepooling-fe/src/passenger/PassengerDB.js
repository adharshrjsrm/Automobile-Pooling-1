import './PassengerDB.css'
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import UserList from './components/userList/UserList'
import RideHistory from './components/ridehistory/RideHistory'
import Profile from './components/profile/Profile'
import PrivateRoute from '../PrivateRoute'

export default function PassengerDB() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
         
          <PrivateRoute path="/users" component={UserList}/>
       
          <PrivateRoute path="/ridehistory" component={RideHistory}/>
       
          <PrivateRoute path="/profile" component={Profile}/>
         
        </Switch>
      </div>
    </Router>
  );
}


