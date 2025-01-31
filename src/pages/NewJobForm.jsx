import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import image3 from "../assets/imag3.png";
import './jobform.css'; 

// recieving addToList func as props
const NewJobForm=(props)=>{   
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);  
  };
  
  const [title,setTitle]=useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [timing, setTiming] = useState("");
  const [organization, setOrganization] = useState("");

  const addJob=(e)=>{
    e.preventDefault();
    if (
      title === "" ||
      location === "" ||
      description === "" ||
      salary === "" ||
      timing === "" ||
      organization === ""
    ) {
      alert("Please fill in all the fields before submitting!");
      return;
    }
    // const jobData = {
    //   // id: Date.now(),
    //   title,
    //   location,
    //   description,
    //   salary,
    //   timing,
    //   organization,
    // };
    // props.addToList(jobData)

    props.addToList(title, location, description, salary, timing, organization);
    alert("Job has been posted successfully!Check it out in job listings")
    
    // console.log("Job posted",jobData);
    console.log("Job posted",{title, location, description, salary, timing, organization})
    setTitle("");
    setLocation("");
    setDescription("");
    setSalary("");
    setTiming("");
    setOrganization("");
  }


  return(
    <>
    <div className='outerbody'>
      <div>
        <h2 className='paratag'>Finding the right care for your loved ones made easy –<br></br> post a job and let us help!</h2>
        <img src={image3}></img>
      </div>
    <div className="job-form-container">
      <h1 className="form-title">POST A NEW JOB</h1>
      <form className="job-form">
        <div className="form-group">

          <label htmlFor="title" className='formlabel'>Job Title</label>
          <input type="text" id="title" name="title" required className='forminput' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="location" className='formlabel'>Location</label>
          <input type="text" id="location" name="location" required className='forminput' value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="description" className='formlabel'>Job Description</label>
          <textarea id="description" name="description" rows="2" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="salary" className='formlabel'>Salary</label>
          <input type="text" id="salary" name="salary" required className='forminput' value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="timing" className='formlabel'>Timing</label>
          <input type="text" id="timing" name="timing" required className='forminput' value={timing} onChange={(e)=>setTiming(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="organization" className='formlabel'>Organization</label>
          <input type="text" id="organization" name="organization" required  className='forminput' value={organization} onChange={(e) => setOrganization(e.target.value)}/>
        </div>


        <div className="form-group">
          <button type="submit" className="submit-button" onClick={addJob}>Post Job</button>
        </div>
      </form>
      
    </div>
    </div>
    </>
  )
}
export default NewJobForm