const express = require("express");
const { protectVendor } = require("../middleware/authVendorMiddleware");
const { protectAdmin } = require("../middleware/authAdminMiddleware");
const {
	addProduct,
	getProducts,
	getProductsForEachVendor,
	getProductById,
	updateProduct,
	deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

router.route("/vendor/product/add").post(protectVendor, addProduct);
router.route("/vendor/get/:id").get(protectVendor, getProductsForEachVendor);
router
	.route("/vendor/product/get/:id")
	.get(protectVendor, getProductById)
	.put(protectVendor, updateProduct)
	.delete(protectVendor, deleteProduct);

router.route("/admin/product/get").post(protectAdmin, getProducts);
router
	.route("/admin/product/get/:id")
	.get(protectAdmin, getProductById)
	.put(protectAdmin, updateProduct)
	.delete(protectAdmin, deleteProduct);

module.exports = router;
