const express = require("express");
const router = express.Router();
const productsConroller = require("../controllers/productsControllers");

router.get("/", productsConroller.getAllProducts);
router.get("/productsCount", productsConroller.getProductsCount);
router.get("/productsFilter", productsConroller.getProductsFilter);
router.get("/:id", productsConroller.getProductById);

module.exports = router;
