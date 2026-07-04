import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";

import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";

dotenv.config(); // 👈 FIRST

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://book-store-five-fawn.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.options("/", cors());

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;


if (!URI) {
  console.log("❌ MongoDBURL is undefined (check Render env variables)");
}
mongoose.connect(URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Connection Error:", err);
  });

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});