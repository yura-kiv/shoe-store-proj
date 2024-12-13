const Product = require('../models/productModel');
const {
  assetColors,
  assetSizes,
  assetTags,
  assetBrands,
  assetPrices,
  assetGenders,
} = require('../assets');

class ProductsConroller {
  getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error...' });
    }
  };

  getProductsCount = async (req, res) => {
    try {
      const count = await Product.find({}).count();
      res.json({ count: count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error...' });
    }
  };

  getProductById = async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: 'Record not found :(' });
      }
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error...' });
    }
  };

  getProductsFilter = async (req, res) => {
    try {
      const query = req.query;
      const name = query.name || '';
      const colors = query.colors ? query.colors : assetColors;
      const brands = query.brands ? query.brands : assetBrands;
      const genders = query.genders ? query.genders : assetGenders;
      const sizes = query.sizes ? query.sizes.map(Number) : assetSizes;
      const prices = query.prices ? query.prices.map(Number) : assetPrices;
      const tags = query.tags ? query.tags : assetTags;

      /////
      const page = parseInt(query.page) - 1 || 0;
      const limit = parseInt(query.limit) || 8;
      //const sort = parseInt(query.sort) || "none";
      /////

      const resultCount = await Product.countDocuments({
        name: { $regex: name, $options: 'i' },
        'variants.color': { $in: colors },
        brand: { $in: brands },
        price: { $gte: prices[0], $lte: prices[1] },
        tags: { $in: tags },
        gender: { $in: genders },
        variants: {
          $elemMatch: {
            sizes: { $in: sizes },
          },
        },
      });

      const resultProducts = await Product.find({
        name: { $regex: name, $options: 'i' },
        'variants.color': { $in: colors },
        brand: { $in: brands },
        price: { $gte: prices[0], $lte: prices[1] },
        tags: { $in: tags },
        gender: { $in: genders },
        variants: {
          $elemMatch: {
            sizes: { $in: sizes },
          },
        },
      })
        .skip(page * limit)
        .limit(limit);

      res.status(200).json({ resultProducts, resultCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error...' });
    }
  };
}

module.exports = new ProductsConroller();
