// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 5000, // timeout after 5 sec
//     });

//     console.log("✅ MongoDB Connected (Mongoose)");
//   } catch (err) {
//     console.error("❌ DB Error:", err.message);

//     // specific error handling
//     if (err.message.includes("ECONNREFUSED")) {
//       console.error("👉 Unable to reach MongoDB server");
//     }

//     if (err.message.includes("querySrv")) {
//       console.error("👉 DNS / connection string issue");
//     }

//     process.exit(1);
//   }
// };

// module.exports = connectDB;



import mongoose from "mongoose";
import dns from "dns";
import dotenv from "dotenv";

dotenv.config();

// Force Google DNS — bypasses ISP blocking
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4, // force IPv4
    });
    console.log("✅ MongoDB Connected (Mongoose)");
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
