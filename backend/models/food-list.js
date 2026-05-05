// include mongoose for mongodb operation
import mongoose from "mongoose";

// creating food schema
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
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["veg", "non-veg", "dessert", "beverage", "salad"], // optional but good practice
    },
  },
  {
    timestamps: true,
  },
);

// export model
const FoodList = mongoose.model("Food", foodSchema);

export default FoodList;
