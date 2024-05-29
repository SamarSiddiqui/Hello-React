import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import { About } from "./About"
import Contact from "./Contact"
import Error from "./Error"
import Cart from "./Cart"
import ResMenu from "./RestaurantMenu"
import { lazy, Suspense } from "react"
 import UserContext from "../utils/UserContext"
const Grocery = lazy(()=>import("./Grocery"))
//AuthenticationCode

const AppLayout = ()=>{
  let [userName,setUserName] = useState()

  useEffect(()=>{
   //We will make An Api call
    let userData = {
      name: "Samar"
    }
    setUserName(userData.name)
  },[])
  
 return (
   
   <UserContext.Provider value={{loginDetails:userName,setUserName}}>
 <div className=" w-full h-full">
      <Header />
     
      <Outlet />
    </div> 
  </UserContext.Provider>
)}

let appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      { 
        path:"restaurants/:resId",
        element: <ResMenu />
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  }
])

 

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)