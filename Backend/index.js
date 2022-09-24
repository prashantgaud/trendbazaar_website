const express= require("express");
const app= express();
const  mongoose  = require("mongoose");
const dotenv = require("dotenv");
const user= require("./routes/user.js");
const auth=require("./routes/auth");
const product=require("./routes/product");
const order =require("./routes/order");
const cart=require("./routes/cart");
const cors=require("cors");
const stripeRoute=require("./routes/stripe")
dotenv.config();

app.use(cors());


app.use(express.json());
app.use("/user", user);
app.use("/auth", auth);
app.use("/products", product);
app.use("/orders", order);
app.use("/cart", cart);
app.use("/checkout", stripeRoute);
//app.use("/product", product);




mongoose.connect(process.env.MONGODB_URL,(err)=>{
  if(err) console.log("Error ",err);
  else {
    console.log("Mongodb connected !!!");
  }
})


app.listen(process.env.PORT, ()=>{
    console.log("server is runnig at port "+ `${process.env.PORT}`);
})