import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import dns from 'dns'

import bookRoute from './Route/book.route.js'
import userRoute from './Route/user.route.js'


//changte dns
dns.setServers(["1.1.1.1","8.8.8.8"])
const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://book-store-1lpe7j8ww-ashishmehtataj6-8347s-projects.vercel.app"
    ],
    credentials: true
}));

app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;


mongoose.connect(process.env.MongoDBURL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ Connection Error:", err);
  });

//defining routes
app.use('/book',bookRoute)


app.use('/user',userRoute)

app.listen(process.env.PORT, () => {
  console.log("🚀 Server running on port " + process.env.PORT);
});