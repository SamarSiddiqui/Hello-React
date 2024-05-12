import { useState } from "react";
import ItemList from "./ItemList";

const RestroMenuItem  = ({data,showItems,index}) => {
    const handleClick = ()=> {
        // setAddItems(!showItems)
    }
    return (
        <div className="w-4/5 my-3 mx-auto shadow-xl">
            <div className="flex justify-between  px-3 weight " onClick={handleClick}>
            <h2 className="font-extrabold text-lg py-2">{data?.title} ({data?.itemCards.length})</h2>
            <h3 className="py-3">🔽</h3>
            </div>
           <div>
            {showItems && <ItemList items={data?.itemCards}/>} 
           </div>
        </div>

        // {w-8/12 mx-auto flex justify-between px-5 py-3 my-3 shadow-xl}
    )
}


export default RestroMenuItem;