import { Clock3 } from "lucide-react";
import type { FoodItem } from "../data-query/useFoodList";
import type React from "react";

export type cardProps = {
  data: FoodItem[] | undefined;
  isLoading: boolean;
  error: Error | null;
  selectedCategory: string;
};

const FoodCards: React.FC<cardProps> = ({
  data,
  isLoading,
  error,
  selectedCategory,
}) => {
  if (isLoading) {
    return (
      <div className="max-w-6xl m-auto px-4 md:px-12 pb-10">
        <div className="mb-6">
          <div className="h-8 w-80 bg-gray-200 rounded-md mb-3"></div>
          <div className="h-5 w-96 bg-gray-200 rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow"
            >
              <div className="h-52 bg-gray-200" />
              <div className="p-4">
                <div className="h-5 bg-gray-200 rounded mb-3" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data?.length) {
    return (
      <div className="text-center py-16 text-gray-500">No foods found.</div>
    );
  }

  return (
    <section className="max-w-6xl m-auto px-4 md:px-12 pb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold">
          🍔 Featured{" "}
          <span className="text-orange-600">{selectedCategory}</span>
        </h2>

        <p className="text-orange-600">
          Explore delicious {selectedCategory} dishes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7">
        {data.map((food:FoodItem) => (
          <div
            key={food._id}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={food.imageUrl}
                alt={food.name}
                className="w-full h-52 object-cover"
              />

              <span className="absolute top-2 right-2 bg-white/30 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold capitalize border border-orange-400">
                {food.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-lg line-clamp-1">{food.name}</h3>

                <span className="text-lg font-bold text-green-600 whitespace-nowrap">
                  ₹{food.price}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                {food.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <div>
                  <button className="w-full rounded text-white font-medium px-2 py-1 bg-orange-500 cursor-pointer">
                    Add to Cart
                  </button>
                </div>

                <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm">
                  <Clock3 size={14} />
                  {food.deliveryTime} min
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCards;
