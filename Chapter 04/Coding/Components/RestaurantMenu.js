import { useEffect, useState } from "react";

const RestaurantMenu = () => {

    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        console.log("RestaurantMenu component mounted");
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        const resdata = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.59884531236387&lng=73.7925515652969&&submitAction=ENTER&restaurantId=12345");
        const data = await resdata.json();
        console.log(data.data?.cards[2]?.card?.card.info);
    }

    return (
        <div className="restaurant-menu">
            <h1>Restaurant Menu</h1>
            <h2>Menu Items</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
                <li>Salad</li>
            </ul>
            <h2>Contact Us</h2>
            <p>Email:</p>
        </div>
    );
}

export default RestaurantMenu;