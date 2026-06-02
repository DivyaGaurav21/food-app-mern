import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "veg",
        "non-veg",
        "dessert",
        "beverage",
        "salad",
        "rolls",
        "healthy",
        "dinner",
      ],
    },

    restaurantName: {
      type: String,
      required: true,
      trim: true,
    },

    deliveryTime: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodList =
  mongoose.models.Food || mongoose.model("Food", foodSchema);

export default FoodList;