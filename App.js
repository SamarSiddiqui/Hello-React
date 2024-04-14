import React from "react"
import ReactDOM from "react-dom"

let heading = React.createElement('h1',{},'Hello From React')

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
