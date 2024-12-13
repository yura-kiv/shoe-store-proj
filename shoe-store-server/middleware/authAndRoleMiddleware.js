const jwt = require('jsonwebtoken');
const key = require('../config/secretKey');

module.exports = (role) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        res.status(403).json({ message: 'User is not authorized.' });
      }
      const { role: userRole } = jwt.verify(token, key.secretKey);
      let hasRole = false;
      if (userRole === role) {
        hasRole = true;
      }
      if (!hasRole) {
        return res.status(403).json({ message: 'User does not have access.' });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: 'User is not authorized.' });
    }
  };
};
