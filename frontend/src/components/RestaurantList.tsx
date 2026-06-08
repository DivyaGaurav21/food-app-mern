import { Pizza, UtensilsCrossed, Salad, Beef, Soup, Cake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Rasoi One",
    cuisine: "Italian • Pizza • Pasta",
    time: "22 min",
    Icon: Pizza,
  },
  {
    id: 2,
    name: "Rasoi Two",
    cuisine: "Japanese • Sushi • Ramen",
    time: "30 min",
    Icon: UtensilsCrossed,
  },
  {
    id: 3,
    name: "Rasoi Three",
    cuisine: "Healthy • Vegan • Salad",
    time: "18 min",
    Icon: Salad,
  },
  {
    id: 4,
    name: "Rasoi Four",
    cuisine: "Burgers • Fries • Drinks",
    time: "25 min",
    Icon: Beef,
  },
  {
    id: 5,
    name: "Rasoi Five",
    cuisine: "Indian • Curry • Biryani",
    time: "20 min",
    Icon: Soup,
  },
  {
    id: 6,
    name: "Rasoi Six",
    cuisine: "Desserts • Cakes • Ice Cream",
    time: "15 min",
    Icon: Cake,
  },
];

export default function RestaurantList() {
  const navigate = useNavigate();

  const handleClick = (restaurantName : string) => {
    navigate(
      `/restaurants?restaurantName=${encodeURIComponent(
        restaurantName.toLowerCase()
      )}`
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-sm uppercase tracking-[4px] text-orange-900 mb-6">
        Top Restaurants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {restaurants.map((restaurant) => {
          const Icon = restaurant.Icon;

          return (
            <div
              key={restaurant.id}
              onClick={() => handleClick(restaurant.name)}
              className="group cursor-pointer rounded-3xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-orange-500 group-hover:scale-110 transition"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {restaurant.name}
                  </h3>

                  <p className="text-gray-500 mt-1 text-sm">
                    {restaurant.cuisine}
                  </p>

                  <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-xl bg-green-50">
                    <span>⚡</span>
                    <span className="text-green-700 font-medium">
                      {restaurant.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}