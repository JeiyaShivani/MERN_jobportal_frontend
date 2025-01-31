import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Header=()=>{
    const navigate=useNavigate()
    const goback=()=>{
        navigate(-1)
    }

    const logout=()=>{
        navigate("/loginsignup")
    }
    return(
        <>
        <header>
            <button onClick={goback} 
            style={{
                width: "150px",
                height: "70px",
                padding: "12px",
                margin:"30px",
                backgroundColor: "#ff5c5c", 
                color: "white",
                fontSize: "1.2rem",
                cursor: "pointer"
              }}
            
            >GO BACK</button>
            <button onClick={logout}   style={{
                width: "150px",
                height: "70px",
                padding: "12px",
                margin:"30px",
                marginLeft:"1000px",
                backgroundColor: "#ff5c5c", 
                color: "white",
                fontSize: "1.2rem",
                cursor: "pointer"
              }}>LOGOUT</button>
        </header>
        
        </>
    )
}
export default Header