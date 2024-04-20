import Rescards from "./Rescards"; 
import resList from "../utils/mock";
import { useState } from "react";
// console.log(resList);
let Body = ()=>{
  let [ listOfRes,SetListOfRes] = useState(resList)
   
    return <div className="resContainer ">
       <div className="filter">
       <button className="filter-btn" onClick={()=>{
         let filterRes= listOfRes.filter((res)=>
            res.data.avgRating > 4.1
          )
          SetListOfRes(filterRes)
          console.log(filterRes);
        }}>Click To Filter Restro Above 4⭐</button>

       </div>
       <div className="resArea">
    {  
      listOfRes.map((restaurant,index)=>(
       <Rescards key={index} resData={restaurant}/>
      
     ))
    }
    </div>
      </div>
  }


  export default Body;