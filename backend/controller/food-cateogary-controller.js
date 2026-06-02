import FoodList from "../models/food-list.js";
import cloudinary from "../services/cloudinary.js";
import streamifier from "streamifier";

export const createFoodCategory = async (req, res) => {
  try {
    const { name, price, description, category, restaurantName, deliveryTime } =
      req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "food-app",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    // Save food in MongoDB
    const food = await FoodList.create({
      name,
      imageUrl: uploadResult.secure_url,
      price: Number(price),
      description,
      category,
      restaurantName,
      deliveryTime,
    });

    return res.status(201).json({
      success: true,
      message: "Food created successfully",
      data: food,
    });
  } catch (error) {
    console.error("Create Food Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
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

export const getOneFoodPerCategory = async (req, res) => {
  try {
    const foods = await FoodList.aggregate([
      {
        $sort: { createdAt: 1 },
      },
      {
        $group: {
          _id: "$category",
          item: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$item",
        },
      },
    ]);

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

export const getFoodByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    // optional: validate category
    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    const foods = await FoodList.find({ category });

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
