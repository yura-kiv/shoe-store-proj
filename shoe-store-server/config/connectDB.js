const mongoose = require("mongoose");
const dbLink = "mongodb://127.0.0.1:27017/shoe-shop-db";

const connectDB = async () => {
  try {
    await mongoose.connect(dbLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
