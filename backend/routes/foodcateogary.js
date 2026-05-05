import express from "express";
import {
  createFoodCategory,
  getAllFood,
} from "../controller/food-cateogary-controller.js";

const router = express.Router();

router.post("/foodcategory", createFoodCategory);
router.get("/foodcategory", getAllFood);

export default router;
