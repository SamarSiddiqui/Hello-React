import React from "react"
import ReactDOM from "react-dom/client"
import imageSrc from "./logo.png"

// Header 1) logo 2) About,Contact,Cart
// Body  1) SearchBar 2) FoodContainer 2.1) ResCards


let Header = ()=>{
 return <div className="header">        
      <div className="logo">
      <img src= {imageSrc} alt="Logo" />
        </div>      
      <div className="options">
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
        </div>      

  </div>
}

let Rescards = ({name,cuisines,locality})=>{
  
  return <div className="rescard">
    <div className="resPhoto">
           
    </div>

    <h4>{name}</h4>  
    <h4>{cuisines}</h4>
    <h4>{locality}</h4>
  </div>
}


let resObj = {
                    "info": {
                      "id": "60379",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Saharaganj Mall",
                      "areaName": "Hazratganj",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1K+",
                       "availability": {
                        "nextCloseTime": "2024-04-16 23:00:00",
                        "opened": true
                      }
                    }
}
let Body = ()=>{
 return <div className="resContainer">
    <div className="searchBar">
      <h2>Search Bar</h2>
    </div>
    <div className="resArea">       
       <Rescards name="Pizza Hut" cuisines="Pizza" locality="HazratGanj"/>
       <Rescards name="Idrees Biryani" cuisines="Biryani" locality="Chowk"/>
       <Rescards name="Al Baik" cuisines="Zinger Burger" locality="Gomti Nagar"/>
       <Rescards name="Tunday" cuisines="Kebaab" locality="Aminabad"/>
       
       
       
       
        
    </div>

  </div>
}
let MainContainer = ()=>{
 return <div className="main">
      <Header />
      <Body />
      <h1>Hello💕</h1>
    </div>
}



let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MainContainer />)