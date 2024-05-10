import Rescards, {promotedRestaurant} from "./Rescards"; 
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
 let PromotedRestro = promotedRestaurant(Rescards)
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
  
  
    let onlineStatus = useOnlineStatus()
   if(onlineStatus===false) {
     return(
       <h1>Ahh Ahh, I Guess You Lost The Internet Connection. 🥺🥺</h1>
     )
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
        
         <input className="border-2 mx-5 border-red-300" value={searchText} 
         onChange={(e)=>{setSearchText(e.target.value)}}
         />
         <button className=" bg-slate-500 px-3 py-1 rounded-lg" 
         onClick={()=>{
         const newFilteredRestro= listofRes.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())))
         
      setFilteredRestro(newFilteredRestro)
         }}
          
          >Search</button>
         
       <button className=" bg-cyan-300 px-3 py-1 rounded-lg mx-10 my-3" 
       onClick={filterTopRated}>Top Rated Restaurant
       </button>
        </div> 
         
        
        </div>

       
       <div className="flex flex-wrap">

        {// Initially
        /* {filteredRestro.map((restaurant)=> (
          <Rescards key={restaurant.data.id} resData={restaurant}/>
        ))} */}
    {  //Cards rendered on screen are from here & key will always be with the parent element. 
      filteredRestro?.map((restaurant)=>(
        <Link key={restaurant.info.id}
        to={"restaurants/"+ restaurant.info.id}
        style={{textDecoration:"none"}}>
          {restaurant.info.promoted ? <PromotedRestro resData={restaurant}/> :<Rescards  resData={restaurant} />}
                
        </Link>
       
     ))
    }
    </div>
      </div>)
  }
  export default Body;