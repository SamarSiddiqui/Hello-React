/*
taking-- []
giving--
*/
import { Body_Url } from "./constants"
import { useEffect,useState } from "react"



const useResBody = ()=> {
    let [listofRes,setListOfRes] = useState([])
    let [filteredRestro, setFilteredRestro] = useState([])
    useEffect(()=> {
        fetchData()
    })

    const fetchData =  async () => {
        let response = await fetch(Body_Url)
         
        let apiData = await response.json()
      
       const restaraunts = apiData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
   
       
   
       setListOfRes(restaraunts)
       setFilteredRestro(restaraunts)
       
       } 

        return listofRes,filteredRestro
}

export default useResBody;