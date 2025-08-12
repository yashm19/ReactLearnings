import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams(); // get the restaurant id from the url
    const restaurantMenu = useRestaurantMenu(resId); // custom hook to fetch restaurant menu data

    if (restaurantMenu === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString, sla
    } = restaurantMenu?.cards[2]?.card?.card?.info;
    console.log(restaurantMenu?.cards[2]?.card?.card?.info);
    // console.log(restaurantMenu)
    const { itemCards } = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div className="res-details">
            <section className="res-header">
                <div>
                    <h1>{name}</h1>
                    <p>{cuisines.join(", ")} </p>
                    <p>{locality}</p>
                </div>
                <div className="res-rating">
                    <h2>⭐{avgRating}</h2>
                    <hr />
                    <h4>{totalRatingsString}</h4>
                </div>
            </section>
            <hr />
            <section className="res-deliveryInfo">
                <h3>🕗{sla.slaString}</h3>
                <p>💵{costForTwoMessage}</p>
            </section>
            <hr />
            <section className="res-recomends">
                <h2>Recommended ({itemCards?.length})</h2>
                <ul>
                    {
                        itemCards?.map((item) => (
                            <li key={item.card.info.id}>
                                <h3>{item.card.info.name}</h3>
                                <p>{" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
}

export default RestaurantMenu;