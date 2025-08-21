// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.post('/add', protect, cartController.addToCart);
router.get('/', protect, cartController.getCart);
router.put('/update', protect, cartController.updateCartItem);
router.delete('/remove/:productId', protect, cartController.removeCartItem);
router.delete('/clear', protect, cartController.clearCart);

module.exports = router;
