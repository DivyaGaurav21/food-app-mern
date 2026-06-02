import { useQuery } from "@tanstack/react-query";

export interface FoodItem {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

// 🔹 API call
const fetchFood = async (): Promise<FoodItem[]> => {
  const res = await fetch(
    "hhttps://food-app-mern-qzo1.onrender.com/api/singleCateogary"
  );

  const data = await res.json();

  if (!data.success) {
    throw new Error("Failed to fetch food");
  }

  return data.data;
};

// 🔹 Custom Hook
export const useFoodList = () => {
  return useQuery({
    queryKey: ["foods"],
    queryFn: fetchFood,
    staleTime: 1000 * 60 * 5, // cache 5 min
  });
};