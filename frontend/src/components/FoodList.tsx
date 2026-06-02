import React, { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FoodList: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const context = useContext(FoodContext);

  if (!context) return <p>Context not found</p>;

  const { foodList, loading, error } = context;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="relative max-w-6xl m-auto p-4 md:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold mb-6">
          🍔 Food <span className="text-orange-600">Cateogary</span>
        </h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-orange-500 hover:bg-orange-700 text-white cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-orange-500 hover:bg-orange-700 text-white cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {foodList.map((food) => (
          <div
            key={food._id}
            className="shrink-0 flex flex-col items-center cursor-pointer"
          >
            <img
              src={food.imageUrl}
              alt={food.category}
              className="w-32 h-32 rounded-full border-2 border-orange-500 object-cover"
            />

            <p className="mt-2 text-xl font-extrabold text-orange-950 text-shadow-2xs capitalize">{food.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
