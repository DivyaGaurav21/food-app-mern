import FoodList from "../models/food-list.js";

export const createFoodCategory = async (req, res) => {
  try {
    const { name, imageUrl, price, description, category } = req.body;

    // basic validation
    if (!name || !imageUrl || !price || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // create food item
    const food = new FoodList({
      name,
      imageUrl,
      price,
      description,
      category,
    });

    // save to DB
    const savedFood = await food.save();

    res.status(201).json({
      success: true,
      message: "Food created successfully",
      data: savedFood,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getAllFood = async (req, res) => {
  try {
    // fetch all food items
    const foods = await FoodList.find();

    res.status(200).json({
      success: true,
      count: foods.length,
      data: foods,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
