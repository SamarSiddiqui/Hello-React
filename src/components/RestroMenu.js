import { useState,useEffect } from "react";
import Shimmmer from "./Shimmer";

const RestaurantMenu = ()=> {
  const [resInfo,setresInfo] = useState()
  // const [resMenu,setresMenu] = useState(null)
  useEffect(()=>{
    fetchMenu() 
  },[])
  
  const fetchMenu = async ()=>{
    const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=76938&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    
    const resData = await response.json()
      
      // console.log(resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards[1].card?.info);
      const restaurants = resData?.data?.cards[2]?.card?.card?.info
      setresInfo(restaurants)
    }
    
    // if(resInfo === null) return <Shimmmer />
    
    // const {name} = resInfo
    console.log(resInfo);
 
    return (
        <div className="menu">
            <h1></h1>
            {/* <h1>{resInfo?.cuisines.join(', ')}</h1>
            <h1>{resInfo?.areaName}</h1>
            <h1>{resInfo?.avgRating}</h1>
            <h1>{resInfo?.costForTwoMessage}</h1> */}

            <ul>
                <li></li>
                <li>Kebab</li>
                <li>Diet Coke</li>
                <li>Tandoori Roti</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;