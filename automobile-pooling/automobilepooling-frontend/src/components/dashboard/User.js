import React, { useState } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";
import authHeader from '../services/authHeader';



export default function User() {

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
    stopa:Yup.string().required("Location 1 is Mandatory"),
    stopb:Yup.string().required("Location 2 is Mandatory")
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
    stopa:'',
    stopb:'',
    designation:'',
    
  },
  validationSchema,
  onSubmit(values) {
      console.log(values);

        axios.post("http://localhost:9000/api/user/add",values,config).then(res=>{

          swal({
              text: "user register successfully!",
              icon: "success",
            });
    }
    ).catch((err)=>{
            console.log("There are Errors in the Entry")
        })   
  
      }
}) 

 
    return (
        <div>           
            <div className="container-md " style = { {  marginLeft :   "400px"  } } >
            <div className="col-sm-6">
            <div className="card"> 
            <div className="card-header"><h4>USER REGISTRATION</h4></div>
            <form onSubmit={handleSubmit} noValidate>

  
  
{/* <div class="mb-5 row">
  <label for="name" class="col-sm-4 col-form-label">Name</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="name" value={values.name} onChange={handleChange} />
    {errors.name ? errors.name : null}
  </div>
  </div> */}

<div class="mb-5 row">
  <label for="firstname" class="col-sm-4 col-form-label">First Name</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="firstname" value={values.firstname} onChange={handleChange} />
    {errors.firstname ? errors.firstname : null}
  </div>
  </div>

  
<div class="mb-5 row">
  <label for="lastname" class="col-sm-4 col-form-label">Last Name</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="lastname" value={values.lastname} onChange={handleChange} />
    {errors.lastname ? errors.lastname : null}
  </div>
  </div>



  <div class="mb-5 row">
  <label for="mobile" class="col-sm-4 col-form-label">Mobile Number</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="mobile" value={values.mobile} onChange={handleChange} />
    {errors.mobile ? errors.mobile : null}
  </div>
  </div>


  <div class="mb-5 row">
  <label for="designation" class="col-sm-4 col-form-label">Designation</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="designation" value={values.designation} onChange={handleChange} />
    {errors.designation ? errors.designation : null}
  </div>
  </div>


<div class="mb-5 row">
  <label for="source" class="col-sm-4 col-form-label">Source</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="source" value={values.source} onChange={handleChange} />
    {errors.source ? errors.source : null}
  </div>
  </div>

<div class="mb-5 row">
  <label for="destination" class="col-sm-4 col-form-label">Destination</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="destination" value={values.destination} onChange={handleChange} />
    {errors.destination ? errors.destination : null}
  </div>
  </div>


<div class="mb-5 row">
<label for="stopa" class="col-sm-4 col-form-label">Location 1</label>
    <div class="col-sm-6">
        <select class="form-select" name="stopa" onChange={handleChange} value={values.stopa}>
          <option value="-1">Please select your near loaction</option>
          <option value="1">Adambakkam</option>
          <option value="2">Adyar</option> 
          <option value="3">Alandur</option>
          <option value="4">Alapakkam</option> 
          <option value="5">Alwarpet</option>
          <option value="6">Alwarthirunagar</option> 
          <option value="7">Ambattur</option>
          <option value="8">Aminjikarai</option> 
          <option value="9">Anna Nagar</option>
          <option value="10">Annanur</option> 
          <option value="11">Arumbakkam</option>
          <option value="12">Ashok Nagar</option> 
          <option value="13">Avadi</option>
          <option value="14">Ayanavaram</option> 
          <option value="15">Besant Nagar</option>
          <option value="16">Basin Bridge</option> 
          <option value="17">Chepauk</option>
          <option value="18">Chetput</option> 
          <option value="19">Chintadripet</option>
          <option value="20">Choolai</option> 
          <option value="21">Choolaimedu</option>
          <option value="22">Chrompet</option> 
          <option value="23">Egmore</option>
          <option value="24">Ekkaduthangal</option> 
          <option value="25">Eranavur</option>
          <option value="26">Ennore</option> 
          <option value="27">Foreshore Estate</option>
          <option value="28">Fort St. George</option> 
          <option value="29">George Town</option>
          <option value="30">Gopalapuram</option> 
          <option value="31">Government Estate</option>
          <option value="32">Guindy</option> 
          <option value="33">Gerugambakkam</option> 
          <option value="34">IIT Madras</option>
          <option value="35">Injambakkam</option> 
          <option value="36">ICF</option>
          <option value="37">Iyyapanthangal</option> 
          <option value="38">Jafferkhanpet</option>
          <option value="39">Karapakkam</option> 
          <option value="40">Kattivakkam</option>
          <option value="41">Kattupakkam</option> 
          <option value="42">Kazhipattur</option>
          <option value="43">K.K. Nagar</option> 
          <option value="44">Keelkattalai</option>
          <option value="45">Kilpauk</option> 
          <option value="46">Kodambakkam</option>
          <option value="47">Kodungaiyur</option> 
          <option value="48">Kolathur</option>
          <option value="49">Korattur</option> 
          <option value="50">Korukkupet</option>
          <option value="51">Kottivakkam</option>
          <option value="52">Kotturpuram</option>
          <option value="53">Kottur</option>
          <option value="53">Kovilambakkam</option>
          <option value="54">Koyambedu</option>
          <option value="55">Kundrathur</option>
          <option value="56">Kottur</option>
          <option value="57">Kovilambakkam</option>
          <option value="58">Koyambedu</option>
          <option value="59">Kundrathur</option>
          <option value="60">Madhavaram</option>
          <option value="61">Madhavaram Milk Colony</option>      
          <option value="62">Madipakkam</option>
          <option value="63">Madambakkam</option>
          <option value="64">Maduravoyal</option>
          <option value="65">Manali</option>
          <option value="66">Manali New Town</option>
          <option value="67">Manapakkam</option>
          <option value="68">Mandaveli</option> 
          <option value="69">Mangadu</option>
          <option value="70">Mannady</option>
          <option value="71">Mathur</option>
          <option value="72">Medavakkam</option>
          <option value="73">Meenambakkam</option>
          <option value="74">MGR Nagar</option>
          <option value="75">Minjur</option>
          <option value="76">Mogappair</option>
          <option value="77">MKB Nagar</option>
          <option value="78">Mount Road</option>
          <option value="79">Moolakadai</option>
          <option value="80">Moulivakkam</option>
          <option value="81">Mugalivakkam</option>      
          <option value="82">Mudichur</option>
          <option value="83">Mylapore</option>
          <option value="84">Nandanam</option>
          <option value="85">Nanganallur</option>
          <option value="86">Nanmangalam</option>
          <option value="87">Neelankarai</option>
          <option value="88">Nemilichery</option>
          <option value="89">Nesapakkam</option>
          <option value="90">Nolambur</option>
          <option value="91">Noombal</option>
          <option value="92">Nungambakkam</option>
          <option value="93">Otteri</option>
          <option value="94">Padi</option>
          <option value="95">Pakkam</option>
          <option value="96">Palavakkam</option>
          <option value="97">Pallavaram</option>
          <option value="98">Pallikaranai</option>
          <option value="99">Pammal</option>      
          <option value="100">Park Town</option>
          <option value="101">Parry's Corner</option>
          <option value="102">Pattabiram</option>
          <option value="103">Pattaravakkam</option>
          <option value="104">Pazhavanthangal</option> 
          <option value="105">Peerkankaranai</option>
          <option value="106">Perambur</option>
          <option value="107">Peravallur</option>
          <option value="108">Perumbakkam</option>
          <option value="109">Perungalathur</option>
          <option value="110">Perungudi</option>
          <option value="111">Pozhichalur</option>
          <option value="112">Poonamallee</option>
          <option value="113">Porur</option>
          <option value="114">Pudupet</option>     
          <option value="115">Pulianthope</option>
          <option value="116">Purasaiwalkam</option>
          <option value="117">Puthagaram</option>
          <option value="118">Puzhal</option>
          <option value="119">Puzhuthivakkam/ Ullagaram</option>      
          <option value="120">Raj Bhavan</option>
          <option value="121">Ramavaram</option>
          <option value="122">Red Hills</option>
          <option value="123">Royapettah</option>
          <option value="124">Royapuram</option>
          <option value="125">Saidapet</option>
          <option value="126">Saligramam</option>
          <option value="127">Santhome</option>
          <option value="128">Sembakkam</option>
          <option value="129">Selaiyur</option>      
          <option value="130">Shenoy Nagar</option>
          <option value="131">Sholavaram</option>
          <option value="132">Sholinganallur</option>
          <option value="133">Sithalapakkam</option>
          <option value="134">Sowcarpet</option>
          <option value="135">St.Thomas Mount</option>
          <option value="136">Surapet</option>
          <option value="137">Tambaram</option>
          <option value="138">Tharamani</option>
          <option value="139">T. Nagar</option>
          <option value="140">Thirumangalam</option>
          <option value="141">Thirumullaivoyal</option>
          <option value="142">Thiruneermalai</option>
          <option value="143">Thiruninravur</option>
          <option value="144">Thiruvanmiyur</option>
          <option value="145">Tiruverkadu</option>
          <option value="146">Thiruvotriyur</option>
          <option value="147">Thuraipakkam</option>
          <option value="148">Tirusulam</option>
          <option value="149">Tiruvallikeni</option>
          <option value="150">Tondiarpet</option>
          <option value="151">Teynampet</option>
          <option value="152">United India Colony</option>
          <option value="153">Vandalur</option>
          <option value="154">Vadapalani</option>
          <option value="155">Valasaravakkam</option>
          <option value="156">Vallalar Nagar</option>
          <option value="157">Vanagaram</option>
          <option value="158">Velachery</option>
          <option value="159">Velappanchavadi</option>
          <option value="160">Villivakkam</option>
          <option value="161">Virugambakkam</option>
          <option value="162">Vyasarpadi</option>
          <option value="163">Washermanpet</option>
          <option value="164">West Mambalam </option>
        </select>
        {errors.stopa ? errors.stopa: null}      
      </div>
</div>
  

<div class="mb-5 row">
<label for="stopb" class="col-sm-4 col-form-label">Location 2</label>
    <div class="col-sm-6">
        <select class="form-select" name="stopb" onChange={handleChange} value={values.stopb}>
          <option value="-1">Please select your near loaction</option>
          <option value="1">Adambakkam</option>
          <option value="2">Adyar</option> 
          <option value="3">Alandur</option>
          <option value="4">Alapakkam</option> 
          <option value="5">Alwarpet</option>
          <option value="6">Alwarthirunagar</option> 
          <option value="7">Ambattur</option>
          <option value="8">Aminjikarai</option> 
          <option value="9">Anna Nagar</option>
          <option value="10">Annanur</option> 
          <option value="11">Arumbakkam</option>
          <option value="12">Ashok Nagar</option> 
          <option value="13">Avadi</option>
          <option value="14">Ayanavaram</option> 
          <option value="15">Besant Nagar</option>
          <option value="16">Basin Bridge</option> 
          <option value="17">Chepauk</option>
          <option value="18">Chetput</option> 
          <option value="19">Chintadripet</option>
          <option value="20">Choolai</option> 
          <option value="21">Choolaimedu</option>
          <option value="22">Chrompet</option> 
          <option value="23">Egmore</option>
          <option value="24">Ekkaduthangal</option> 
          <option value="25">Eranavur</option>
          <option value="26">Ennore</option> 
          <option value="27">Foreshore Estate</option>
          <option value="28">Fort St. George</option> 
          <option value="29">George Town</option>
          <option value="30">Gopalapuram</option> 
          <option value="31">Government Estate</option>
          <option value="32">Guindy</option> 
          <option value="33">Gerugambakkam</option> 
          <option value="34">IIT Madras</option>
          <option value="35">Injambakkam</option> 
          <option value="36">ICF</option>
          <option value="37">Iyyapanthangal</option> 
          <option value="38">Jafferkhanpet</option>
          <option value="39">Karapakkam</option> 
          <option value="40">Kattivakkam</option>
          <option value="41">Kattupakkam</option> 
          <option value="42">Kazhipattur</option>
          <option value="43">K.K. Nagar</option> 
          <option value="44">Keelkattalai</option>
          <option value="45">Kilpauk</option> 
          <option value="46">Kodambakkam</option>
          <option value="47">Kodungaiyur</option> 
          <option value="48">Kolathur</option>
          <option value="49">Korattur</option> 
          <option value="50">Korukkupet</option>
          <option value="51">Kottivakkam</option>
          <option value="52">Kotturpuram</option>
          <option value="53">Kottur</option>
          <option value="53">Kovilambakkam</option>
          <option value="54">Koyambedu</option>
          <option value="55">Kundrathur</option>
          <option value="56">Kottur</option>
          <option value="57">Kovilambakkam</option>
          <option value="58">Koyambedu</option>
          <option value="59">Kundrathur</option>
          <option value="60">Madhavaram</option>
          <option value="61">Madhavaram Milk Colony</option>      
          <option value="62">Madipakkam</option>
          <option value="63">Madambakkam</option>
          <option value="64">Maduravoyal</option>
          <option value="65">Manali</option>
          <option value="66">Manali New Town</option>
          <option value="67">Manapakkam</option>
          <option value="68">Mandaveli</option> 
          <option value="69">Mangadu</option>
          <option value="70">Mannady</option>
          <option value="71">Mathur</option>
          <option value="72">Medavakkam</option>
          <option value="73">Meenambakkam</option>
          <option value="74">MGR Nagar</option>
          <option value="75">Minjur</option>
          <option value="76">Mogappair</option>
          <option value="77">MKB Nagar</option>
          <option value="78">Mount Road</option>
          <option value="79">Moolakadai</option>
          <option value="80">Moulivakkam</option>
          <option value="81">Mugalivakkam</option>      
          <option value="82">Mudichur</option>
          <option value="83">Mylapore</option>
          <option value="84">Nandanam</option>
          <option value="85">Nanganallur</option>
          <option value="86">Nanmangalam</option>
          <option value="87">Neelankarai</option>
          <option value="88">Nemilichery</option>
          <option value="89">Nesapakkam</option>
          <option value="90">Nolambur</option>
          <option value="91">Noombal</option>
          <option value="92">Nungambakkam</option>
          <option value="93">Otteri</option>
          <option value="94">Padi</option>
          <option value="95">Pakkam</option>
          <option value="96">Palavakkam</option>
          <option value="97">Pallavaram</option>
          <option value="98">Pallikaranai</option>
          <option value="99">Pammal</option>      
          <option value="100">Park Town</option>
          <option value="101">Parry's Corner</option>
          <option value="102">Pattabiram</option>
          <option value="103">Pattaravakkam</option>
          <option value="104">Pazhavanthangal</option> 
          <option value="105">Peerkankaranai</option>
          <option value="106">Perambur</option>
          <option value="107">Peravallur</option>
          <option value="108">Perumbakkam</option>
          <option value="109">Perungalathur</option>
          <option value="110">Perungudi</option>
          <option value="111">Pozhichalur</option>
          <option value="112">Poonamallee</option>
          <option value="113">Porur</option>
          <option value="114">Pudupet</option>     
          <option value="115">Pulianthope</option>
          <option value="116">Purasaiwalkam</option>
          <option value="117">Puthagaram</option>
          <option value="118">Puzhal</option>
          <option value="119">Puzhuthivakkam/ Ullagaram</option>      
          <option value="120">Raj Bhavan</option>
          <option value="121">Ramavaram</option>
          <option value="122">Red Hills</option>
          <option value="123">Royapettah</option>
          <option value="124">Royapuram</option>
          <option value="125">Saidapet</option>
          <option value="126">Saligramam</option>
          <option value="127">Santhome</option>
          <option value="128">Sembakkam</option>
          <option value="129">Selaiyur</option>      
          <option value="130">Shenoy Nagar</option>
          <option value="131">Sholavaram</option>
          <option value="132">Sholinganallur</option>
          <option value="133">Sithalapakkam</option>
          <option value="134">Sowcarpet</option>
          <option value="135">St.Thomas Mount</option>
          <option value="136">Surapet</option>
          <option value="137">Tambaram</option>
          <option value="138">Tharamani</option>
          <option value="139">T. Nagar</option>
          <option value="140">Thirumangalam</option>
          <option value="141">Thirumullaivoyal</option>
          <option value="142">Thiruneermalai</option>
          <option value="143">Thiruninravur</option>
          <option value="144">Thiruvanmiyur</option>
          <option value="145">Tiruverkadu</option>
          <option value="146">Thiruvotriyur</option>
          <option value="147">Thuraipakkam</option>
          <option value="148">Tirusulam</option>
          <option value="149">Tiruvallikeni</option>
          <option value="150">Tondiarpet</option>
          <option value="151">Teynampet</option>
          <option value="152">United India Colony</option>
          <option value="153">Vandalur</option>
          <option value="154">Vadapalani</option>
          <option value="155">Valasaravakkam</option>
          <option value="156">Vallalar Nagar</option>
          <option value="157">Vanagaram</option>
          <option value="158">Velachery</option>
          <option value="159">Velappanchavadi</option>
          <option value="160">Villivakkam</option>
          <option value="161">Virugambakkam</option>
          <option value="162">Vyasarpadi</option>
          <option value="163">Washermanpet</option>
          <option value="164">West Mambalam </option>
        </select>
        {errors.stopb ? errors.stopb: null}      
      </div>
</div>
  
  
  <button class="btn btn-primary" type="submit" >Register</button>
  <button class="btn btn-primary" type="reset" >Reset</button>

  
</form>
        </div></div></div></div>
        
)}

