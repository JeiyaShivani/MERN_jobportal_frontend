import { useEffect } from "react";
import "./job.css";
import axios from "axios";
import {Link} from 'react-router-dom';

const JobListingsPage = ({ petJobs,setPetjobs }) => {
  console.log("Pet Jobs:", petJobs);
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await axios.get("https://mern-jobportal-backend-306y.onrender.com/api/getpetjob") 
      setPetjobs(response.data)
    }
    fetchData()
  },[])

  
  return (
    <div className="outermost">
      <h1 className="joblist">JOB LISTINGS</h1>
      <div className="jobsections">
      </div>

      <h2>Looking for home nurses or pet trainers? Click the button below!<br></br>
            
      <Link to="/jobform">
        
        <button className="jobpostbtn">POST A JOB</button>
        </Link>
      </h2>
      <h2 className="headingforjob">PET JOBS</h2>
        <div className="nursingjob-sec">
  
  {petJobs.map((job, index) => (
    <div className="card" key={index}>
      <div className="content">
        
        <div className="front">
          <h3>{job.title}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
        </div>
        <div className="back">
        <p><strong>Description:</strong>{job.description}</p>
          <p><strong>Timing:</strong> {job.timing}</p>
          <p><strong>Organization:</strong> {job.organization}</p>
          <Link to="/apply">
          <button className="applybtn" >Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
  );
};

export default JobListingsPage;








