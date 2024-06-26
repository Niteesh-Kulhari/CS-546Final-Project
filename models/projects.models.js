import mongoose from "mongoose";

const projectSchema = new  mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    videoLink:{
        type: String,
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    dislikeCount:{
        type: Number,
        default: 0
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    resources:[{
        type: String
    }],
    datePosted:{
        type: Date,
        default: Date.now
    }
})


const Project = mongoose.model('Project', projectSchema);

export default Project;