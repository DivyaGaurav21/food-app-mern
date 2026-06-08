import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFoodByRestaurant } from "../data-query/useFoodByRestaurant";

const Restaurants = () => {
  const [searchParams] = useSearchParams();

  const restaurantName = searchParams.get("restaurantName") || "";

  const { data, isLoading, error } =
    useFoodByRestaurant(restaurantName);

  console.log("Restaurant Name:", restaurantName);
  console.log("Foods:", data);

  return (
    <div className="max-w-6xl m-auto px-4 md:px-12 pb-10">
      lorem1000
    </div>
  );
};

export default Restaurants;