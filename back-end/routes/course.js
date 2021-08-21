const express = require('express')
const router = express.Router();
const multerUpload = require("../middlewares/multerImage")

const {
    newCourse,
    deleteCourse,
    getCourse,
    getAdminCourse,
    getSingleCourse,
    updateCourse,
    newChapter,
    newLesson,
    deleteLesson,
    deleteChapter,
    setpublishCourse,
    setunpublishCourse,
    setRegistercourse,
    setUnregistercourse
} = require('../controllers/courseController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
// klasör varlığını kontrol etmek  
var upload = multerUpload();


router.route('/course').get(getCourse);
router.route('/admin/course').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminCourse);
router.route('/course/:id').get(getSingleCourse);

router.route("/admin/course/new").post(isAuthenticatedUser, authorizeRoles("admin"), upload.single("avatar"), newCourse);
router.route("/course/register")
    .put(isAuthenticatedUser, setRegistercourse)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), setUnregistercourse);
router.route("/admin/course/publish").post(isAuthenticatedUser, authorizeRoles("admin"), setpublishCourse);
router.route("/admin/course/unpublish").put(isAuthenticatedUser, authorizeRoles("admin"), setunpublishCourse);

router.route("/admin/chapter/new").post(isAuthenticatedUser, authorizeRoles("admin"), newChapter);
router.route("/admin/chapter/delete").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteChapter);

router.route("/admin/lesson/new").post(isAuthenticatedUser, authorizeRoles("admin"), newLesson);
router.route("/admin/lesson/delete").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteLesson);

router.route("/admin/course/:id")
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateCourse)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCourse);

module.exports = router;
