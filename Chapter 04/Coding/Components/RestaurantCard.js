import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
    const { name, avgRating, cuisines, costForTwo, sla } = resData;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={CDN_URL + resData.cloudinaryImageId} alt="restaurant-logo"></img>
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
