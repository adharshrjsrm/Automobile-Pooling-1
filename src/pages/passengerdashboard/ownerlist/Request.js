import Topbar from "../../components/topbar/Topbar";
import "./view.css";
import { useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './View';
import authHeader from '../../services/authHeader';

export default function NewUser() {
  const history = useHistory();


  const handleSubmit = () => {     
    axios.get("http://localhost:9000/api/ride/add",values,config).then(res=>{
      alert("user registered successfully")
    
 }
 ).catch((err)=>{
         console.log("There are Errors in the Entry")
     })  
     

  }   ; 

  
  const config = {
    headers: authHeader() 
  };
  
  
  const hist = useHistory();
  const {handleChange,values,errors} = useFormik({
  
   
    initialValues: {
      id:'',
      
    },
  
    onSubmit(values) {
        console.log(values);
          axios.post("http://localhost:9000/api/ride/add",values,config).then(res=>{
           alert("user registered successfully")
        
      }
      ).catch((err)=>{
              console.log("There are Errors in the Entry")
          })      

    
      }  
  }) 


  return (
    <div>
      <Topbar/>
   
    <div className="newUser">
      <h1 className="newUserTitle">User Details</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>First name</label>
          <input type="text" placeholder="john" name="firstname" value={values.firstname} onChange={handleChange} />
          {errors.firstname ? errors.firstname : null}
        </div>
       
        <button className="newButton" type="submit" onClick={handleSubmit}>Request</button>
        
     
      </form>
      </div>
    </div>
  );
}
