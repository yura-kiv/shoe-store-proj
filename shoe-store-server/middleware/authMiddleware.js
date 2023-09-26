const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(403).json({ message: "User is not authorized." });
    }
    const decodeData = jwt.verify(token, key.secretKey);
    req.user = decodeData;
    next();
  } catch (error) {
    return res.status(403).json({ message: "User is not authorized." });
  }
};
