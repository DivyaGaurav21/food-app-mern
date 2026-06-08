import { useFoodByCategory } from "../data-query/useFoodByCategory";
import FoodCards from "./FoodCards";

const FoodCategory = ({ selectedCategory }: { selectedCategory: string }) => {
  const { data, isLoading, error } = useFoodByCategory(selectedCategory);

  return (
    <FoodCards data={data} isLoading={isLoading} error={error} selectedCategory={selectedCategory}/>
  );
};

export default FoodCategory;
