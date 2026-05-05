import dotenv from "dotenv";
import express from "express";
import cors from "cors"; 
import connectDB from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();
connectDB();

const app = express();

// ✅ CORS middleware (MUST be before routes)
app.use(cors());

// ✅ middleware
app.use(express.json());

// ✅ routes
app.use("/", router);

// optional health route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});