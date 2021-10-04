import React, { useState,useRef} from "react";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import "./MyLogin.css";
import {useHistory} from "react-router-dom"
import {login} from "./services/authService";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
export default function MyOwnerLogin() {
    const form = useRef();
    const checkBtn = useRef();
    

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
   
    const onChangeUserName = (e) => {
        const username = e.target.value;
        setUserName(username);
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
          login(username, password).then(
            () => {
              history.push("/ownerdash");
              window.location.reload();
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
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={onChangeUserName}
          validations={[required]}
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