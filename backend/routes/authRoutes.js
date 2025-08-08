const express = require('express');
const router = express.Router();

const{registerUser , loginUser , getUserprofile} = require('../controllers/authController');
const {product} = require('../middleware/authMiddleware');

router.post('/register' , registerUser);
router.post('/login',loginUser);
router.get('/profile' , product , getUserprofile);

module.exports = router;