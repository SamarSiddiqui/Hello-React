import imageSrc from "../../logo.png"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

import UserContext from "../utils/UserContext"

let Header = ()=>{
    let userData = useContext(UserContext)
    
    let [logState,setlogState] = useState("LogIn")
    
   let onlineStatus = useOnlineStatus()
    return <div className="flex justify-between border-b-4">         
         <div className="w-28 h-12 m-0 p-1">
         <img className="w-full h-full object-cover" src= {imageSrc} alt="Logo" />
           </div>      
         <div >
         <ul className="flex items-center">
         
          <li className="py-4 px-5 font-bolder text-sm">{onlineStatus ? "🟢" : "🛑"}</li>

           <li className="py-4 px-3   font-bolder text-lg"><Link to="/grocery">Grocery</Link></li>
           <li className="py-4 px-3   font-bolder text-lg"><Link to="/">Home</Link></li>
           <li className="py-4 px-3   font-bolder text-lg"><Link to="/about">About</Link></li>
           <li className="py-4 px-3   font-bolder text-lg"><Link to="/contact">Contact</Link></li>
           <li className="py-4 px-3   font-bolder text-lg"><Link to="/cart">Cart</Link></li>
           <li className="py-4 px-3   font-bolder text-lg">
            <button className=" bg-pink-300" style={{padding:"10px 20px"}}
            onClick={()=>{
             logState==="LogIn" ? setlogState("LogOut") : setlogState("LogIn")
            }}
            >{logState}</button>
           </li>
           <li className="py-4 px-3   font-extrabold text-lg">{userData.loginDetails}</li>
          
         </ul>
           </div>      
   
     </div>
   }

export default Header;   