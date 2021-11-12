import Topbar from "../../components/topbar/Topbar";
import "./newUser.css";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import authHeader from '../../../services/authHeader';

export default function NewVehicle() {
    const history = useHistory();

  const handleOnSubmit = () => {
    history.push(`/ownerdashboard`);
    };
    const config = {
        headers: authHeader() 
      };
      const validationSchema = Yup.object({
        
        vehiclenumber: Yup.string().required("Vehicle Number is mandatory"),
        vehiclemodel: Yup.string().required("Vehicle Type is mandatory"),
        vehiclecolor: Yup.string().required("Vehicle Color is mandatory"),
        numberofseats: Yup.number().required("please fill number of seats"),
    
      })
      const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
         
          vehiclenumber: '',
          vehiclemodel: '',
          vehiclecolor: '',
          numberofseats: ''
        },
        validationSchema,
        onSubmit(values) {
          console.log(values);
    
            axios.post("http://localhost:9000/api/vehicle/add",values,config).then(res=>{
    
             alert("vehicle registered successfully");
             history.push(`/ownerdashboard`);
        }
        ).catch((err)=>{
                console.log("There are Errors in the Entry")
            })   
      
          }
      })
    
  return (
      <div>
          <Topbar/>
      
    <div className="newVehicle">
      <h1 className="newUserTitle">Vehicle Details</h1>
      <form className="newUserForm" onSubmit={handleSubmit} noValidate>
        <div className="newUserItem">
          <label>Vehicle Number</label>
          <input type="text" placeholder="TN-09 5678" name="vehiclenumber" value={values.vehiclenumber} onChange={handleChange} />
                  {errors.vehiclenumber ? errors.vehiclenumber : null}
        </div>
        <div className="newUserItem">
          <label>Vehicle Type</label>
          <select name="vehiclemodel" onChange={handleChange} value={values.vehiclemodel}>
          <option value="-1">Please select vehicle type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option> 
          </select>
          {errors.vehiclemodel ? errors.vehiclemodel: null}
        </div>
        <div className="newUserItem">
          <label>Vehicle Color</label>
          <input type="text" placeholder="eg:red" name="vehiclecolor" value={values.vehiclecolor} onChange={handleChange} />
                  {errors.vehiclecolor ? errors.vehiclecolor : null}
        </div>
     
        <div className="newUserItem">
          <label>Seat capacity</label>
          <select  name="numberofseats" onChange={handleChange} value={values.numberofseats}>
          <option value="-1">Please select seat availability</option>
          <option value="1">1</option>
          <option value="2">2</option> 
          <option value="3">3</option>
          <option value="4">4</option> 
          <option value="5">5</option>
          <option value="6">6</option> 
          </select>
          {errors.numberofseats ? errors.numberofseats : null}
        </div>
       
        <button className="newUserButton" type="submit" >Create</button>
      </form>
      </div>
    </div>
  );
}
