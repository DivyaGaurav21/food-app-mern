import { useSearchParams } from "react-router-dom";
import { useFoodByRestaurant } from "../data-query/useFoodByRestaurant";
import FoodCards from "./FoodCards";

const Restaurants = () => {
  const [searchParams] = useSearchParams();

  const restaurantName = searchParams.get("restaurantName") || "";

  const { data, isLoading, error } =
    useFoodByRestaurant(restaurantName);

  console.log("Restaurant Name:", restaurantName);
  console.log("Foods:", data);

  return (
    <div className="pt-20">
      <FoodCards data={data} isLoading={isLoading} error={error} selectedCategory = {`Restaurant ${restaurantName}`}/>
    </div>
  );
};

export default Restaurants;