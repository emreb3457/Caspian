const multer = require('multer')
var fs = require('fs');
module.exports = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
                cb(null, 'back-end/public/images')
            }
            else if (file.mimetype == 'video/mp4') {
                cb(null, 'back-end/public/coursevideo')
            }
            else if (file.mimetype == 'application/pdf') {
                cb(null, 'back-end/public/otherFiles')
            }

        },
        filename: (req, file, cb) => {
           
            if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
                try {
                    const stats = fs.lstatSync(`back-end/public/images/${file.originalname}`);
                    if (stats.isFile()) {
                        file.originalname = uuidv4() + ".png";
                    }
                } catch (error) {
                    console.log("File not found next")
                }
                cb(null, `${file.originalname}`)
            }
            else if (file.mimetype == 'video/mp4') {
                try {
                    const stats = fs.lstatSync(`back-end/public/coursevideo/${file.originalname}`);
                    if (stats.isFile()) {
                        file.originalname = uuidv4() + ".mp4";
                    }
                } catch (error) {
                    console.log("File not found next")
                }
                cb(null, `${file.originalname}`)
            }
            else if (file.mimetype == 'application/pdf') {
                try {
                    const stats = fs.lstatSync(`back-end/public/otherFiles/${file.originalname}`);
                    if (stats.isFile()) {
                        file.originalname = uuidv4() + ".pdf";
                    }
                } catch (error) {
                    console.log("File not found next")
                }
                cb(null, `${file.originalname}`)
            }
        }
    })
    const fileFilter = (req, file, cb) => {
        if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'video/mp4' || file.mimetype == 'application/pdf') {
            cb(null, true);
        } else {
            cb(null, false);
        }

    }
    return upload = multer({ storage, fileFilter })
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}