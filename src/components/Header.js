import imageSrc from "../../logo.png"
import { useState } from "react"
let Header = ()=>{
   
    let [logState,setlogState] = useState("LogIn")
    return <div className="header">         
         <div className="logo">
         <img src= {imageSrc} alt="Logo" />
           </div>      
         <div className="options">
         <ul>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
           <li>
            <button style={{padding:"10px 20px"}}
            onClick={()=>{
             logState==="LogIn"
             ? setlogState("LogOut")
             : setlogState("LogIn")
            }}
            >{logState}</button>
           </li>
          
         </ul>
           </div>      
   
     </div>
   }

export default Header;   