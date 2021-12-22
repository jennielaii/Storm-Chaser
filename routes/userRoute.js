const userRoute = require('express').Router()

const userController = require('../controllers/userController')

userRoute.post('/signup', userController.createUser)

userRoute.get('/', userController.getUsers)



module.exports = userRoute