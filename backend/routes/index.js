import express from "express";
import foodCategoryRoutes from "./foodcateogary.js";

const router = express.Router();
console.log("router loaded")

router.get('/', (req, res) => {
    res.send('all ohk :) check API by PostMan');
})

router.use("/food", foodCategoryRoutes);

export default router;