import './App.css';
import MyHome from "./home/MyHome"
import PassengerDB from './passenger/PassengerDB';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
     
      <Router>
      <div className="App">
      </div>
     <Switch>
    
      <Route exact path="/" component={MyHome} align="middle"/> 
      <PrivateRoute exact path="/passengerdash" component={PassengerDB}/>
      <PrivateRoute exact path="/ownerdash" component={OwnerDB}/>
      </Switch>
    </Router>
    
  );
}

export default App;
