const express = require("express");
const router = express.Router();
const saleCtrl = require("../controllers/SalesController");

router.post("/create",saleCtrl.salecreate);
router.get("/getall",saleCtrl.getall);

module.exports = router;