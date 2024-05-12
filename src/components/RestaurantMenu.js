import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MenuImg_Url, Img_Url } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";
import RestroMenuItem from "./RestroItems";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  let resInfo = useRestroMenu(resId);

 

  const [showIndex,setShowIndex] = useState(null)
  if (resInfo === null) return <Shimmmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    totalRatingsString,
    city,
    avgRating,
    sla,
    feeDetails,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="border-8 text-center">
      <div className="w-4/12 h-40 my-4 mx-4 mt-1 absolute">
        <img
          className="w-full h-full rounded-lg  "
          src={Img_Url + cloudinaryImageId}
        />
      </div>
      <div className="text-center mx-5">
        <h1 className="font-black text-2xl">{name}</h1>
        <div className="top-menu">
          <div className="font-black">
            <h4 className="">({totalRatingsString})</h4>
            <h4>{costForTwoMessage}</h4>
          </div>
          <div className="middle">
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{locality}</h4>
          </div>
          <div className="bottom">
            <h4>
              ₹{feeDetails.totalFee / 100} {feeDetails.title}{" "}
            </h4>
          </div>
        </div>
      </div>

      <h1>Menu</h1>
      <div className="">
        {categories.map((category, index) => (
          <RestroMenuItem
            data={category?.card?.card}
            key={index}
            showItems={index === showIndex ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
