import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobListingsPage from './pages/JobListingsPage'; 
import LoginSignup from './pages/LoginSignup'; 
import NewJobForm from './pages/NewJobForm'; 
import MainLayout from "./pages/MainLayout";
import axios from 'axios';
import './App.css'
import { useState } from 'react';
import Application from './pages/Application';



const App=()=>{
   
  const[petJobs,setPetjobs]=useState( [
  ])
  

  const addToList=async(title,
    location,
    description,
    salary,
    timing,
    organization)=>{
    await axios.post("https://mern-jobportal-backend-306y.onrender.com/api/addpetjob",{
      title,
      location,
      description,
      salary,
      timing,
      organization

    })
     setPetjobs([...petJobs,{title,
      location,
      description,
      salary,
      timing,
      organization}])
  }
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/" element={<MainLayout />}>
        <Route path='/apply' element={<Application/>}></Route>
        <Route path="/job-listings" element={<JobListingsPage petJobs={petJobs} setPetjobs={setPetjobs} />} />
        <Route path='/jobform' element={<NewJobForm addToList={addToList}/>}></Route>
        
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



