import express from "express";
import { upload } from "../services/multer.js";
import {
  createFoodCategory,
  getAllFood,
  getOneFoodPerCategory
} from "../controller/food-cateogary-controller.js";

const router = express.Router();

router.post("/create-food", upload.single("image"), createFoodCategory);
router.get("/foodcategory", getAllFood);
router.get("/singleCateogary", getOneFoodPerCategory);

export default router;
