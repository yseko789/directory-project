require('dotenv').config();
//catches all errors (we used to make an async-wrapper that would do try-catch)
require('express-async-errors');

const { application } = require('express');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const authRouter = require('./routes/auth');



app.use(express.json());

app.use('/api/v1/auth', authRouter);

const port = 3000;

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