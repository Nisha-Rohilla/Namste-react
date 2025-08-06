import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        // const data = await fetch(listOfRestaurants)

        const json = await data.json();
        console.log(json)

        setListOfRestaurants(json?.data?.cards[4]?.card.card.gridElements?.infoStyle?.restaurants)

    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.data.rating > 4.3);
                    setListOfRestaurants(filteredList)
                }}>
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((res) => <RestaurantCard resData={res} key={res.info.id} />)}

            </div>
        </div>
    )
}

export default Body;