import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// 🔹 Type for single food item
interface FoodItem {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

// 🔹 Context type
interface FoodContextType {
  foodList: FoodItem[];
  loading: boolean;
  error: string | null;
}

// 🔹 Create context
export const FoodContext = createContext<FoodContextType | null>(null);

// 🔹 Props type
interface Props {
  children: ReactNode;
}

const FoodContextProvider = ({ children }: Props) => {
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch(
          "https://food-app-mern-qzo1.onrender.com/food/foodcategory",
        );

        const data: {
          success: boolean;
          data: FoodItem[];
        } = await res.json();
        console.log("Fetched food data:", data);
        if (data.success) {
          setFoodList(data.data);
        } else {
          setError("Failed to fetch food");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  const contextValue: FoodContextType = {
    foodList,
    loading,
    error,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export default FoodContextProvider;
