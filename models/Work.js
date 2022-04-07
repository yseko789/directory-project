const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please provide the title.'],
        maxlength: 60
    },
    status:{
        type: String,
        enum: ['Queue', 'Current', 'Finished'],
        default: 'queue'
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