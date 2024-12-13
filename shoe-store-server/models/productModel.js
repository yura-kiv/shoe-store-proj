const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  saleCount: {
    type: Number,
    required: true,
  },
  aggregateRating: {
    type: Object,
    required: true,
  },
  variants: {
    type: Array,
    required: true,
  },
  commentsId: {
    type: Array,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
