import { createContext } from "react";
import type { ReactNode } from "react";
import { useFoodList } from "../data-query/useFoodList";

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

interface FoodContextType {
  foodList: FoodItem[];
  loading: boolean;
  error: string | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FoodContext = createContext<FoodContextType | null>(null);

interface Props {
  children: ReactNode;
}

const FoodContextProvider = ({ children }: Props) => {
  const { data, isLoading, error } = useFoodList();

  const contextValue: FoodContextType = {
    foodList: data ?? [],
    loading: isLoading,
    error: error ? (error as Error).message : null,
  };

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;