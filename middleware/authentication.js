const jwt = require('jsonwebtoken');

const auth = async(req,res,next)=>{
    //check if in the authorization of header, there is jwt
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer'))
    {
        res.send('Authentication invalid.');
        return;
    }
    else
    {
        const token = authHeader.split(' ')[1];
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);

            //add a user key to req
            req.user = {userId: payload.userId, name: payload.name};
            next();
        } catch (error) {
            res.send('Authentication invalid.');
            return;
        }
    }
}

module.exports = auth;