import { useState } from "react"

export function Greeting (){
    const [state,setState] = useState('Light')
    return (
        <button className="minusBtn"
        onClick={()=> {
            state==="Light"? setState('Dark') : setState('Light')
        }}
        >{state}
        
        </button>
    )
}