const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const { check, body } = require('express-validator');
const authAndRoleMiddleware = require('../middleware/authAndRoleMiddleware');
const router = express.Router();

router.post(
  '/signup',
  [
    check('name', 'Name cannot be empty.').trim().notEmpty(),
    check('email', 'Email cannot be empty.').trim().notEmpty(),
    check(
      'password',
      'Password must be longer than 5 and less than 16 characters.'
    ).isLength({
      min: 5,
      max: 16,
    }),
    body('confirmPassword')
      .notEmpty()
      .withMessage('Confirm password is required')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords do not match');
        }
        return true;
      }),
  ],
  usersControllers.signup
);
router.post('/login', usersControllers.login);
router.post('/makeOrder', usersControllers.makeOrder);
router.get(
  '/getAllUsers',
  authAndRoleMiddleware('admin'),
  usersControllers.getAllUsers
);

module.exports = router;
