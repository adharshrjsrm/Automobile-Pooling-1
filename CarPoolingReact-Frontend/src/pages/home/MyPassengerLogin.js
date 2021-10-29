import React, { useState,useRef} from "react";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import "./MyLogin.css";
import {useHistory} from "react-router-dom"
import {login} from "../../services/authService";
import authHeader from '../../services/authHeader';
import axios from 'axios';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
export default function MyPassengerLogin() {
  const config = {
    headers: authHeader()
  };
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

    const handleLogin = (e) => {
        e.preventDefault();
    
        setMessage("");
        setLoading(true);
        
        form.current.validateAll();
       
        if (checkBtn.current.context._errors.length === 0) {
          login(email, password).then(
            () => {
              const loadUser = async () => {
                const result = await axios.get(`http://localhost:9000/api/existuser`,config);
                console.log("user"+result.data)
               if(result.data)
               history.push('/passengerdashboard')
               else
               history.push('/newpassenger')
              };
              
              //window.location.reload();
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
        <div className="MyLogin" align ="center">
        <Form onSubmit={handleLogin} ref={form}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
           type="text"
           className="form-control"
           name="email"
           value={email}
           onChange={onChangeEmail}

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
        <button className="btn-custom" disabled={loading}>
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