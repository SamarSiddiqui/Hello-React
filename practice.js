import React from "react"
import ReactDOM from "react-dom/client"


let root = ReactDOM.createRoot(document.getElementById('root'))
let Child = (props)=> {
  return (
    <div>
      <h1>{props.greet}</h1>
      <h1>{props.heading}</h1>

    </div>
  )
}
let Parent = ()=> {
  return (
    <div className="profile">
      < Child greet="Salam," heading="Hello  From Props" />
    </div>
  )
}

root.render(<Parent/>)