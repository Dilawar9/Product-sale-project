const express = require("express");
const router = express.Router();
const checkAuth =require("../midleware/CheckAuth")
const OCtrl = require("../controllers/OrderController");


router.post("/place-order",  OCtrl.placeOrder);


module.exports = router;