import { useState,useEffect } from "react";
import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_Url } from "../utils/constants";


const RestaurantMenu = ()=> {
  const [resInfo,setresInfo] = useState(null)
  let {resId} = useParams()

  useEffect(()=>{
    fetchMenu() 
  },[])
  
  const fetchMenu = async ()=>{
    const response = await fetch(Menu_Url + resId)
    const resData = await response.json()
    const restaurants = resData?.data
    setresInfo(restaurants)
}
    
    if(resInfo === null) return <Shimmmer />
    
    const {name,cuisines,costForTwoMessage,locality,totalRatingsString,city,avgRating} = resInfo?.cards[2]?.card?.card?.info || {}

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card 
    
 
    return (
      <>
        <div className="menu">
          <div className="right-menu">
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{locality}, {city}</h3>
            <h3>{costForTwoMessage}</h3>
          </div>
          <div className="left-menu">
            <h4>{avgRating}⭐</h4>
            <h4>{totalRatingsString}</h4>
          </div>

        </div>
        <h1>Menu</h1>
            <ul>
              {itemCards.map((item)=>(
              <li key={item.card.info.id}>
                {item.card.info.name} - ₹ 
                {item.card.info.price/100}
                </li>))}
          
            
            </ul>
      </>
    )
}

export default RestaurantMenu;