import { useContext, useState } from "react";
import { Img_Url } from "../utils/constants";


const ItemList = ({ items }) => {
  let [addItem,setAdditem] = useState(0)

  // const addedItem = ()=> {
  //   console.log('clicked');
  // }
  return ( 
    <div>
      {items.map((item) => (
        <div className="itemCard" key={item.card.info.id}>
          <div className="itemList">
            <h1 className="text-[20px] font-black">{item.card.info.name}</h1>
            <h4 className="font-semibold">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h4>
            <div className="itemDescription">
              <p>{item.card.info.description}</p>
            </div>
          </div>
            
            <div>

          <div className="itemImage">
       <img src={Img_Url + item.card.info.imageId}/>        
          </div>

          <div className="addedBtn">
          <h3 onClick={()=>{setAdditem(addItem--)}}>-</h3>
            <button className="">{addItem}</button>
          <h3 onClick={()=>{setAdditem(addItem++)}}>+</h3>
          </div>

            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
