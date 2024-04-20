import {Img_Url} from "../utils/constants"


let Rescards = (props)=>{
    let {resData} = props
    let {name,cuisines,locality,costForTwoString,avgRating
      ,cloudinaryImageId}  = resData?.data
  
    return <div className="rescard">
      <div className="resPhoto">
          <img src={Img_Url + cloudinaryImageId}/>
      </div>
       <h4>{name}</h4>
       <h4>{cuisines.slice(0,2).join(', ')}</h4>
       <h4>{locality}</h4>
       <h4>{costForTwoString}</h4>
       <h4>{avgRating}⭐</h4>
       
    </div>
  }


  export default Rescards;