import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import { About } from "./About"
import Contact from "./Contact"
import Error from "./Error"
import ResMenu from "./RestaurantMenu"
import { lazy, Suspense } from "react"
 
const Grocery = lazy(()=>import("./Grocery"))

const AppLayout = ()=>{
 return <div className="main">
      <Header />
      <Outlet />
      <h1>Hello💕</h1>
    </div>
}

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