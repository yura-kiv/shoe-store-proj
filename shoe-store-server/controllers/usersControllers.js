const User = require('../models/userModel');
const login = require('./userControllers/login');
const signup = require('./userControllers/signup');
const makeOrder = require('./userControllers/makeOrder');

class usersController {
  signup = (req, res) => signup(req, res);
  login = (req, res) => login(req, res);
  makeOrder = (req, res) => makeOrder(req, res);

  getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Server Error.' });
    }
  };
}

module.exports = new usersController();
