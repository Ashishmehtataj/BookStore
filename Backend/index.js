import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

import bookRoute from './Route/book.route.js'
import userRoute from './Route/user.route.js'

const app = express();
app.use(cors())
app.use(express.json())

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL


mongoose.connect(URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ Error in connection: " + err.message));

//defining routes
app.use('/book',bookRoute)

// app.get('/', (req, res) => {
//   res.send('Welcome to Book Management System Backend!');
// });

app.use('/user',userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});