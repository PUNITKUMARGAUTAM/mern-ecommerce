// config/constants.js
module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerceweb',
  JWT_SECRET: process.env.JWT_SECRET || 'yoursecretkey',
  JWT_EXPIRES_IN: '30d',
  UPLOAD_PATH: 'uploads/',
};
