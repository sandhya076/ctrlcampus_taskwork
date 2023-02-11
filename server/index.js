import  express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cart from "./Routes/Cart.js"
import order from "./Routes/Order.js";
import product from "./Routes/Product.js";
import stripe from "./Routes/Stripe.js"
import user from "./Routes/User.js"
import auth from "./Routes/auths.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/cart",cart);
app.use("/orders",order);
app.use("/products",product);
app.use("/checkout",stripe);
app.use("/user",user);
app.use("/auth",auth);
const CONNECTION_URL =
  "mongodb+srv://sandhya:sandhya@cluster0.trov7.mongodb.net/TASK";

const PORT = process.env.PORT || 5001;
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));

