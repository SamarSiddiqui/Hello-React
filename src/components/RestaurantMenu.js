import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom" ;
import { MenuImg_Url } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";

  
const RestaurantMenu = ()=> {
  // const [resInfo,setresInfo] = useState(null)

  const {resId} = useParams()

//   useEffect(()=>{
//     fetchMenu() 
//   },[])
  
//   const fetchMenu = async ()=>{
//     const response = await fetch(Menu_Url + resId)
//     const resData = await response.json()
//     const restaurants = resData.data
//     setresInfo(restaurants)
// } 
   let resInfo = useRestroMenu(resId)

 


    if(resInfo === null) return <Shimmmer />
    
    const {name,cuisines,costForTwoMessage,locality,totalRatingsString,city,avgRating,sla,feeDetails} = resInfo?.cards[2]?.card?.card?.info 

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
    
    console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card  );
    return (
      <div className="menu">
        <div className="menu-items">
          <h2 className="menuHeading">{name}</h2>
          <div className="top-menu">
            <div className="top">
              <h4>⭐{avgRating}</h4>
              <h4>({totalRatingsString})</h4>
              <h4>{costForTwoMessage}</h4>
            </div>
            <div className="middle">
              <h4 style={{color:"lightcoral"}}>{cuisines.join(', ')}</h4>
              <h4 style={{color:"grey"}} >{sla.slaString}</h4>
              <h4>{locality}</h4>
            </div>
            <div className="bottom">
              <h4>₹{feeDetails.totalFee/100} {feeDetails.title} </h4>
            </div>
           
          </div>
          

        </div>
        
        <h1>Menu</h1>
            <ul>
              {itemCards?.map((item)=>(
              <li className="resItems"
               key={item?.card?.info?.id}>
                <button style={{float:"right"}}>Click Me</button>
                {/* <img src={`${MenuImg_Url}${item?.card?.info.imageId}`} style={{float:"right"}}/> */}
                {item?.card?.info?.name} - ₹ 
                {item?.card?.info?.price/100}
                
                </li>))}
          
            
            </ul>
      </div>
    )
}

export default RestaurantMenu;