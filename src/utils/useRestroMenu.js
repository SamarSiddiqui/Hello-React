import { useEffect, useState } from "react"
import { Menu_Url } from "./constants"

let useRestroMenu = (resId)=> {

    let [resInfo,setresInfo] = useState(null)

useEffect(()=> {
    fetchMenu()
},[])

  const fetchMenu = async ()=> {
    const response = await fetch(Menu_Url+resId)

    const resData = await response.json()
    
    setresInfo(resData.data)
  }

    return resInfo
}

export default useRestroMenu;