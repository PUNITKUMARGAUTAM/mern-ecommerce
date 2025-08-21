// routes/uploadRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/upload', upload.single('image'), (req, res) => {
  res.json({
    message: 'Image uploaded successfully',
    filePath: `/${req.file.path}`,
  });
});

router.post('/multiple', upload.array('images', 5), (req, res) => {
  res.json(req.files);
});

module.exports = router;
