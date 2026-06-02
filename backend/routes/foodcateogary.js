import express from "express";
import { upload } from "../services/multer.js";
import {
  createFoodCategory,
  getAllFood,
  getOneFoodPerCategory,
  getFoodByCategory
} from "../controller/food-cateogary-controller.js";

const router = express.Router();

router.post("/create-food", upload.single("image"), createFoodCategory);
router.get("/foodcategory", getFoodByCategory);
router.get("/singleCateogary", getOneFoodPerCategory);

export default router;
