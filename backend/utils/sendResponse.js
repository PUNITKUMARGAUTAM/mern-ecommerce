const sendResponse = require('../utils/sendResponse');
const User = require('../models/User');

// Example: Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return sendResponse(res, 200, true, "Users fetched successfully", users);
  } catch (error) {
    return sendResponse(res, 500, false, "Something went wrong");
  }
};
