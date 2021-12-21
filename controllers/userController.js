const models = require('../models');
const userController = {};

userController.createUser = async (req, res) => {
    try {
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            region: req.body.region,
        })
        res.json({message: 'success', user })
    }
    catch (error) {
        console.log(error)
        res.status(404).json(error.message)
    }
}

userController.login = async (req, res) => {
    try{

        const user = await models.user.findOne({where: { email: req.body.email }})

        if ( user && user.password === req.body.password){
            res.json({message: 'success', user: user})
        }
        else{
            res.status(404).json({ message: 'login failed'})
        }

    }
    catch(error){
        console.log(error)
        res.status(404).json(error.message)
    }
}

userController.verifyUser = async (req, res) => {
    try{
        const user = await models.user.findOne({ where: { id: req.headers.authorization }})
        
        if (user) { res.json({ user: user }) }
        else { res.status(404).json({ message: 'user not found' }) }


    }
    catch(error){
        console.log(error)
        res.status(404).json(error.message)
    }
}

module.exports = userController