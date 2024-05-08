import imageSrc from "../../logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
let Header = ()=>{
   
    let [logState,setlogState] = useState("LogIn")
    
   let onlineStatus = useOnlineStatus()
   console.log(onlineStatus);
    return <div className="header">         
         <div className="logo">
         <img src= {imageSrc} alt="Logo" />
           </div>      
         <div className="options">
         <ul>
         
         <li>{onlineStatus ?"🟢":"🛑"}</li>

           <li><Link to="/grocery">Grocery</Link></li>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
           <li>Cart</li>
           <li>
            <button style={{padding:"10px 20px"}}
            onClick={()=>{
             logState==="LogIn" ? setlogState("LogOut") : setlogState("LogIn")
            }}
            >{logState}</button>
           </li>
          
         </ul>
           </div>      
   
     </div>
   }

export default Header;   