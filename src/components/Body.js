import Rescards from "./Rescards"; 
import { useState,useEffect } from "react";
import { jsx } from "react/jsx-runtime";
import Shimmmer from "./Shimmer";
let Body = ()=>{
  
  let [listofRes,setListOfRes] = useState([])
  
    // useEffect(()=> {
    // fetchData()
    // },[])
    
    // const fetchData =  async () => {
    //  let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      
    //  let apiData = await response.json()
    // //  console.log(apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    // setListOfRes(apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // }
  


  
  const filterTopRated = ()=> {
    let filterdList = listofRes.filter((res)=>
         res.info.avgRating>=4.4)
        setListOfRes(filterdList)
  }


  
  return (
    <div className="resContainer ">
       <div className="filter">
        <div className="search">
        
         
         
        </div> 
       <button className="filter-btn" 
       onClick={filterTopRated}>Top Rated Restaurant
       </button>
         
        
        </div>

       
       <div className="resArea">
        
    {  //Cards rendered on screen are from here 
      listofRes.map((restaurant)=>(
        <Rescards key={restaurant.info.id} resData={restaurant} />
       
     ))
    }
    </div>
      </div>)
  }
  export default Body;