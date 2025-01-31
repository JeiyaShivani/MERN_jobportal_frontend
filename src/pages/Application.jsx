import React, { useState } from "react";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import './profilesetup.css';
import axios from "axios";

const Application = () => {
  
  const[applicantname,setApplicantname]=useState("")
  const[applicantemail,setApplicantemail]=useState("")
const[contact,setContact]=useState("")

const handleEmailchange=(e)=>{
  setApplicantemail(e.target.value)
}
const handlenamechange=(e)=>{
  setApplicantname(e.target.value)
}

const handlenumberchange=(e)=>{
  setContact(e.target.value)
}


const addApplication=async(e)=>{
  e.preventDefault()
  try{
    if (!applicantname || !applicantemail || !contact){
      alert("Please fill all the fields!")
    }
    const response= await axios.post("https://mern-jobportal-backend-306y.onrender.com/checkifapplied",{
      applicantemail: applicantemail
    })
    if(response.data.hasApplied){
      alert("You have applied already for this job")
      return
    }
    else{
      await axios.post("https://mern-jobportal-backend-306y.onrender.com/addapplication", {
        applicantname: applicantname,
        applicantemail: applicantemail,
        contactno: contact,
      })
      alert("You have successfully applied for the job")
      setApplicantname("");
        setApplicantemail("");
        setContact("");
        window.location.href = "/job-listings"; 
    }
  }
  catch(error){
    console.log(error)
    alert("Something went wrong. Please try again later.")
  }
}

  return (
    <div className="outer-profile-container">
      <div className="imagepart">
        <h2 className="left-heading">Looking for Compassionate Talent<br></br> or Opportunities? </h2>
        <img src={image4} className="dogimage" alt="Dog" />
      </div>
      <div className="profile-container">
        <h2 className="profile-title">JOB APPLICATION</h2>
        <form  onSubmit={addApplication}>
          <div className="profile-form-group">
            <label htmlFor="name" className="profile-label">Name</label>
            <input type="text" id="name" className="profile-input" required  value={applicantname} onChange={handlenamechange} />
          </div>

          <div className="profile-form-group">
            <label htmlFor="email" className="profile-label">Email</label>
            <input type="email" id="email" className="profile-input" required value={applicantemail} onChange={handleEmailchange}/>
          </div>

          <div className="profile-form-group">
            <label htmlFor="contact" className="profile-label">Contact</label>
            <input type="text" id="contact" className="profile-input" required value={contact} onChange={handlenumberchange} />
          </div>


          <div className="profile-form-group">
       
            <button type="submit" className="profile-submit-button">Apply</button>
           
            
          </div>
        </form>
      </div>
      <div className="imagepart">
        <h2 className="right-heading">Apply and <br></br>Connect Today!</h2>
        <img src={image5} className="homenurse" alt="Dog" />
      </div>
    </div>
  );
};

export default Application;
