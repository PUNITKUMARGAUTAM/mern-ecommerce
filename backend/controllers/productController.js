// controllers/productController.js
const Product = require('../models/Product');
const slugify = require('slugify');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, category, brand, isFeatured } = req.body;
    if (!name || !description || !price || !quantity || !category) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }
    const product = new Product({
      name,
      slug: slugify(name),
      description,
      price,
      quantity,
      images: req.body.images || [],
      category,
      brand,
      isFeatured: !!isFeatured,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

// Get All
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category', 'name').sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

// Get by slug
exports.getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).populate('category', 'name');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

// Update
exports.updateProduct = async (req, res) => {
  try {
    const updatedData = { ...req.body };
    if (updatedData.name) updatedData.slug = slugify(updatedData.name);
    const product = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

// Delete
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

// Search
exports.searchProducts = async (req, res) => {
  try {
    const { keyword } = req.query;
    const products = await Product.find({
      $or: [
        { name: { $regex: keyword || '', $options: 'i' } },
        { description: { $regex: keyword || '', $options: 'i' } },
      ],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error searching products', error: error.message });
  }
};

// Featured
exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true }).limit(10);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured products', error: error.message });
  }
};
