const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  time: {
    type: Date,
    required: true,
    default: Date.now,
  },
  cart: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
