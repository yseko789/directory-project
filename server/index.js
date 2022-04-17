require('dotenv').config();
//catches all errors (we used to make an async-wrapper that would do try-catch)
require('express-async-errors');


const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const authRouter = require('./routes/auth');
const worksRouter = require('./routes/works');

const authenticateUser = require('./middleware/authentication');



app.use(express.json());

app.get('/api/v1', (req,res)=>{
    res.json({message: 'Helloooooo from server!'});
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/works',authenticateUser, worksRouter);

const port = 3001;

const start = async () =>{
    try{
        console.log('started');
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log('Server listening...');
        })
    }catch(error){
        console.log(error);
    }


}

start();