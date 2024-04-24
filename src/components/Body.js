import Rescards from "./Rescards"; 
import { useState, useEffect } from "react";
import Shimmmer from "./Shimmer";

let Body = () => {
  let [listofRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => { 
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const apiData = await response.json();
    setListOfRes(apiData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
    return listofRes?.length === 0 ? (
    <Shimmmer />
  ) : (
    <div className="resContainer">
      <div className="resArea">
        {  
          listofRes?.map((restaurant) => (
            <Rescards key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};
export default Body;
