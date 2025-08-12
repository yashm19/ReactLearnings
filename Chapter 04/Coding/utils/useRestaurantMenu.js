import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const SWIGGY_MENU_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.59884531236387&lng=73.7925515652969&restaurantId=";

    // useeffect with empty dependency array will run only once when the component mounts
    useEffect(() => {
        console.log("useRestaurantHook called for restaurant id: " + resId);
        fetchRestaurantMenu();
    }, []);

    // fetch the restaurant menu data from the api
    const fetchRestaurantMenu = async () => {
        const resdata = await fetch(SWIGGY_MENU_API_URL + resId);
        const data = await resdata.json();
        setRestaurantMenu(data?.data);
    }
    return restaurantMenu;
}

export default useRestaurantMenu;