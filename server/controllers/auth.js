const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');

const register = async(req, res) =>{
    const newUser = await User.create(req.body);
    const token = newUser.createJWT();
    res.status(StatusCodes.CREATED).json({user: {name:newUser.name}, token});
    
}

const login = async(req, res)=>{
    const {email, password} = req.body;
    if(!email)
    {
        res.send('Please enter an email.');
        return;
    }
    if(!password)
    {
        res.send('Please enter a password.');
        return;
    }
    const user = await User.findOne({email});
    if(!user)
    {
        res.send('User does not exist.');
        return;
    }
    if(await user.comparePass(password))
    {
        const token = user.createJWT();
        res.status(StatusCodes.OK).json({user: {name: user.name}, token});
    }
    else
    {
        res.status(StatusCodes.UNAUTHORIZED).send('Wrong Password.');
    }

    
}

module.exports = {register, login};