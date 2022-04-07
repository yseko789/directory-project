const Work = require('../models/Work');



const createWork = (req,res)=>{
    res.send('create work');
}

const getAllWork = (req,res)=>{
    res.send('get all work');
}



const getSingleWork = (req,res) =>{
    res.send('get single work');
}

const updateWork = (req,res)=>{
    res.send('update work');
}

const deleteWork = (req,res) =>{
    res.send('delete work');
}

module.exports = 
{
    createWork,
    getAllWork,
    getSingleWork,
    updateWork,
    deleteWork
}

