const jwt = require("jsonwebtoken");
const { secretKey } = require("./secretKey");

const generateAccessToken = (id, name, email, gender, role) => {
  const payload = {
    id,
    name,
    email,
    gender,
    role,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "30m" });
};

const generateRefreshToken = (id, name, email, gender, role) => {
  const payload = {
    id,
    name,
    email,
    gender,
    role,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "7d" });
};

module.exports = generateAccessToken;
