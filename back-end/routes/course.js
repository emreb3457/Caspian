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
    setUnregistercourse,
    setOpencourse,
    setWatchcourse,
    updateChapter,
    newDownloadFile,
    deleteDownloadFile

} = require('../controllers/courseController')
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
// klasör varlığını kontrol etmek  
var upload = multerUpload();


router.route('/course').get(getCourse);
router.route('/admin/course').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminCourse);
router.route('/course/:id').get(getSingleCourse);

router.route("/admin/course/new").post(isAuthenticatedUser, authorizeRoles("admin"), upload.single("image"), newCourse);
router.route("/admin/course/setopen/:id").put(isAuthenticatedUser, authorizeRoles("admin"), setOpencourse);
router.route('/course/setwatch').put(setWatchcourse);
router.route("/course/register")
    .post(isAuthenticatedUser, setRegistercourse)
    .put(isAuthenticatedUser, authorizeRoles("admin"), setUnregistercourse);

router.route("/admin/course/download").post(isAuthenticatedUser, authorizeRoles("admin"), upload.single("download"), newDownloadFile);
router.route("/admin/course/download/delete").post(isAuthenticatedUser, authorizeRoles("admin"), deleteDownloadFile);

// router.route("/admin/course/publish").post(isAuthenticatedUser, authorizeRoles("admin"), setpublishCourse);
// router.route("/admin/course/unpublish").put(isAuthenticatedUser, authorizeRoles("admin"), setunpublishCourse);

router.route("/admin/chapter/:id")
    .post(isAuthenticatedUser, authorizeRoles("admin"), newChapter)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateChapter)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteChapter);

router.route("/admin/lesson/new").post(isAuthenticatedUser, authorizeRoles("admin"), upload.single("video"), newLesson);
router.route("/admin/lesson/delete").post(isAuthenticatedUser, authorizeRoles("admin"), deleteLesson);

router.route("/admin/course/:id")
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateCourse)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCourse);

module.exports = router;
