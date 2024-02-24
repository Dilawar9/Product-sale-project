const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/ProductController");
// const checkAuth =require("../midleware/CheckAuth")

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const multer = require("multer");
const upload = multer({ dest: "uploads/" })

router.post("/create", upload.single('image'), productCtrl.createProduct);
router.get("/getall", productCtrl.getall);

module.exports = router;