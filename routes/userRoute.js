const userRoutes = require('express').Router();
const userController = require('../controllers/userController');

userRoutes.post('/login', userController.login)
userRoutes.post('/signup', userController.createUser)
userRoutes.get('/verify', userController.verifyUser)


module.exports = userRoutes