import { useContext, useState } from "react";
import { Img_Url } from "../utils/constants";


const ItemList = ({ items }) => {
  
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

          <div className="itemImage">
            <img src={Img_Url + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
