import Rescards from "./Rescards"; 
import { useState,useEffect } from "react";
 import Shimmmer from "./Shimmer";
 import {Link} from "react-router-dom";
 import { Body_Url } from "../utils/constants";
 import useResBody from "../utils/useResBody";
 import useOnlineStatus from "../utils/useOnlineStatus";
 
let Body = ()=>{
  let [listofRes,setListOfRes] = useState([])
  let [filteredRestro, setFilteredRestro] = useState([])
  let [searchText,setSearchText] = useState("")

//  let {listofRes,filteredRestro} = useResBody()
    useEffect(()=> { 
    fetchData() 
    },[])
    
    const fetchData =  async () => {
     let response = await fetch(Body_Url)
      
     let apiData = await response.json()
   
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

        {// Initially
        /* {filteredRestro.map((restaurant)=> (
          <Rescards key={restaurant.data.id} resData={restaurant}/>
        ))} */}
    {  //Cards rendered on screen are from here & key will always be with the parent element. 
      filteredRestro?.map((restaurant)=>(
        <Link key={restaurant.info.id}
        to={"restaurants/"+ restaurant.info.id}
        style={{textDecoration:"none"}}>
        <Rescards  resData={restaurant} />        
        </Link>
       
     ))
    }
    </div>
      </div>)
  }
  export default Body;