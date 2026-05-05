import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/index.js"; // 👈 import main router

dotenv.config();
connectDB();

const app = express();

// ✅ middleware (IMPORTANT)
app.use(express.json());

// ✅ use routes
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});