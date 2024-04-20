import imageSrc from "../../logo.png"
let Header = ()=>{
    return <div className="header">        
         <div className="logo">
         <img src= {imageSrc} alt="Logo" />
           </div>      
         <div className="options">
         <ul>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
         </ul>
           </div>      
   
     </div>
   }

export default Header;   