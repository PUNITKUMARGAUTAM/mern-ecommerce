// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductBySlug,
  updateProduct,
  deleteProduct,
  searchProducts,
  getFeaturedProducts,
} = require('../controllers/productController');

const { protect, admin } = require('../middleware/authMiddleware');

router.post('/', protect, admin, createProduct);
router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:slug', getProductBySlug);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
