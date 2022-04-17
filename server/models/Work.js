const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please provide the title.'],
        maxlength: 60
    },
    status:{
        type: String,
        enum: ['In Queue', 'Current', 'Finished'],
        default: 'In Queue'
    },
    type:{
        type: String,
        enum: ['Anime', 'Manga']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user.']
    }
}, {timestamps: true});

module.exports = mongoose.model('Work', WorkSchema);