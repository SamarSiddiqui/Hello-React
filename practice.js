import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { Greeting } from "./CountGreeting"

let Mode = ()=> {
  let [mode,setMode] = useState()
  const [state,setState] = useState('Light')
  return (
    <>
    <h1 style={mode}>Hello From React.</h1> 
    <button className="minusBtn"
        onClick={()=> {
            if(state==='Light'){
              setState('Dark')
              setMode({color:"black"})
              
            } else{
              setState('Light')
              setMode({color:"white"})
            }
        }}
        >{state}
        
        </button>   
    </>
  )
 
}

 

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Mode />)