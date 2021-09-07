var express = require('express');
var router = express.Router();
const multerUpload = require("../middlewares/multerImage")
const {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    logout,
    allUsers,
    deleteUser,
    updateAvatar,
    updateUserRole,
    loginGoogle
    

} = require('../controllers/authController');
var upload = multerUpload();

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/login/google').post(loginGoogle);

router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser, getUserProfile)
router.route('/password/update').put(isAuthenticatedUser, updatePassword)
router.route('/me/update').put(isAuthenticatedUser, updateProfile)
router.route('/me/avatar').put(isAuthenticatedUser,upload.single("avatar"), updateAvatar)

router.route('/admin/users/role/:email').put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers)
router.route('/admin/user/:id')
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)


module.exports = router;