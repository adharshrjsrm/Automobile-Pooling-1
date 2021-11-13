import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  LocationOn,
  Label,
 
} from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./user.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useEffect } from "react";

export default function User() {

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/getuser`,config);
    setValues(result.data);
    console.log(result.data)
    
  };
  useEffect(() => {
   console.log("User-useeffect");
    loadUser();
    
   
}, []);

  const phoneRegExp = /^[6-9]\d{9}$/


  const validationSchema = Yup.object({
    firstname: Yup.string().required("FirstName is Mandatory"),
    lastname: Yup.string().required("LastName is Mandatory"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Mobile Number is invalid")
      .min(10, "Mobile Number is less than 10")
      .max(10, "Mobile Number should be 10")
      .required("Mobile number is Mandatory"),
    designation: Yup.string().required("Designation is Mandatory"),
    source: Yup.string().required("Source is Mandatory"),
    destination: Yup.string().required("Destination is Mandatory"),
    stopa: Yup.string().required("Location 1 is Mandatory"),
    stopb: Yup.string().required("Location 2 is Mandatory")
  })

  const config = {
    headers: authHeader()
  };


  const { handleSubmit, handleChange, values, errors, setValues } = useFormik({


    initialValues: {
      firstname: '',
      lastname: '',
      mobile: '',
      source: '',
      destination: '',
      stopa: '',
      stopb: '',
      designation: '',
      userLogin:{email:''}
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);

      axios.put("http://localhost:9000/api/user/update", values, config).then(res => {

        alert("user updated successfully");
      }
      ).catch((err) => {
        console.log("There are Errors in the Entry")
      })

    }
  })
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">My Profile</h1>
          
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">

                <div className="userShowTopTitle">
                  <span className="userShowUsername">{values.firstname+" "}{values.lastname}</span>
                  <span className="userShowUserTitle">{values.designation}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIconNumber" />
                  <span className="userShowInfoTitle">{values.firstname+" "}{values.lastname}</span>
                </div>
                <div className="userShowInfo">
                  <Label className="userShowIconColor" />
                  <span className="userShowInfoTitle">{values.designation}</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIconType" />
                  <span className="userShowInfoTitle">{values.mobile}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIconSeat" />
                  <span className="userShowInfoTitle">{values.userLogin.email}</span>
                </div>
                <span className="userShowTitle">Address Details</span>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIconLocation" />
                  <span className="userShowTitle">Source</span>
                  <span className="userShowInfoTitle">{values.source}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIconLocation" />
                  <span className="userShowTitle">Destination</span>
                  <span className="userShowInfoTitle">{values.destination}</span>
                </div>
                <div className="userShowInfo">
                  <LocationOn className="userShowIconRoute" />
                  <span className="userShowTitle">Location 1</span>
                  <span className="userShowInfoTitle">{values.stopa}</span>
                </div>
                <div className="userShowInfo">
                  <LocationOn className="userShowIconRoute" />
                  <span className="userShowTitle">Location 2</span>
                  <span className="userShowInfoTitle">{values.stopb}</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label className="userLabel">First Name</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="firstname" value={values.firstname}
                      onChange={handleChange} />
                    {errors.firstname ? errors.firstname : null}

                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Last Name</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="lastname" value={values.lastname}
                      onChange={handleChange} />
                    {errors.lastname ? errors.lastname : null}
                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Email</label>
                    <input
                      type="text"
                      placeholder="annabeck99@gmail.com"
                      className="userUpdateInput"
                      value={values.userLogin.email}
                    readOnly></input>
                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Phone</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="mobile" value={values.mobile}
                      onChange={handleChange} />
                    {errors.mobile ? errors.mobile : null}
                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Designation</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      name="designation" value={values.designation}
                      onChange={handleChange} />
                    {errors.designation ? errors.designation : null}
                  </div>
              

<div className="userUpdateItem">
          <label >Source</label>
          <select  className="userUpdateInput" name="source" onChange={handleChange} value={values.source}>
          <option value="-1">Please select your source</option>
          <option value="Adambakkam">Adambakkam</option>
          <option value="Adyar">Adyar</option> 
          <option value="Alandur">Alandur</option>
          <option value="Alapakkam">Alapakkam</option> 
          <option value="Alwarpet">Alwarpet</option>
          <option value="Alwarthirunagar">Alwarthirunagar</option> 
          <option value="Ambattur">Ambattur</option>
          <option value="Aminjikarai">Aminjikarai</option> 
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Annanur">Annanur</option> 
          <option value="Arumbakkam">Arumbakkam</option>
          <option value="Ashok Nagar">Ashok Nagar</option> 
          <option value="Avadi">Avadi</option>
          <option value="Ayanavaram">Ayanavaram</option> 
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Basin Bridge">Basin Bridge</option> 
          <option value="Chepauk">Chepauk</option>
          <option value="Chetput">Chetput</option> 
          <option value="Chintadripet">Chintadripet</option>
          <option value="Choolai">Choolai</option> 
          <option value="Choolaimedu">Choolaimedu</option>
          <option value="Chrompet">Chrompet</option> 
          <option value="Egmore">Egmore</option>
          <option value="Ekkaduthangal">Ekkaduthangal</option> 
          <option value="Eranavur">Eranavur</option>
          <option value="Ennore">Ennore</option> 
          <option value="Foreshore Estate">Foreshore Estate</option>
          <option value="Fort St. George">Fort St. George</option> 
          <option value="George Town">George Town</option>
          <option value="Gopalapuram">Gopalapuram</option> 
          <option value="Government Estate">Government Estate</option>
          <option value="Guindy">Guindy</option> 
          <option value="Gerugambakkam">Gerugambakkam</option> 
          <option value="IIT Madras">IIT Madras</option>
          <option value="Injambakkam">Injambakkam</option> 
          <option value="ICF">ICF</option>
          <option value="Iyyapanthangal">Iyyapanthangal</option> 
          <option value="Jafferkhanpet">Jafferkhanpet</option>
          <option value="Karapakkam">Karapakkam</option> 
          <option value="Kattivakkam">Kattivakkam</option>
          <option value="Kattupakkam">Kattupakkam</option> 
          <option value="Kazhipattur">Kazhipattur</option>
          <option value="K.K. Nagar">K.K. Nagar</option> 
          <option value="Keelkattalai">Keelkattalai</option>
          <option value="Kilpauk">Kilpauk</option> 
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Kodungaiyur">Kodungaiyur</option> 
          <option value="Kolathur">Kolathur</option>
          <option value="Korattur">Korattur</option> 
          <option value="Korukkupet">Korukkupet</option>
          <option value="Kottivakkam">Kottivakkam</option>
          <option value="Kotturpuram">Kotturpuram</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Madhavaram">Madhavaram</option>
          <option value="Madhavaram Milk Colony">Madhavaram Milk Colony</option>      
          <option value="Madipakkam">Madipakkam</option>
          <option value="Madambakkam">Madambakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Manali">Manali</option>
          <option value="Manali New Town">Manali New Town</option>
          <option value="Manapakkam">Manapakkam</option>
          <option value="Mandaveli">Mandaveli</option> 
          <option value="Mangadu">Mangadu</option>
          <option value="Mannady">Mannady</option>
          <option value="Mathur">Mathur</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Meenambakkam">Meenambakkam</option>
          <option value="MGR Nagar">MGR Nagar</option>
          <option value="Minjur">Minjur</option>
          <option value="Mogappair">Mogappair</option>
          <option value="MKB Nagar">MKB Nagar</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Moolakadai">Moolakadai</option>
          <option value="Moulivakkam">Moulivakkam</option>
          <option value="Mugalivakkam">Mugalivakkam</option>      
          <option value="Mudichur">Mudichur</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Nanmangalam">Nanmangalam</option>
          <option value="Neelankarai">Neelankarai</option>
          <option value="Nemilichery">Nemilichery</option>
          <option value="Nesapakkam">Nesapakkam</option>
          <option value="Nolambur">Nolambur</option>
          <option value="Noombal">Noombal</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Otteri">Otteri</option>
          <option value="Padi">Padi</option>
          <option value="Pakkam">Pakkam</option>
          <option value="Palavakkam">Palavakkam</option>
          <option value="Pallavaram">Pallavaram</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Pammal">Pammal</option>      
          <option value="Park Town">Park Town</option>
          <option value="Parry's Corner">Parry's Corner</option>
          <option value="Pattabiram">Pattabiram</option>
          <option value="Pattaravakkam">Pattaravakkam</option>
          <option value="Pazhavanthangal">Pazhavanthangal</option> 
          <option value="Peerkankaranai">Peerkankaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Peravallur">Peravallur</option>
          <option value="Perumbakkam">Perumbakkam</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Pozhichalur">Pozhichalur</option>
          <option value="Poonamallee">Poonamallee</option>
          <option value="Porur">Porur</option>
          <option value="Pudupet">Pudupet</option>     
          <option value="Pulianthope">Pulianthope</option>
          <option value="Purasaiwalkam">Purasaiwalkam</option>
          <option value="Puthagaram">Puthagaram</option>
          <option value="Puzhal">Puzhal</option>
          <option value="Puzhuthivakkam/ Ullagaram">Puzhuthivakkam/ Ullagaram</option>      
          <option value="Raj Bhavan">Raj Bhavan</option>
          <option value="Ramavaram">Ramavaram</option>
          <option value="Red Hills">Red Hills</option>
          <option value="Royapettah">Royapettah</option>
          <option value="Royapuram">Royapuram</option>
          <option value="Saidapet">Saidapet</option>
          <option value="Saligramam">Saligramam</option>
          <option value="Santhome">Santhome</option>
          <option value="Sembakkam">Sembakkam</option>
          <option value="Selaiyur">Selaiyur</option>      
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholavaram">Sholavaram</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="Sithalapakkam">Sithalapakkam</option>
          <option value="Sowcarpet">Sowcarpet</option>
          <option value="St.Thomas Mount">St.Thomas Mount</option>
          <option value="Surapet">Surapet</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Tharamani">Tharamani</option>
          <option value="T. Nagar">T. Nagar</option>
          <option value="Thirumangalam">Thirumangalam</option>
          <option value="Thirumullaivoyal">Thirumullaivoyal</option>
          <option value="Thiruneermalai">Thiruneermalai</option>
          <option value="Thiruninravur">Thiruninravur</option>
          <option value="Thiruvanmiyur">Thiruvanmiyur</option>
          <option value="Tiruverkadu">Tiruverkadu</option>
          <option value="Thiruvotriyur">Thiruvotriyur</option>
          <option value="Thuraipakkam">Thuraipakkam</option>
          <option value="Tirusulam">Tirusulam</option>
          <option value="Tiruvallikeni">Tiruvallikeni</option>
          <option value="Tondiarpet">Tondiarpet</option>
          <option value="Teynampet">Teynampet</option>
          <option value="United India Colony">United India Colony</option>
          <option value="Vandalur">Vandalur</option>
          <option value="Vadapalani">Vadapalani</option>
          <option value="Valasaravakkam">Valasaravakkam</option>
          <option value="Vallalar Nagar">Vallalar Nagar</option>
          <option value="Vanagaram">Vanagaram</option>
          <option value="Velachery">Velachery</option>
          <option value="Velappanchavadi">Velappanchavadi</option>
          <option value="Villivakkam">Villivakkam</option>
          <option value="Virugambakkam">Virugambakkam</option>
          <option value="Vyasarpadi">Vyasarpadi</option>
          <option value="Washermanpet">Washermanpet</option>
          <option value="West Mambalam ">West Mambalam</option>
          </select>
          {errors.source ? errors.source: null}
        </div>


        <div className="userUpdateItem">
          <label >Destination</label>
          <select  className="userUpdateInput" name="destination" onChange={handleChange} value={values.destination}>
          <option value="-1">Please select your destination</option>
          <option value="Adambakkam">Adambakkam</option>
          <option value="Adyar">Adyar</option> 
          <option value="Alandur">Alandur</option>
          <option value="Alapakkam">Alapakkam</option> 
          <option value="Alwarpet">Alwarpet</option>
          <option value="Alwarthirunagar">Alwarthirunagar</option> 
          <option value="Ambattur">Ambattur</option>
          <option value="Aminjikarai">Aminjikarai</option> 
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Annanur">Annanur</option> 
          <option value="Arumbakkam">Arumbakkam</option>
          <option value="Ashok Nagar">Ashok Nagar</option> 
          <option value="Avadi">Avadi</option>
          <option value="Ayanavaram">Ayanavaram</option> 
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Basin Bridge">Basin Bridge</option> 
          <option value="Chepauk">Chepauk</option>
          <option value="Chetput">Chetput</option> 
          <option value="Chintadripet">Chintadripet</option>
          <option value="Choolai">Choolai</option> 
          <option value="Choolaimedu">Choolaimedu</option>
          <option value="Chrompet">Chrompet</option> 
          <option value="Egmore">Egmore</option>
          <option value="Ekkaduthangal">Ekkaduthangal</option> 
          <option value="Eranavur">Eranavur</option>
          <option value="Ennore">Ennore</option> 
          <option value="Foreshore Estate">Foreshore Estate</option>
          <option value="Fort St. George">Fort St. George</option> 
          <option value="George Town">George Town</option>
          <option value="Gopalapuram">Gopalapuram</option> 
          <option value="Government Estate">Government Estate</option>
          <option value="Guindy">Guindy</option> 
          <option value="Gerugambakkam">Gerugambakkam</option> 
          <option value="IIT Madras">IIT Madras</option>
          <option value="Injambakkam">Injambakkam</option> 
          <option value="ICF">ICF</option>
          <option value="Iyyapanthangal">Iyyapanthangal</option> 
          <option value="Jafferkhanpet">Jafferkhanpet</option>
          <option value="Karapakkam">Karapakkam</option> 
          <option value="Kattivakkam">Kattivakkam</option>
          <option value="Kattupakkam">Kattupakkam</option> 
          <option value="Kazhipattur">Kazhipattur</option>
          <option value="K.K. Nagar">K.K. Nagar</option> 
          <option value="Keelkattalai">Keelkattalai</option>
          <option value="Kilpauk">Kilpauk</option> 
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Kodungaiyur">Kodungaiyur</option> 
          <option value="Kolathur">Kolathur</option>
          <option value="Korattur">Korattur</option> 
          <option value="Korukkupet">Korukkupet</option>
          <option value="Kottivakkam">Kottivakkam</option>
          <option value="Kotturpuram">Kotturpuram</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Madhavaram">Madhavaram</option>
          <option value="Madhavaram Milk Colony">Madhavaram Milk Colony</option>      
          <option value="Madipakkam">Madipakkam</option>
          <option value="Madambakkam">Madambakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Manali">Manali</option>
          <option value="Manali New Town">Manali New Town</option>
          <option value="Manapakkam">Manapakkam</option>
          <option value="Mandaveli">Mandaveli</option> 
          <option value="Mangadu">Mangadu</option>
          <option value="Mannady">Mannady</option>
          <option value="Mathur">Mathur</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Meenambakkam">Meenambakkam</option>
          <option value="MGR Nagar">MGR Nagar</option>
          <option value="Minjur">Minjur</option>
          <option value="Mogappair">Mogappair</option>
          <option value="MKB Nagar">MKB Nagar</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Moolakadai">Moolakadai</option>
          <option value="Moulivakkam">Moulivakkam</option>
          <option value="Mugalivakkam">Mugalivakkam</option>      
          <option value="Mudichur">Mudichur</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Nanmangalam">Nanmangalam</option>
          <option value="Neelankarai">Neelankarai</option>
          <option value="Nemilichery">Nemilichery</option>
          <option value="Nesapakkam">Nesapakkam</option>
          <option value="Nolambur">Nolambur</option>
          <option value="Noombal">Noombal</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Otteri">Otteri</option>
          <option value="Padi">Padi</option>
          <option value="Pakkam">Pakkam</option>
          <option value="Palavakkam">Palavakkam</option>
          <option value="Pallavaram">Pallavaram</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Pammal">Pammal</option>      
          <option value="Park Town">Park Town</option>
          <option value="Parry's Corner">Parry's Corner</option>
          <option value="Pattabiram">Pattabiram</option>
          <option value="Pattaravakkam">Pattaravakkam</option>
          <option value="Pazhavanthangal">Pazhavanthangal</option> 
          <option value="Peerkankaranai">Peerkankaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Peravallur">Peravallur</option>
          <option value="Perumbakkam">Perumbakkam</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Pozhichalur">Pozhichalur</option>
          <option value="Poonamallee">Poonamallee</option>
          <option value="Porur">Porur</option>
          <option value="Pudupet">Pudupet</option>     
          <option value="Pulianthope">Pulianthope</option>
          <option value="Purasaiwalkam">Purasaiwalkam</option>
          <option value="Puthagaram">Puthagaram</option>
          <option value="Puzhal">Puzhal</option>
          <option value="Puzhuthivakkam/ Ullagaram">Puzhuthivakkam/ Ullagaram</option>      
          <option value="Raj Bhavan">Raj Bhavan</option>
          <option value="Ramavaram">Ramavaram</option>
          <option value="Red Hills">Red Hills</option>
          <option value="Royapettah">Royapettah</option>
          <option value="Royapuram">Royapuram</option>
          <option value="Saidapet">Saidapet</option>
          <option value="Saligramam">Saligramam</option>
          <option value="Santhome">Santhome</option>
          <option value="Sembakkam">Sembakkam</option>
          <option value="Selaiyur">Selaiyur</option>      
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholavaram">Sholavaram</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="Sithalapakkam">Sithalapakkam</option>
          <option value="Sowcarpet">Sowcarpet</option>
          <option value="St.Thomas Mount">St.Thomas Mount</option>
          <option value="Surapet">Surapet</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Tharamani">Tharamani</option>
          <option value="T. Nagar">T. Nagar</option>
          <option value="Thirumangalam">Thirumangalam</option>
          <option value="Thirumullaivoyal">Thirumullaivoyal</option>
          <option value="Thiruneermalai">Thiruneermalai</option>
          <option value="Thiruninravur">Thiruninravur</option>
          <option value="Thiruvanmiyur">Thiruvanmiyur</option>
          <option value="Tiruverkadu">Tiruverkadu</option>
          <option value="Thiruvotriyur">Thiruvotriyur</option>
          <option value="Thuraipakkam">Thuraipakkam</option>
          <option value="Tirusulam">Tirusulam</option>
          <option value="Tiruvallikeni">Tiruvallikeni</option>
          <option value="Tondiarpet">Tondiarpet</option>
          <option value="Teynampet">Teynampet</option>
          <option value="United India Colony">United India Colony</option>
          <option value="Vandalur">Vandalur</option>
          <option value="Vadapalani">Vadapalani</option>
          <option value="Valasaravakkam">Valasaravakkam</option>
          <option value="Vallalar Nagar">Vallalar Nagar</option>
          <option value="Vanagaram">Vanagaram</option>
          <option value="Velachery">Velachery</option>
          <option value="Velappanchavadi">Velappanchavadi</option>
          <option value="Villivakkam">Villivakkam</option>
          <option value="Virugambakkam">Virugambakkam</option>
          <option value="Vyasarpadi">Vyasarpadi</option>
          <option value="Washermanpet">Washermanpet</option>
          <option value="West Mambalam ">West Mambalam</option>
          </select>
          {errors.destination ? errors.destination: null}
        </div>


          <div className="userUpdateItem">
          <label >Location 1</label>
          <select  className="userUpdateInput" name="stopa" onChange={handleChange} value={values.stopa}>
          <option value="-1">Please select your near location</option>
          <option value="Adambakkam">Adambakkam</option>
          <option value="Adyar">Adyar</option> 
          <option value="Alandur">Alandur</option>
          <option value="Alapakkam">Alapakkam</option> 
          <option value="Alwarpet">Alwarpet</option>
          <option value="Alwarthirunagar">Alwarthirunagar</option> 
          <option value="Ambattur">Ambattur</option>
          <option value="Aminjikarai">Aminjikarai</option> 
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Annanur">Annanur</option> 
          <option value="Arumbakkam">Arumbakkam</option>
          <option value="Ashok Nagar">Ashok Nagar</option> 
          <option value="Avadi">Avadi</option>
          <option value="Ayanavaram">Ayanavaram</option> 
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Basin Bridge">Basin Bridge</option> 
          <option value="Chepauk">Chepauk</option>
          <option value="Chetput">Chetput</option> 
          <option value="Chintadripet">Chintadripet</option>
          <option value="Choolai">Choolai</option> 
          <option value="Choolaimedu">Choolaimedu</option>
          <option value="Chrompet">Chrompet</option> 
          <option value="Egmore">Egmore</option>
          <option value="Ekkaduthangal">Ekkaduthangal</option> 
          <option value="Eranavur">Eranavur</option>
          <option value="Ennore">Ennore</option> 
          <option value="Foreshore Estate">Foreshore Estate</option>
          <option value="Fort St. George">Fort St. George</option> 
          <option value="George Town">George Town</option>
          <option value="Gopalapuram">Gopalapuram</option> 
          <option value="Government Estate">Government Estate</option>
          <option value="Guindy">Guindy</option> 
          <option value="Gerugambakkam">Gerugambakkam</option> 
          <option value="IIT Madras">IIT Madras</option>
          <option value="Injambakkam">Injambakkam</option> 
          <option value="ICF">ICF</option>
          <option value="Iyyapanthangal">Iyyapanthangal</option> 
          <option value="Jafferkhanpet">Jafferkhanpet</option>
          <option value="Karapakkam">Karapakkam</option> 
          <option value="Kattivakkam">Kattivakkam</option>
          <option value="Kattupakkam">Kattupakkam</option> 
          <option value="Kazhipattur">Kazhipattur</option>
          <option value="K.K. Nagar">K.K. Nagar</option> 
          <option value="Keelkattalai">Keelkattalai</option>
          <option value="Kilpauk">Kilpauk</option> 
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Kodungaiyur">Kodungaiyur</option> 
          <option value="Kolathur">Kolathur</option>
          <option value="Korattur">Korattur</option> 
          <option value="Korukkupet">Korukkupet</option>
          <option value="Kottivakkam">Kottivakkam</option>
          <option value="Kotturpuram">Kotturpuram</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Madhavaram">Madhavaram</option>
          <option value="Madhavaram Milk Colony">Madhavaram Milk Colony</option>      
          <option value="Madipakkam">Madipakkam</option>
          <option value="Madambakkam">Madambakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Manali">Manali</option>
          <option value="Manali New Town">Manali New Town</option>
          <option value="Manapakkam">Manapakkam</option>
          <option value="Mandaveli">Mandaveli</option> 
          <option value="Mangadu">Mangadu</option>
          <option value="Mannady">Mannady</option>
          <option value="Mathur">Mathur</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Meenambakkam">Meenambakkam</option>
          <option value="MGR Nagar">MGR Nagar</option>
          <option value="Minjur">Minjur</option>
          <option value="Mogappair">Mogappair</option>
          <option value="MKB Nagar">MKB Nagar</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Moolakadai">Moolakadai</option>
          <option value="Moulivakkam">Moulivakkam</option>
          <option value="Mugalivakkam">Mugalivakkam</option>      
          <option value="Mudichur">Mudichur</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Nanmangalam">Nanmangalam</option>
          <option value="Neelankarai">Neelankarai</option>
          <option value="Nemilichery">Nemilichery</option>
          <option value="Nesapakkam">Nesapakkam</option>
          <option value="Nolambur">Nolambur</option>
          <option value="Noombal">Noombal</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Otteri">Otteri</option>
          <option value="Padi">Padi</option>
          <option value="Pakkam">Pakkam</option>
          <option value="Palavakkam">Palavakkam</option>
          <option value="Pallavaram">Pallavaram</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Pammal">Pammal</option>      
          <option value="Park Town">Park Town</option>
          <option value="Parry's Corner">Parry's Corner</option>
          <option value="Pattabiram">Pattabiram</option>
          <option value="Pattaravakkam">Pattaravakkam</option>
          <option value="Pazhavanthangal">Pazhavanthangal</option> 
          <option value="Peerkankaranai">Peerkankaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Peravallur">Peravallur</option>
          <option value="Perumbakkam">Perumbakkam</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Pozhichalur">Pozhichalur</option>
          <option value="Poonamallee">Poonamallee</option>
          <option value="Porur">Porur</option>
          <option value="Pudupet">Pudupet</option>     
          <option value="Pulianthope">Pulianthope</option>
          <option value="Purasaiwalkam">Purasaiwalkam</option>
          <option value="Puthagaram">Puthagaram</option>
          <option value="Puzhal">Puzhal</option>
          <option value="Puzhuthivakkam/ Ullagaram">Puzhuthivakkam/ Ullagaram</option>      
          <option value="Raj Bhavan">Raj Bhavan</option>
          <option value="Ramavaram">Ramavaram</option>
          <option value="Red Hills">Red Hills</option>
          <option value="Royapettah">Royapettah</option>
          <option value="Royapuram">Royapuram</option>
          <option value="Saidapet">Saidapet</option>
          <option value="Saligramam">Saligramam</option>
          <option value="Santhome">Santhome</option>
          <option value="Sembakkam">Sembakkam</option>
          <option value="Selaiyur">Selaiyur</option>      
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholavaram">Sholavaram</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="Sithalapakkam">Sithalapakkam</option>
          <option value="Sowcarpet">Sowcarpet</option>
          <option value="St.Thomas Mount">St.Thomas Mount</option>
          <option value="Surapet">Surapet</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Tharamani">Tharamani</option>
          <option value="T. Nagar">T. Nagar</option>
          <option value="Thirumangalam">Thirumangalam</option>
          <option value="Thirumullaivoyal">Thirumullaivoyal</option>
          <option value="Thiruneermalai">Thiruneermalai</option>
          <option value="Thiruninravur">Thiruninravur</option>
          <option value="Thiruvanmiyur">Thiruvanmiyur</option>
          <option value="Tiruverkadu">Tiruverkadu</option>
          <option value="Thiruvotriyur">Thiruvotriyur</option>
          <option value="Thuraipakkam">Thuraipakkam</option>
          <option value="Tirusulam">Tirusulam</option>
          <option value="Tiruvallikeni">Tiruvallikeni</option>
          <option value="Tondiarpet">Tondiarpet</option>
          <option value="Teynampet">Teynampet</option>
          <option value="United India Colony">United India Colony</option>
          <option value="Vandalur">Vandalur</option>
          <option value="Vadapalani">Vadapalani</option>
          <option value="Valasaravakkam">Valasaravakkam</option>
          <option value="Vallalar Nagar">Vallalar Nagar</option>
          <option value="Vanagaram">Vanagaram</option>
          <option value="Velachery">Velachery</option>
          <option value="Velappanchavadi">Velappanchavadi</option>
          <option value="Villivakkam">Villivakkam</option>
          <option value="Virugambakkam">Virugambakkam</option>
          <option value="Vyasarpadi">Vyasarpadi</option>
          <option value="Washermanpet">Washermanpet</option>
          <option value="West Mambalam ">West Mambalam</option>
          </select>
          {errors.stopa ? errors.stopa: null}
        </div>
        <div className="newUserItem">
          <label className="userLabel">Location 2</label>
          <select  className="userUpdateInput" name="stopb" onChange={handleChange} value={values.stopb}>
          <option value="-1">Please select your near location</option>
          <option value="Adambakkam">Adambakkam</option>
          <option value="Adyar">Adyar</option> 
          <option value="Alandur">Alandur</option>
          <option value="Alapakkam">Alapakkam</option> 
          <option value="Alwarpet">Alwarpet</option>
          <option value="Alwarthirunagar">Alwarthirunagar</option> 
          <option value="Ambattur">Ambattur</option>
          <option value="Aminjikarai">Aminjikarai</option> 
          <option value="Anna Nagar">Anna Nagar</option>
          <option value="Annanur">Annanur</option> 
          <option value="Arumbakkam">Arumbakkam</option>
          <option value="Ashok Nagar">Ashok Nagar</option> 
          <option value="Avadi">Avadi</option>
          <option value="Ayanavaram">Ayanavaram</option> 
          <option value="Besant Nagar">Besant Nagar</option>
          <option value="Basin Bridge">Basin Bridge</option> 
          <option value="Chepauk">Chepauk</option>
          <option value="Chetput">Chetput</option> 
          <option value="Chintadripet">Chintadripet</option>
          <option value="Choolai">Choolai</option> 
          <option value="Choolaimedu">Choolaimedu</option>
          <option value="Chrompet">Chrompet</option> 
          <option value="Egmore">Egmore</option>
          <option value="Ekkaduthangal">Ekkaduthangal</option> 
          <option value="Eranavur">Eranavur</option>
          <option value="Ennore">Ennore</option> 
          <option value="Foreshore Estate">Foreshore Estate</option>
          <option value="Fort St. George">Fort St. George</option> 
          <option value="George Town">George Town</option>
          <option value="Gopalapuram">Gopalapuram</option> 
          <option value="Government Estate">Government Estate</option>
          <option value="Guindy">Guindy</option> 
          <option value="Gerugambakkam">Gerugambakkam</option> 
          <option value="IIT Madras">IIT Madras</option>
          <option value="Injambakkam">Injambakkam</option> 
          <option value="ICF">ICF</option>
          <option value="Iyyapanthangal">Iyyapanthangal</option> 
          <option value="Jafferkhanpet">Jafferkhanpet</option>
          <option value="Karapakkam">Karapakkam</option> 
          <option value="Kattivakkam">Kattivakkam</option>
          <option value="Kattupakkam">Kattupakkam</option> 
          <option value="Kazhipattur">Kazhipattur</option>
          <option value="K.K. Nagar">K.K. Nagar</option> 
          <option value="Keelkattalai">Keelkattalai</option>
          <option value="Kilpauk">Kilpauk</option> 
          <option value="Kodambakkam">Kodambakkam</option>
          <option value="Kodungaiyur">Kodungaiyur</option> 
          <option value="Kolathur">Kolathur</option>
          <option value="Korattur">Korattur</option> 
          <option value="Korukkupet">Korukkupet</option>
          <option value="Kottivakkam">Kottivakkam</option>
          <option value="Kotturpuram">Kotturpuram</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Kottur">Kottur</option>
          <option value="Kovilambakka">Kovilambakkam</option>
          <option value="Koyambedu">Koyambedu</option>
          <option value="Kundrathur">Kundrathur</option>
          <option value="Madhavaram">Madhavaram</option>
          <option value="Madhavaram Milk Colony">Madhavaram Milk Colony</option>      
          <option value="Madipakkam">Madipakkam</option>
          <option value="Madambakkam">Madambakkam</option>
          <option value="Maduravoyal">Maduravoyal</option>
          <option value="Manali">Manali</option>
          <option value="Manali New Town">Manali New Town</option>
          <option value="Manapakkam">Manapakkam</option>
          <option value="Mandaveli">Mandaveli</option> 
          <option value="Mangadu">Mangadu</option>
          <option value="Mannady">Mannady</option>
          <option value="Mathur">Mathur</option>
          <option value="Medavakkam">Medavakkam</option>
          <option value="Meenambakkam">Meenambakkam</option>
          <option value="MGR Nagar">MGR Nagar</option>
          <option value="Minjur">Minjur</option>
          <option value="Mogappair">Mogappair</option>
          <option value="MKB Nagar">MKB Nagar</option>
          <option value="Mount Road">Mount Road</option>
          <option value="Moolakadai">Moolakadai</option>
          <option value="Moulivakkam">Moulivakkam</option>
          <option value="Mugalivakkam">Mugalivakkam</option>      
          <option value="Mudichur">Mudichur</option>
          <option value="Mylapore">Mylapore</option>
          <option value="Nandanam">Nandanam</option>
          <option value="Nanganallur">Nanganallur</option>
          <option value="Nanmangalam">Nanmangalam</option>
          <option value="Neelankarai">Neelankarai</option>
          <option value="Nemilichery">Nemilichery</option>
          <option value="Nesapakkam">Nesapakkam</option>
          <option value="Nolambur">Nolambur</option>
          <option value="Noombal">Noombal</option>
          <option value="Nungambakkam">Nungambakkam</option>
          <option value="Otteri">Otteri</option>
          <option value="Padi">Padi</option>
          <option value="Pakkam">Pakkam</option>
          <option value="Palavakkam">Palavakkam</option>
          <option value="Pallavaram">Pallavaram</option>
          <option value="Pallikaranai">Pallikaranai</option>
          <option value="Pammal">Pammal</option>      
          <option value="Park Town">Park Town</option>
          <option value="Parry's Corner">Parry's Corner</option>
          <option value="Pattabiram">Pattabiram</option>
          <option value="Pattaravakkam">Pattaravakkam</option>
          <option value="Pazhavanthangal">Pazhavanthangal</option> 
          <option value="Peerkankaranai">Peerkankaranai</option>
          <option value="Perambur">Perambur</option>
          <option value="Peravallur">Peravallur</option>
          <option value="Perumbakkam">Perumbakkam</option>
          <option value="Perungalathur">Perungalathur</option>
          <option value="Perungudi">Perungudi</option>
          <option value="Pozhichalur">Pozhichalur</option>
          <option value="Poonamallee">Poonamallee</option>
          <option value="Porur">Porur</option>
          <option value="Pudupet">Pudupet</option>     
          <option value="Pulianthope">Pulianthope</option>
          <option value="Purasaiwalkam">Purasaiwalkam</option>
          <option value="Puthagaram">Puthagaram</option>
          <option value="Puzhal">Puzhal</option>
          <option value="Puzhuthivakkam/ Ullagaram">Puzhuthivakkam/ Ullagaram</option>      
          <option value="Raj Bhavan">Raj Bhavan</option>
          <option value="Ramavaram">Ramavaram</option>
          <option value="Red Hills">Red Hills</option>
          <option value="Royapettah">Royapettah</option>
          <option value="Royapuram">Royapuram</option>
          <option value="Saidapet">Saidapet</option>
          <option value="Saligramam">Saligramam</option>
          <option value="Santhome">Santhome</option>
          <option value="Sembakkam">Sembakkam</option>
          <option value="Selaiyur">Selaiyur</option>      
          <option value="Shenoy Nagar">Shenoy Nagar</option>
          <option value="Sholavaram">Sholavaram</option>
          <option value="Sholinganallur">Sholinganallur</option>
          <option value="Sithalapakkam">Sithalapakkam</option>
          <option value="Sowcarpet">Sowcarpet</option>
          <option value="St.Thomas Mount">St.Thomas Mount</option>
          <option value="Surapet">Surapet</option>
          <option value="Tambaram">Tambaram</option>
          <option value="Tharamani">Tharamani</option>
          <option value="T. Nagar">T. Nagar</option>
          <option value="Thirumangalam">Thirumangalam</option>
          <option value="Thirumullaivoyal">Thirumullaivoyal</option>
          <option value="Thiruneermalai">Thiruneermalai</option>
          <option value="Thiruninravur">Thiruninravur</option>
          <option value="Thiruvanmiyur">Thiruvanmiyur</option>
          <option value="Tiruverkadu">Tiruverkadu</option>
          <option value="Thiruvotriyur">Thiruvotriyur</option>
          <option value="Thuraipakkam">Thuraipakkam</option>
          <option value="Tirusulam">Tirusulam</option>
          <option value="Tiruvallikeni">Tiruvallikeni</option>
          <option value="Tondiarpet">Tondiarpet</option>
          <option value="Teynampet">Teynampet</option>
          <option value="United India Colony">United India Colony</option>
          <option value="Vandalur">Vandalur</option>
          <option value="Vadapalani">Vadapalani</option>
          <option value="Valasaravakkam">Valasaravakkam</option>
          <option value="Vallalar Nagar">Vallalar Nagar</option>
          <option value="Vanagaram">Vanagaram</option>
          <option value="Velachery">Velachery</option>
          <option value="Velappanchavadi">Velappanchavadi</option>
          <option value="Villivakkam">Villivakkam</option>
          <option value="Virugambakkam">Virugambakkam</option>
          <option value="Vyasarpadi">Vyasarpadi</option>
          <option value="Washermanpet">Washermanpet</option>
          <option value="West Mambalam ">West Mambalam</option>
          </select>
          {errors.stopb ? errors.stopb: null}
        </div>
                </div>
                <div className="userUpdateRight">
                  <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
