const DB_URL = process.env.DB_URL;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection SUCCESS');
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1);
  }
};

module.exports = connectDB;
