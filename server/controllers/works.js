const Work = require('../models/Work');
const {StatusCodes} = require('http-status-codes');


const createWork = async (req,res)=>{
    const {title} = req.body;
    if(!title)
    {
        res.send('Please enter a title.');
        return;
    }
    req.body.createdBy = req.user.userId;
    const work = await Work.create(req.body);
    res.status(StatusCodes.CREATED).json({work});
}

const getAllWork = async(req,res)=>{
    const works = await Work.find({createdBy: req.user.userId}).sort('createdAt');
    res.status(StatusCodes.OK).json({works, count: works.length});
}



const getSingleWork = async(req,res) =>{
    const {user:{userId}, params:{id: workId}} = req;
    const work = await Work.findOne({createdBy: userId, _id: workId});
    if(!work)
    {
        res.send(`No work with id ${workId}.`);
        return;
    }
    res.status(StatusCodes.OK).json(work);

}

//can update the status of the work
const updateWork = async(req,res)=>{
    const {body: {title, status}, user: {userId}, params:{id: workId}} = req;
    if(title == '' || status == '')
    {
        res.send('Title and status cannot be empty.');
        return;
    }
    const work = await Work.findOneAndUpdate({_id: workId, createdBy: userId}, req.body, {new: true, runValidators: true});

    if(!work)
    {
        res.send(`No work with id ${workId}.`);
        return;
    }
    res.status(StatusCodes.OK).json(work);
}

const deleteWork = async (req,res) =>{
    const {user: {userId}, params: {id: workId}} = req;
    const work = await Work.findByIdAndDelete({_id: workId, createdBy: userId});
    if(!work)
    {
        res.send(`No work with id ${workId}`);
        return;
    }
    res.status(StatusCodes.OK).send();
}

module.exports = 
{
    createWork,
    getAllWork,
    getSingleWork,
    updateWork,
    deleteWork
}

