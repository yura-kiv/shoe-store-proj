const User = require('../../models/userModel');
const UserRole = require('../../models/userRoleModel');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

signup = async (req, res) => {
  try {
    const { name, email, password, gender, confirmPassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: 'Signup error: ', ...errors });
    }
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({
        errors: [{ msg: 'The user with this email is already signuped.' }],
      });
    }
    const hashPassword = bcrypt.hashSync(password, 5);
    const userRole = new UserRole({ value: 'customer' });
    const user = new User({
      name,
      email,
      password: hashPassword,
      gender,
      role: userRole.value,
    });
    await user.save();
    return res.json({ msg: 'You have been successfully signuped.' });
  } catch (error) {
    res.status(400).json({ msg: 'Signup Error.' });
  }
};

module.exports = signup;
