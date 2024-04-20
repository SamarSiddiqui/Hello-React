import Rescards from "./Rescards"; 
import resList from "../utils/mock";

// console.log(resList);
let Body = ()=>{
   
   
    return <div className="resContainer ">
       <div className="filter">
        
       </div>
       <div className="resArea">
    {  
      resList.map((restaurant,index)=>(
       <Rescards key={index} resData={restaurant}/>
      
     ))
    }
    </div>
      </div>
  }


  export default Body;