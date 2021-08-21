const mongoose = require('mongoose');
const validator = require('validator');

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    videoUrl: {
        type: String,
        required: true
    },
    videoOrjname: {
        type: String,
        required: true
    },
    courseId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    chapterId: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Lesson', lessonSchema);