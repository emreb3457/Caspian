const mongoose = require('mongoose');
const validator = require('validator');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter course name'],
        trim: true,
        maxLength: [100, 'Course name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter course price'],
        maxLength: [6, 'Product name cannot exceed 6 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter course description'],
    },
    images: {
        url: {
            type: String,
            required: true
        },
        orjname: {
            type: String,
            required: true
        }

    },
    category: {
        type: String,
        required: [true, 'Please select category for this course'],
        enum: {
            values: [
                'For kids',
                'For adults',

            ],
            message: 'Please select correct category for course'
        }
    },
    publish: { type: Boolean, default: false },
    chapter: [
        {
            title: {
                type: String,
                required: true,
                default: "Chapter"
            }

        }
    ],
    downloadsfile: [
        {
            url: {
                type: String,
            },
            orjname: {
                type: String,
                required: true
            },
            name: {
                type: String,
            }
        }
    ],
    helpfulmeterials: [
        {
            url: {
                type: String,
            },
            orjname: {
                type: String,
                required: true
            },
            name: {
                type: String,
            }
        }
    ],
    registerusers: [{
        userId: { type: mongoose.Schema.ObjectId },
        status: { type: String, default: "not purchased" }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Course', courseSchema);