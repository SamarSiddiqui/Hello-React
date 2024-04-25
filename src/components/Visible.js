import Rescards from "./Rescards"; 
import { useState,useEffect } from "react";
import { jsx } from "react/jsx-runtime";
import Shimmmer from "./Shimmer";
let Body = ()=>{
  
  let [listofRes,setListOfRes] = useState([])
  let [filteredListofRes,setFilteredListOfRes] = useState([])

  const [searchText,setSearchext] = useState("")

  const fetchData = async ()=> { 
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    
    const apiData = await response.json()
    setListOfRes(apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredListOfRes(apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setLoading(false);

  }
  useEffect(()=>{
    fetchData()
  },[])    
    
  
  
  const filterTopRated = ()=> {
    let filterdList = listofRes.filter((res)=>
         res.info.avgRating>=4.4)
        setListOfRes(filterdList)
  }


  
  return listofRes?.length === 0 ?(
    <Shimmmer />
  ):(
    <div className="resContainer ">
       <div className="filter">
        <div className="search">
          <input type="text" className="searchBox" value={searchText} onChange={(e)=>{
            setSearchext(e.target.value)
            }}/>
          <button className="searchBtn" onClick={()=>{
             let filterdRestro = listofRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
             setFilteredListOfRes(filterdRestro)
          }}>Search</button>
        </div> 
       <button className="filter-btn" 
       onClick={filterTopRated}>Top Rated Restaurant
       </button>
        
        </div>
       
       <div className="resArea">
         
    {  //Cards rendered on screen are from here 
      filteredListofRes?.map((restaurant)=>(
        <Rescards key={restaurant.info.id} resData={restaurant} />
      
     ))
    }
    </div>
      </div>)
  }
  export default Body;