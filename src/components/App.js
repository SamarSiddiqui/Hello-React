
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"



let AppLayout = ()=>{
 return <div className="main">
      <Header />
      <Body />
      <h1>Hello💕</h1>
    </div>
}




let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)