const User = require('../models/user');
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const { CLIENT_URL } = require("../constants/appConstants");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.google_client_id)


// Login User  =>  /api/v1/login/google
exports.loginGoogle = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.google_client_id
    });
    const { name, email, jti } = ticket.getPayload();
    const usr = await User.findOne({ email: email })

    if (!usr) {
        const user = await User.create({
            name,
            email,
            password: jti,
            avatar: {
                url: process.env.TEST_IMAGE
            }
        })
        sendToken(user, 200, res)
    }
    else {
        sendToken(usr, 200, res)
    }
})
// Register a user   => /api/v1/register

exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            url: process.env.TEST_IMAGE
        }
    })

    sendToken(user, 200, res)

})

// Login User  =>  /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password, rm } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res, rm)

})

// Forgot Password   =>  /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('User not found with this email', 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${req.protocol}://${CLIENT_URL}/password/reset/${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`

    try {

        await sendEmail({
            email: user.email,
            subject: 'Caspian Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500))
    }

})

// Reset Password   =>  /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    // Setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({
        success: true,
        message: `Password changed please login `
    })

})


// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);  //with token

    res.status(200).json({
        success: true,
        user
    })
})


// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('Old password is incorrect'));
    }

    user.password = req.body.password;
    await user.save();

    sendToken(user, 200, res)

})

// Update avatar profile   =>   /api/v1/me/avatar
exports.updateAvatar = catchAsyncErrors(async (req, res, next) => {
    if (!req.file) {
        next(new ErrorHandler("File upload failed", 501))
    }
    const newpath = req.file.path.slice(16)
    const updateuser = await User.findByIdAndUpdate(req.user.id, { 'avatar.url': newpath }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})
// Update user profile   =>   /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        email: req.body.email
    }
    console.log(req.body)
    const user = await User.findById(req.user.id).select('+password');


    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandler('Password is incorrect'));
    }
    const updateuser = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})
// Update user role   =>   /api/v1/admin/users/role/:email
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.params
    console.log(email)
    const user = await User.findOneAndUpdate({ email }, { role: req.body.role }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    if (!user) {
        return next(new ErrorHandler(`User does not found.`))
    }
    res.status(200).json({
        success: true
    })
})
// Get all users   =>   /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})
// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})


// Delete user   =>   /api/v1/admin/user/:id
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User does not found with id: ${req.params.id}`))
    }


    await user.remove();

    res.status(200).json({
        success: true,
    })
})