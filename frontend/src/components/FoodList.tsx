import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const FoodList: React.FC = () => {
  const context = useContext(FoodContext);

  if (!context) return <p>Context not found</p>;

  const { foodList, loading, error } = context;

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">🍔 Food Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodList.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{food.name}</h3>

              <p className="text-sm text-gray-500 line-clamp-2">
                {food.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-green-600 font-bold">
                  ₹{food.price}
                </span>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    food.category === "veg"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {food.category}
                </span>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;