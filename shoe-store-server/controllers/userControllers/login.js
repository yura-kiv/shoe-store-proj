const User = require("../../models/userModel");
const generateAccessToken = require("../../config/generateAccessToken");
const bcrypt = require("bcryptjs");

login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        errorType: "email",
        msg: "User with this email not fount.",
      });
    }
    const validatePassword = bcrypt.compareSync(password, user.password);
    if (!validatePassword) {
      return res
        .status(401)
        .json({ errorType: "password", msg: "Invalid password." });
    }
    const accessToken = generateAccessToken(
      user._id,
      user.name,
      user.email,
      user.gender,
      user.role
    );
    return res.json({
      accessToken,
      email: user.email,
      name: user.name,
      gender: user.gender,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errorType: "server",
      msg: "Something went wrong...",
    });
  }
};

module.exports = login;
