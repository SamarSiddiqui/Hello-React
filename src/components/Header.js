import imageSrc from "../../logo.png"
import { useState } from "react"
let Header = ()=>{
      let [btnName,setBtnName] = useState('LogIn')

    return <div className="header">        
         <div className="logo">
         <img src= {imageSrc} alt="Logo" />
           </div>      
         <div className="options">
         <ul>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
           <button className="login" onClick={()=>{
            btnName==="Login"
            ? setBtnName('Logout')
            : setBtnName('Login')
          
           console.log(btnName);
          
          }}>{btnName}</button>
         </ul>
           </div>      
   
     </div>
   }

export default Header;   