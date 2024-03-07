const express = require("express");
const router = express.Router();
const categoryCtrl = require("../controllers/CategoryController");

router.post("/create",categoryCtrl.categorycreate);
router.get("/getall", categoryCtrl.getall);
router.post("/subcategory/:id", categoryCtrl.subcategorycreate);

module.exports = router;