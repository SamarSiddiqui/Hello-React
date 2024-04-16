import React from "react"
import ReactDOM from "react-dom/client"
let root = ReactDOM.createRoot(document.getElementById('root'))


//React Element
let heading = React.createElement('h1',{},'Hello I am React Element.💕')

let span = <span>Hola  </span>

//React Element Using Jsx
let Title =  <h1>{span}Hello From Jsx.{span}😊</h1>
// JsxCode ==> ReactElement ==> JsObject ==> Html element


// ReactComponents  (Functional  Components)

let HeadingComponent = () =>{
    return <div>
        {heading}
        {Title}
        <h1>Hello from Functional Component.😍</h1>
    </div>
}



//   < />
root.render(<HeadingComponent />)
// console.log(heading);
// console.log(title);