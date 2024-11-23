import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { config } from "dotenv";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
const port = "https://food-delivery-backend-8wio.onrender.com";

// middleware
app.use(express.json());
app.use(cors());

config({
    path: "./.env"
})

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working.");
});

app.listen(port, () => {
    console.log(`Server Started on https://localhost:${port}`)
})