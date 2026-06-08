import { useQuery } from "@tanstack/react-query";
import type { FoodItem } from "./useFoodList";


const fetchFoodByCategory = async (
  category: string
): Promise<FoodItem[]> => {
  const res = await fetch(
    `https://food-app-mern-qzo1.onrender.com/api/foodcategory?category=${category}`
  );

  const data = await res.json();

  if (!data.success) {
    throw new Error("Failed to fetch foods");
  }

  return data.data;
};

export const useFoodByCategory = (category: string) => {
  return useQuery({
    queryKey: ["foods", category],
    queryFn: () => fetchFoodByCategory(category),
    enabled: !!category, // run only if category exists
    staleTime: 1000 * 60 * 5,
  });
};