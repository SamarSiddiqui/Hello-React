import Rescards from "./Rescards"; 
import { useState,useEffect } from "react";
 import Shimmmer from "./Shimmer";
 
let Body = ()=>{
  let [listofRes,setListOfRes] = useState([])
  // console.log(listofRes);
  let [filteredRestro, setFilteredRestro] = useState([])
  let [searchText,setSearchText] = useState("")
    useEffect(()=> { 
    fetchData()
    },[])
    
    const fetchData =  async () => {
     let response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.87560&lng=80.91150")
      
     let apiData = await response.json()
    //  console.log(apiData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    //  const restaurants = apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    const restaraunts = apiData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants

    

    setListOfRes(restaraunts)
    setFilteredRestro(restaraunts)
    
    } 
  


  
  const filterTopRated = ()=> {
    let filterdList = listofRes.filter((res)=>
         res.info.avgRating>4.2)
        setFilteredRestro(filterdList)
  }

 if(listofRes?.length===0) {
  return (
    <Shimmmer />
  )
 }
  
  return (
    <div className="resContainer ">
       <div className="filter">
        <div className="search">
        
         <input className="searchBox" value={searchText} 
         onChange={(e)=>{setSearchText(e.target.value)}}
         />
         <button className="searchBtn" 
         onClick={()=>{
         const newFilteredRestro= listofRes.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())))
         
      setFilteredRestro(newFilteredRestro)
         }}
          
          >Search</button>
         
        </div> 
       <button className="filter-btn" 
       onClick={filterTopRated}>Top Rated Restaurant
       </button>
         
        
        </div>

       
       <div className="resArea">
        
    {  //Cards rendered on screen are from here 
      filteredRestro?.map((restaurant)=>(
        <Rescards key={restaurant.info.id} resData={restaurant} />
       
     ))
    }
    </div>
      </div>)
  }
  export default Body;