import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer"

const Body = () => {
  // state variable --  super powerful variable
  // whenever the state variable changes react rerenders the component
  const [sampleRestaurantData, setSampleRestraurantData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();  // run after component render
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.59884531236387&lng=73.7925515652969&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setSampleRestraurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // let { sampleRestaurantData } = resData;

  return sampleRestaurantData.length === 0 ? (<Shimmer />) : // condtional rendering
    (
      <div className="body">
        <div className="filter">
          <div className="Search">
            <input
              type="text" className="search-input" value={searchText}  //to make input box work we have to change the value of state variable as it is binded to state variable
              placeholder="Search for restaurants" onChange={(e) => {
                setSearchText(e.target.value);
              }}>
            </input>

            <button className="search-btn" onClick={() => {
              const filteredList = sampleRestaurantData.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList);
            }}>Search</button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = sampleRestaurantData.filter(
                (restaurant) => restaurant.info.avgRating > 4.2
              );
              setFilteredList(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="restaurant-list">
          {filteredList.map((restaurant) =>
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> <RestaurantCard resData={restaurant.info} /></Link>
          )}
        </div>
      </div>
    );
};

export default Body;
