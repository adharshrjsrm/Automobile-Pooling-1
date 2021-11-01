import Topbar from "../../components/topbar/Topbar";
import "./newUser.css";
import { useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import authHeader from '../../services/authHeader';

export default function NewPassenger() {
  const history = useHistory();


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    const validationSchema = Yup.object({
      firstname : Yup.string().required("FirstName is Mandatory"),
      lastname : Yup.string().required("LastName is Mandatory"),
      mobile: Yup.string()
      .matches(phoneRegExp,"Mobile Number is invalid")
      .min(10, "Mobile Number is less than 10")
      .max(10, "Mobile Number should be 10")
      .required("Mobile number is Mandatory"),
      designation:Yup.string().required("Designation is Mandatory"),
      source:Yup.string().required("Source is Mandatory"),  
      destination: Yup.string().required("Destination is Mandatory"), 
     
  }) 
  
  const config = {
    headers: authHeader() 
  };
  
  
  const hist = useHistory();
  const { handleSubmit,handleChange,values,errors} = useFormik({
  
   
    initialValues: {
      firstname:'',
      lastname:'',
      mobile:'',
      source:'',
      destination:'',
     
      designation:'',
      
    },
    validationSchema,
    onSubmit(values) {
        console.log(values);
  
          axios.post("http://localhost:9000/api/user/add",values,config).then(res=>{
  
           alert("user registered successfully")
           history.push(`/passengerdashboard`);
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
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="John Smith" name="lastname" value={values.lastname} onChange={handleChange} />
    {errors.lastname ? errors.lastname : null}
        </div>
     
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="9090987890" name="mobile" value={values.mobile} onChange={handleChange} />
    {errors.mobile ? errors.mobile : null}
        </div>

        <div className="newUserItem">
          <label>Designation</label>
          <input type="text" placeholder="eg:trainee" name="designation" value={values.designation} onChange={handleChange} />
    {errors.designation ? errors.designation : null}
        </div>
        <div className="newUserItem">
          <label>Source</label>
          <input type="text" placeholder="eg:Tharamani" name="source" value={values.source} onChange={handleChange} />
    {errors.source ? errors.source : null}
        </div>
        <div className="newUserItem">
          <label>Destination</label>
          <input type="text" placeholder="eg:Tharamani" name="destination" value={values.destination} onChange={handleChange} />
    {errors.destination ? errors.destination : null}
        </div>
       
      
        
        <button className="newUserButton" type="submit" onClick={handleSubmit}>Create</button>
      </form>
      </div>
    </div>
  );
}
