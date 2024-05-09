import {Img_Url} from "../utils/constants"

let Rescards = (props)=>{
    let {resData} = props
    let {name,cuisines,locality,costForTwo,avgRating
      ,cloudinaryImageId,sla}  = resData?.info
      
    return <div className="w-80 m-1  p-[2px]   rounded-lg border-r-4 bg-slate-200">
      <div className="w-11/12 h-40 my-0 mx-auto mt-1 border-4">
          <img className="w-full h-full rounded-lg  " src={Img_Url + cloudinaryImageId}/>
      </div>

      <div className="resDetails">
       <div className="topDetails">
       <h4 style={{fontWeight:"bold"}}>{name}</h4>
       <h4 className="resRatings">{avgRating}⭐</h4>
       </div>
       <div className="middleDetails">
       <h4>{cuisines.slice(0,2).join(', ')}</h4>
       <h4>{costForTwo}</h4>
       </div>
       <div className="bottomDetails">
       <h4>{locality}</h4>
       <h4>{sla?.lastMileTravelString}</h4>

       </div>
       {/* <h4>{costForTwoString}</h4> */}
      </div>
       
    </div>
  }


  export default Rescards;