const Course = require('../models/course')
const Lesson = require('../models/lesson')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const fs = require("fs");



// Create new course   =>   /api/v1/admin/course/new
exports.newCourse = catchAsyncErrors(async (req, res, next) => {
    const { name,
        price,
        description,
        category } = req.body

    try {
        if (!req.file) {
            next(new ErrorHandler("File upload failed", 501))
        }
        const newpath = req.file.path.replace("public", "")
        const course = await Course.create({
            name,
            price,
            description,
            images: {
                url: newpath,
                orjname: req.file.originalname
            },
            category
        })
        res.status(201).json({
            success: true,
            course
        })

    } catch (error) {
        fs.unlink(`${process.env.FILE_PATH}/public/images/${req.file.originalname}`, (err => {
            if (err) console.log("No such file directory");
            else {
                console.log("files deleted");
            }
        }));
        next(new ErrorHandler(error, 500))
    }
})
//New Course Chapter   =>   /api/v1/chapter/new
exports.newChapter = catchAsyncErrors(async (req, res, next) => {
    const { courseId, title } = req.body
    const newChepter = await Course.findByIdAndUpdate(courseId, { $push: { chapter: { "title": title } } }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(201).json({
        success: true,
        newChepter
    })

})

//New Course Lesson   =>   /api/v1/lesson/new
exports.newLesson = catchAsyncErrors(async (req, res, next) => {
    const { courseId, chapterId, title } = req.body
    try {
        if (!req.file) {
            next(new ErrorHandler("File upload failed", 501))
        }
        const newpath = req.file.path.replace("public", "")
        const course = await Course.findById(courseId, "chapter")
        if (!course) next(new ErrorHandler("Course not found", 404))
        const chapter = course.chapter.filter(x => x._id == chapterId)  //chapter bu kursta değilse hata ver
        if (chapter.length == 0) next(new ErrorHandler("Faild No Chapters", 501))
        const lesson = await Lesson.create({
            title,
            courseId,
            chapterId,
            videoUrl: newpath,
            videoOrjname: req.file.originalname
        })
        res.status(201).json({
            success: true,
            lesson
        })
    } catch (error) {

        fs.unlink(`${process.env.FILE_PATH}/public/coursevideo/${req.file.originalname}`, (err => {
            if (err) console.log("No such file directory");
            else {
                console.log("files deleted");
            }
        }));
        next(new ErrorHandler(error, 500))
    }

})

// Get all Course   =>   /api/v1/course
exports.getCourse = catchAsyncErrors(async (req, res, next) => {

    const courseCount = await Course.countDocuments();
    course = await Course.find({ publish: true })

    res.status(200).json({
        success: true,
        courseCount,
        course
    })

})

// Get all course (Admin)  =>   /api/v1/admin/course
exports.getAdminCourse = catchAsyncErrors(async (req, res, next) => {

    const course = await Course.find();

    res.status(200).json({
        success: true,
        course
    })

})

// Get single course details   =>   /api/v1/course/:id
exports.getSingleCourse = catchAsyncErrors(async (req, res, next) => {

    const course = await Course.findById(req.params.id)
    const courseLesson = await Lesson.find({ courseId: course._id })
    if (!course) {
        return next(new ErrorHandler('Course not found', 404));
    }

    res.status(200).json({
        success: true,
        course,
        courseLesson
    })

})

// Update course   =>   /api/v1/admin/course/:id  
exports.updateCourse = catchAsyncErrors(async (req, res, next) => {
    let course = await Course.findById(req.params.id);

    if (!course) {
        return next(new ErrorHandler('Course not found', 404));
    }

    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        course
    })

})

//Register fot the Course    =>   /api/v1/course/register
exports.setRegistercourse = catchAsyncErrors(async (req, res, next) => {
    const { courseId, usrId } = req.body
    let registerusr = []
    const course = await Course.findById(courseId, "registerusers")
    if (course.length == 0) next(new ErrorHandler("Course not found", 404))
    if (course.registerusers) {
        registerusr = course.registerusers.filter(usr => usr.userId == usrId)

    }
    if (!registerusr.length == 0) {
        next(new ErrorHandler("You already registered", 501))
    }
    else {
        let updateCourse = await Course.findByIdAndUpdate(courseId, { $push: { registerusers: { userId: usrId } } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({
            success: true,
            updateCourse,
        })
    }
})
//Unregister  the Course    =>   /api/v1/course/register
exports.setUnregistercourse = catchAsyncErrors(async (req, res, next) => {
    const { courseId, usrId } = req.body
    const course = await Course.findById(courseId)
    if (course.length == 0) next(new ErrorHandler("Course not found", 404))

    let data = await Course.findByIdAndUpdate(courseId, { $pull: { registerusers: { userId: usrId } } }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        data,

    })
})

//Setopencourse  the Course    =>   /api/v1/admin/course/setOpen/:id
exports.setOpencourse = catchAsyncErrors(async (req, res, next) => {
    const { usrId } = req.body

    const course = await Course.findById(req.params.id)
    const filtercourse = course.registerusers.filter(x => x._id == usrId)

    filtercourse[0].status = "Continuing"
    course.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,


    })
});

//setWatchcourse the Course    =>   /api/v1/course/setWatch
exports.setWatchcourse = catchAsyncErrors(async (req, res, next) => {
    const { usrId, lessonId } = req.body
    let data = [];
    const watchusr = await Lesson.findById(lessonId)
    if (!watchusr) next(new ErrorHandler("Lesson not found", 404))
    console.log(watchusr)
    if (watchusr.watchUser) {
        data = watchusr.watchUser.filter(usr => usr == usrId)
    }
    if (!data.length == 0) {
        next(new ErrorHandler("You already watched", 501))
    }
    else {

        const lesson = await Lesson.findByIdAndUpdate(lessonId, { $push: { watchUser: usrId } }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({
            success: true,
            lesson
        })
    }
})
// //Publish true Course Chapter   =>   /api/v1/admin/course/publish
// exports.setpublishCourse = catchAsyncErrors(async (req, res, next) => {
//     const { _id } = req.body
//     let course = await Course.findByIdAndUpdate(_id, { publish: true }, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false
//     });

//     if (!course.length == 0) {
//         return next(new ErrorHandler('Course not found', 404));
//     }

//     res.status(200).json({
//         success: true,
//         course,
//         message: "Published true "
//     })

// })
// //Publish false Course Chapter   =>   /api/v1/admin/course/unpublish
// exports.setunpublishCourse = catchAsyncErrors(async (req, res, next) => {
//     const { _id } = req.body
//     let course = await Course.findByIdAndUpdate(_id, { publish: false }, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false
//     });

//     if (!course.length == 0) {
//         return next(new ErrorHandler('Course not found', 404));
//     }

//     res.status(200).json({
//         success: true,
//         course,
//         message: "Published false "
//     })

// })

//Delete Course Chapter   =>   /api/v1/chapter/delete
exports.deleteChapter = catchAsyncErrors(async (req, res, next) => {
    const { courseId, chapterId, title } = req.body
    const course = await Course.findByIdAndUpdate(courseId, { $pull: { chapter: { _id: chapterId } } }, {
        new: true,
        useFindAndModify: false
    })
    const removedLesson = await Lesson.deleteMany({ chapterId })
    res.status(201).json({
        success: true,
        course
    })

})

//DElete Course Lesson   =>   /api/v1/lesson/delete
exports.deleteLesson = catchAsyncErrors(async (req, res, next) => {
    const { _id, courseId } = req.body

    const removedLesson = await Lesson.findByIdAndRemove(_id);
    const lesson = await Lesson.find(courseId)
    if (!removedLesson) {
        return next(new ErrorHandler('Course not found', 404));
    }
    fs.unlink(`${process.env.FILE_PATH}/public/coursevideo/${removedLesson.videoOrjiname}`, (err => {
        if (err) console.log("No such file directory");
        else {
            console.log("Files deleted");
        }
    }));
    res.status(201).json({
        success: true,
        lesson,
        message: "Lesson Removed"
    })
})
// Delete Course   =>   /api/v1/admin/course/:id
exports.deleteCourse = catchAsyncErrors(async (req, res, next) => {

    const course = await Course.findById(req.params.id);
    const lessons = await Lesson.find({ courseId: req.params.id })
    if (!course) {
        return next(new ErrorHandler('Course not found', 404));
    }
    //Removed courseVideo
    for (let i = 0; i < lessons.length; i++) {
        const less = lessons[i];

        fs.unlink(`${process.env.FILE_PATH}/public/coursevideo/${less.videoOrjname}`, (err => {
            if (err) console.log("No such file directory");
            else {
                console.log("Linked files deleted");
            }
        }));

    }
    //Removed downloadsfile
    for (let i = 0; i < course.downloadsfile.length; i++) {
        const downloadsfile = course.downloadsfile[i];
        fs.unlink(`${process.env.FILE_PATH}/public/otherFiles/${downloadsfile.orjname}`, (err => {
            if (err) console.log("No such file directory");
            else {
                console.log("Linked files deleted");
            }
        }));
    }
    //Removed helpfulmeterials
    for (let i = 0; i < course.helpfulmeterials.length; i++) {
        const helpfulmeterials = course.helpfulmeterials[i];
        fs.unlink(`${process.env.FILE_PATH}/public/otherFiles/${helpfulmeterials.orjname}`, (err => {
            if (err) console.log("No such file directory");
            else {
                console.log("Linked files deleted");
            }
        }));
    }
    //Removed course İmage
    fs.unlink(`${process.env.FILE_PATH}/public/images/${course.images.orjname}`, (err => {
        if (err) console.log("No such file directory");
        else {
            console.log("Course image deleted");
        }
    }));


    await course.remove();
    const coursies = await Course.find()
    res.status(200).json({
        success: true,
        coursies,
        message: 'Product is deleted.'
    })

})

