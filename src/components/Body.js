import Rescards from "./Rescards";
import resList from "../utils/mock";
let Body = ()=>{
    return <div className="resContainer ">
       <div className="searchBar">
         <h2>Search Bar</h2>
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