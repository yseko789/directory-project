const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please provide a name.'],
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: [true, 'Please provide an email.'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Please provide a valid email'
        ],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please provide a password.'],
        minlength: 6
    }
})

//does this before it saves a model
UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

//function to create jwt
//takes in payload, key, and options
UserSchema.methods.createJWT = function(){
    return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
}

//function to compare password
UserSchema.methods.comparePass = async function(typedPassword){
    const isMatch = await bcrypt.compare(typedPassword, this.password);
    return isMatch;
}

module.exports = mongoose.model('User', UserSchema);