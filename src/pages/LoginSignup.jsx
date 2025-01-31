import { useState } from "react"
import image2 from "../assets/image2.png";


import './loginsignup.css'
import Card from '@mui/material/Card';

const LoginSignup=()=>{
    const [isSignup,setSignup]=useState(false)

    const toggleOption=()=>{
        setSignup(!isSignup)
        setError(""); 
    }

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
   
    const  handleName=(e)=>{
      setName(e.target.value)
    }
   const handleEmail=(e)=>{
    setEmail(e.target.value)
   }
   const handlePassword=(e)=>{
    setPassword(e.target.value)
   }
   const handleloginemail=(e)=>{
    setEmail(e.target.value)
   }
   const handleloginpwd=(e)=>{
    setPassword(e.target.value)
   }



   const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch("https://mern-jobportal-backend-306y.onrender.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, role: "seeker" }), 
        });

        const data = await response.json();
        
        if (response.ok) {
            alert("Signup successful!");
            setSignup(false); 
        } else {
            alert(data.message); 
        }
    } catch (error) {
        console.error("Error signing up:", error);
    }
};

const handleLogin = async (e) => {
  e.preventDefault();
  
  try {
      const response = await fetch("https://mern-jobportal-backend-306y.onrender.com/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
          alert("Login successful!");
          window.location.href = "/job-listings";
      } else {
          alert(data.message); 
      }
  } catch (error) {
      console.error("Error logging in:", error);
  }
};


   return(
    <>
    <div className="outercontainer" >
     <div className="login-signup-container">
      <Card>
      <div className="form-container">
        {isSignup ? (
          <div className="signup-form">
            <h2 className="text">CREATE AN ACCOUNT !</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" required  value={name} onChange={handleName}/>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required value={email} onChange={handleEmail} />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Enter your password" required value={password} onChange={handlePassword}/>
              
              <button type="submit" onClick={handleSignup}>Sign Up</button>
              
          
            </form>
            <p className="text">
              Already have an account?{' '}
              <span className="toggle-link" onClick={toggleOption}>
                Login
              </span>
            </p>
          </div>
        ) : (
          <div className="login-form">
            <h2 className="text">LOGIN TO YOUR ACCOUNT!</h2>
            <form>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required value={email} onChange={handleloginemail} />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Enter your password" required value={password} onChange={handleloginpwd}/>

              <button type="submit" onClick={handleLogin}>Login</button>
        
              
            </form>
            <p className="text">
              Don't have an account?{' '}
              <span className="toggle-link" onClick={toggleOption}>
                Sign Up
              </span>
            </p>
          </div>
        )}
      </div>
      </Card>
    </div>
    <div>
      <img src={image2} alt="image"></img>
    </div>
    </div>
    
    </>
   )
}
export default LoginSignup