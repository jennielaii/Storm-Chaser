const models = require('../models');
const userController = {};

userController.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            region: req.body.region,
        })
        res.json({message: 'success', user })
    }
    catch (error) {
        console.log(error)
        res.status(404).json(error.message)
    }
}

userController.getUsers = async (req, res) => {
    try {
        const users = await models.user.findAll()
        
        res.json({success: 'users Found', users})
        
    } 
    catch (error) {
        console.log(error)
        res.status(404).json({error: error.message})    
    }
}

module.exports = userController