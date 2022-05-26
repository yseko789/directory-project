const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');

const register = async(req, res) =>{
    const newUser = await User.create(req.body);
    const token = newUser.createJWT();
    res.status(StatusCodes.CREATED).json({user: {name:newUser.name}, token});
    
}

const login = async(req, res)=>{
    const {email, password} = req.body;
    //check that email and password are entered
    if(!email)
    {
        throw new Error('Username is required.');
        // res.send({message: 'Username is required.'});
        // return;
    }
    if(!password)
    {
        throw new Error('Password is required.');
        // res.send({message: 'Password is required.'});
        // return;
    }
    
    //find user from database
    const user = await User.findOne({email});
    //if user is not found
    if(!user)
    {
        throw new Error('User does not exist.');
        // res.send({message: 'User does not exist.'});
        // return;
    }
    //if user is found, check that password matches
    //if it does, create JWT so user can access their directory
    if(await user.comparePass(password))
    {
        
        const token = user.createJWT();
        res.status(StatusCodes.OK).json({user: {name: user.name}, token});
    }
    else
    {
        throw new Error('Wrong password.');
        // res.status(StatusCodes.UNAUTHORIZED).send({message: 'Wrong Password.'});
    }

}

module.exports = {register, login};