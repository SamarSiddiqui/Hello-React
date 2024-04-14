import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement('h1',{},'Hello From React💕')

const root = ReactDOM.createRoot( document.getElementById("root")); 
// const oot = createRoot(rootElement);
root.render(heading)