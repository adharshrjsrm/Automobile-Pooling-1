import React, { useState,useRef} from "react";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import {useHistory} from "react-router-dom"
import {login} from "../services/authService";
import authHeader from '../services/authHeader';
import axios from 'axios';
import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

export default function MyOwnerLogin() {
 
    const form = useRef();
    const checkBtn = useRef();
   

    



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

   
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };

      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

  
      

    const history = useHistory();
    const [user,setUser]=useState({
      id:'',
      firstname: '',
      lastname: '',
      mobile: '',
      source: '',
      destination: '',
      stopa: '',
      stopb: '',
      designation: ''
    })
    const loadUser = async () => {
      const config = {
        headers: authHeader()
      };
      const result = await axios.get(`http://localhost:9000/api/existuser`,config);
      console.log("user"+result.data)
     if(result.data)
     history.push('/ownerdashboard')
     else
     history.push('/newuser')
    };

    const handleLogin = (e) => {
        e.preventDefault();
    
        setMessage("");
        setLoading(true);
        
        form.current.validateAll();
       
        if (checkBtn.current.context._errors.length === 0) {
          login(email, password).then(
            () => {
      
              loadUser();
              
            }, (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);
            }
          );
        } else {
          setLoading(false);
        }
      };
    
    return (
        <div className="MyOwnerLogin" align ="center">
        <Form onSubmit={handleLogin} ref={form}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
           type="email"
           className="form-control"
           name="email"
           value={email}
           onChange={onChangeEmail}
          validations={[required,validEmail]}
           />
        </div>


      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[required]}
        />
      </div>

      <div className="form-group">
        <button href="/newuser" className="btn-custom" disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Login</span>
        </button>
      </div>

      {message && (
        <div className="form-group">
          <div className="alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
      <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
    </div>
    );
}