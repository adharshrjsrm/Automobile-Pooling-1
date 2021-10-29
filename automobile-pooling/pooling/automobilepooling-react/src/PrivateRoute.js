import React, { useEffect, useState} from 'react';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)  
  useEffect(() => {
    let token = localStorage.getItem('user')
        if(token){
           
                setIsAuthenticated(true)
            
        } else {
           setIsAuthenticated(false)
        }
  }, [])

  if(isAuthenticated === null){
    return <></>
  }

  return (
    <Route {...rest} render={props =>
      !isAuthenticated ? (
        <Redirect to='/'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};

export default PrivateRoute;