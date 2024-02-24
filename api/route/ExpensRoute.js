const express = require("express");
const router = express.Router();
const expensCtrl = require("../controllers/ExpensController");

router.post("/create",expensCtrl.expenscreate);
router.get("/getall", expensCtrl.getall);

module.exports = router;