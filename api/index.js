const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require("./route/UserRoute");
const  productRouter = require("./route/ProductRoute") ;
const  SaleRouter=require("./route/SaleRoute") 
const  ExpensRouter=require("./route/ExpensRoute") 
const  CategoryRouter=require("./route/CategoryRoute") 
const  OrderRoutes = require("./route/OrderRoutes");
const path = require("path");
// Load environment variables from a .env file

dotenv.config();
app.use(cors());
app.use(express.json());


// import routes
// const userRoutes = require("./routes/userRoutes");

// routes
app.use("/user", userRouter);
app.use("/product",productRouter);
app.use("/category",CategoryRouter);
app.use("/sale",SaleRouter);
app.use("/expens",ExpensRouter);
app.use("/shop", OrderRoutes);




app.use(express.static(path.join(__dirname, "uploads")));





app.get("/", (req, res) => res.send("application is working"));

const startServer = async () => {
    try {
        // mongoose.connect("mongodb://localhost:27017/redux-instagram").then(() => {
            // mongoose.connect(process.env.MONGODB_URL).then(() => {
             mongoose.connect("mongodb://localhost:27017/ecomshop").then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`server is listening on port ${process.env.PORT}`);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();

