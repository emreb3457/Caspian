import React, { useEffect, useState, Fragment } from 'react'
import Validate from "./Homecomp/Validate";
import { Form } from "react-bootstrap"
import { API_BASE } from '../config/env'
import Loader from '../components/loader';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert'
import { newCourse, clearErrors, updateCourse, newChapter, getCourseDetails, updateChapter, deleteChapter, newLesson, deleteLesson, deleteDownloadFile, newdownloadFile } from "../actions/couseAction"
import { NEW_COURSE_RESET, UPDATE_COURSE_RESET, UPDATE_CHAPTER_RESET, DELETE_CHAPTER_RESET } from "../constants/courseContants"
import pdficon from "../images/icons/pdffile.svg"
const NewCourse = ({ location }) => {

    const alert = useAlert()
    const [coursename, setcoursename] = useState("")
    const [description, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [courseImage, setChangevatar] = useState("")
    const [courseVideo, setVideo] = useState("")
    const [courseFile, setFile] = useState("")
    const [chaptername, setChaptername] = useState("")
    const [lessonname, setLessonname] = useState("")
    const [validaterr, setError] = useState({})

    const dispatch = useDispatch();
    const history = useHistory();

    const { error, success, loading } = useSelector(state => state.newCourse);
    const { error: updateError, isUpdated } = useSelector(state => state.course);
    const { error: detailsError, course, lesson, loading: detailsloading } = useSelector(state => state.courseDetails);
    const { error: chapterError, isUpdated: chapterUpdate, isDeleted } = useSelector(state => state.chapter);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (course) {
            return (
                setcoursename(course.name),
                setDesc(course.description),
                setCategory(course.category),
                setPrice(course.price)

            )
        }
    }, [course])

    useEffect(() => {
        if (!location.state) {
            if (error) {
                alert.error(error);
                dispatch(clearErrors())
            }

            if (success) {
                history.push('/panel');
                alert.success('Course created successfully');
                dispatch({ type: NEW_COURSE_RESET })
            }
        }
    }, [dispatch, alert, error, success, history])
    useEffect(() => {
        if (location.state) {
            dispatch(getCourseDetails(location.state.id))
            if (updateError) {
                alert.error(updateError);
                dispatch(clearErrors())
            }
            if (detailsError) {
                alert.error(detailsError);
                dispatch(clearErrors())
            }
            if (chapterError) {
                alert.error(chapterError);
                dispatch(clearErrors())
            }
            if (error) {
                alert.error(error);
                dispatch(clearErrors())
            }
            if (isUpdated) {
                history.push('/panel');
                alert.success('Course update successfully');
                dispatch({ type: UPDATE_COURSE_RESET })
            }
            if (chapterUpdate) {
                alert.success('Chapter update successfully');
                dispatch({ type: UPDATE_CHAPTER_RESET })
            }
            if (success) {
                alert.success('Upload complete');
                dispatch({ type: NEW_COURSE_RESET })
            }
            if (isDeleted) {
                dispatch({ type: DELETE_CHAPTER_RESET })
            }

        }
    }, [dispatch, alert, isDeleted, updateError, chapterUpdate, detailsError, error, success, chapterError, isUpdated, history])


    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validate1();
        setError(errors);

        if (Object.keys(errors).length === 0) {
            const formData = new FormData();
            formData.set('name', coursename);
            formData.set('price', price);
            formData.set('description', description);
            formData.set('category', category);
            formData.set('image', courseImage);
            dispatch(newCourse(formData))
        }

    }
    const onUpdate = (e) => {
        e.preventDefault();
        const errors = validate1();
        setError(errors);

        if (Object.keys(errors).length === 0) {

            dispatch(updateCourse(location.state.id, coursename, price, description, category))
        }

    }
    const onSubmitChapter = (e) => {
        const errors = validate2();
        setError(errors);

        if (Object.keys(errors).length === 0) {
            dispatch(newChapter(location.state.id, chaptername))

            document.getElementsByClassName("toggle")[0].children[0].className = "btn btn-success mt-3"
            document.getElementsByClassName("toggle")[0].children[0].children[0].className = "fas fa-plus"
            document.getElementsByClassName("addChapter")[0].style.display = "none"
        }
    }
    const onChapterUpdate = (id, index) => {
        const errors = validate2();
        setError(errors);
        if (Object.keys(errors).length === 0) {
            dispatch(updateChapter(location.state.id, chaptername, id))

            document.getElementsByClassName("job-buttons")[0].children[0].className = "btn btn-info mr-2 "
            document.getElementsByClassName("job-buttons")[0].children[0].children[0].className = "fas fa-edit"
            document.getElementsByClassName(`editChapter${index}`)[0].style.display = "none"
        }
    }
    const onlessonAdd = (chapterId, index) => {
        const errors = validate3();
        setError(errors);
        if (Object.keys(errors).length === 0) {
            document.getElementsByClassName("toggle-2")[0].children[0].className = "btn btn-success mt-2 "
            document.getElementsByClassName("toggle-2")[0].children[0].children[0].className = "fas fa-plus"
            document.getElementsByClassName(`addLesson${index}`)[0].style.display = "none"

            const formData = new FormData();
            formData.set('title', lessonname);
            formData.set('courseId', location.state.id);
            formData.set('chapterId', chapterId);
            formData.set('video', courseVideo);
            dispatch(newLesson(formData))
            alert.info("You will be notified when uploaded")
            setLessonname("")
            setVideo("")

        }
    }
    const onnewdownloadFile = (elem) => {
        if (elem.target.files.length === 1) {
            if (elem.target.files[0].type === "application/pdf") {
                setFile(elem.target.files[0])
                const formData = new FormData();
                formData.set('id', location.state.id);
                formData.set('download', elem.target.files[0]);
                alert.info("You will be notified when uploaded")
                setTimeout(() => {
                    dispatch(newdownloadFile(formData))
                }, 1000);
            }
            else {
                elem.target.value = "";
                alert.error("Invalid File Format..")
            }
        }
    }
    const removeChapter = (id) => {
        dispatch(deleteChapter(location.state.id, id))
    }
    const removeLesson = (id) => {

        dispatch(deleteLesson(id, location.state.id))
    }
    const removeDownloadfile = (id) => {
        dispatch(deleteDownloadFile(id, location.state.id))
    }
    const validate1 = () => {
        let errors = {}
        if (!coursename) errors.coursename = "Course name field is required.";
        if (!description) errors.description = "Description field is required.";
        if (!category) errors.category = "Category field is required.";
        if (!price) errors.price = "Price field is required.";
        if (category === "Category") errors.category = "Category field is required.";
        return errors;
    }
    const validate2 = () => {
        let errors = {}
        if (!chaptername) errors.chaptername = "Chapter name field is required.";
        return errors;
    }
    const validate3 = () => {
        let errors = {}
        if (!courseVideo) errors.courseVideo = "Course video field is required.";
        if (!lessonname) errors.lessonname = "Course video field is required.";
        return errors;
    }
    let errors = { ...validaterr };
    const onBeforeFileLoad = (elem) => {
        if (elem.target.files.length === 1) {

            if (elem.target.files[0].size > 71680) {
                alert.error("File Size Too Large!");
                elem.target.value = "";
            }
            else {
                if (elem.target.files[0].type === "image/jpeg" || elem.target.files[0].type === 'image/png') {
                    setChangevatar(elem.target.files[0])
                }
                else {
                    elem.target.value = "";
                    alert.error("Invalid File Format..")
                }
            }
        }
    }
    const clearFileupload = (elem) => {
        elem.target.value = "";
    }

    const onBeforeVideoLoad = (elem) => {
        if (elem.target.files.length === 1) {
            if (elem.target.files[0].type === "video/mp4") {
                setVideo(elem.target.files[0])
            }
            else {
                elem.target.value = "";
                alert.error("Invalid File Format..")
            }
        }
    }
    const toggleButton = (x) => {
        if (x.classList[1] === "btn-success") {
            x.className = "btn btn-danger mt-3"
            x.children[0].className = "fas fa-minus"
            document.getElementsByClassName("addChapter")[0].style.display = "block"
        }
        else {
            x.className = "btn btn-success mt-3"
            x.children[0].className = "fas fa-plus"
            document.getElementsByClassName("addChapter")[0].style.display = "none"
        }
    }
    const toggleButton2 = (x, index) => {
        if (x.classList[1] === "btn-success") {
            x.className = "btn btn-danger mt-3"
            x.children[0].className = "fas fa-minus"
            document.getElementsByClassName(`addLesson${index}`)[0].style.display = "block"
        }
        else {
            x.className = "btn btn-success mt-3"
            x.children[0].className = "fas fa-plus"
            document.getElementsByClassName(`addLesson${index}`)[0].style.display = "none"
        }
    }
    const toggleButtonUpdate = (x, index) => {
        if (x.classList[1] === "btn-info") {
            x.className = "btn btn-warning mr-2"
            x.children[0].className = "fas fa-minus"
            document.getElementsByClassName(`editChapter${index}`)[0].style.display = "block"
        }
        else {
            x.className = "btn btn-info mr-2"
            x.children[0].className = "fas fa-edit"
            document.getElementsByClassName(`editChapter${index}`)[0].style.display = "none"
        }
    }



    return (
        <div className="container bg-white createtaskContent">

            <Link to="/panel" className="btn btn-primary mb-4 mt-4">Go back</Link>
            {!location.state && <div className="float-right mt-4">
                <input type="file" onChange={(e) => onBeforeFileLoad(e)} accept='image/*' id="file-1" className="inputfile inputfile-1" /> <br />
                <label for="file-1"><span>Resim Seçiniz...</span>&nbsp;<i className="fas fa-upload"></i></label>
            </div>}

            <form id="createtaskForm" className="row">
                <div className="col-sm-6">
                    <div className="form-group ">
                        <input type="text" className="form-control" placeholder="Course Name" name="coursename" value={coursename} onChange={(e) => setcoursename(e.target.value)} />
                        {errors.coursename && <Validate message={errors.coursename} />}
                    </div>
                    <div className="form-group ">
                        <textarea className="form-control" placeholder="Course description" rows="7" name="description" value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
                        {errors.description && <Validate message={errors.description} />}
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <select id="kategori" className="form-control custom-select" name="category" value={category} onChange={(e) => setCategory(e.target.value)}  >
                            <option defaultValue >Category</option>
                            <option>For kids</option>
                            <option>For adults</option>
                        </select>
                        {errors.category && <Validate message={errors.category} />}
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 input-group">
                            <input type="text" className="form-control" placeholder="Course Price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <div className="input-group-append d-block ">
                                <span className="input-group-text">₺</span>
                            </div>
                            {errors.price && <Validate message={errors.price} />}
                        </div>
                    </div>

                    <div className="row">
                        {location.state &&
                            <div className="form-group col-sm-8 ">
                                <label for="downloadFile">Add Downloadable files </label>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Control onClick={(e) => clearFileupload(e)} onChange={(e) => onnewdownloadFile(e)} type="file" />
                                </Form.Group>
                            </div>
                        }
                        {course && !course.downloadsfile0 &&
                            <div className="form-group col-sm-10 ">
                                <div className="downloadFile">
                                    <label style={{ display: "block" }} for="downloadFile">Downloadable files </label>
                                    {course && course.downloadsfile && course.downloadsfile.map && course.downloadsfile.map(dwn =>
                                        <Fragment key={dwn._id}>
                                            <div style={{ display: "inline-block" }}>
                                                <a target="_blank" href={`${API_BASE}/${dwn.url}`} download="emre"> <img src={pdficon} alt="icon" /><h4>{dwn.orjname}</h4>  </a>
                                            </div>
                                            <div className="d-inline-block float-right">
                                                <div style={{ fontSize: "10px" }} className="btn btn-danger" title="Remove" onDoubleClick={() => removeDownloadfile(dwn._id)} ><i className="far fa-trash-alt" /></div>
                                            </div>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        }

                    </div>
                </div>

                <div style={{ margin: "13px" }}>
                    {location.state ? <button type="button" className="btn btn-warning" onClick={onUpdate}>Update</button> : <button type="button" className="btn btn-success" onClick={onSubmit}>Create</button>}
                </div>
            </form>
            {detailsloading && <Loader />}
            {location.state &&
                <div id="courseContent">
                    {course && course.chapter && course.chapter.map && course.chapter.map((chp, index) =>
                        <div className="chapter">
                            <div className="d-inline-block">
                                <h4 className="chapter-title">{chp.title}</h4>

                                <div className={`editchpter editChapter${index}`}>
                                    <div className="form-group ">
                                        <input type="text" className="form-control" placeholder="Chapter Name" name="chaptername" value={chaptername} onChange={(e) => setChaptername(e.target.value)} />
                                        {errors.chaptername && <Validate message={errors.chaptername} />}
                                    </div>
                                    <div className="content-btn ">
                                        <button className="btn btn-dark" onClick={() => onChapterUpdate(chp._id, index)}>Edit Chapter</button>
                                    </div>
                                </div>


                            </div>

                            <div className="job-buttons d-inline-block float-right">
                                <div className="btn btn-info mr-2" title="Edit" onClick={x => toggleButtonUpdate(x.currentTarget, index)} ><i className="far fa-edit" /></div>
                                <div className="btn btn-danger" title="Remove" onDoubleClick={() => removeChapter(chp._id)} ><i className="far fa-trash-alt" /></div>
                            </div>
                            {lesson && lesson.map && lesson.map(lsn => {
                                if (lsn.chapterId == chp._id) {
                                    return (
                                        <div className="lesson">
                                            <h4 className="d-inline">{lsn.title}</h4>
                                            <div className="d-inline-block float-right">
                                                <div style={{ fontSize: "10px" }} className="btn btn-danger" title="Remove" onDoubleClick={() => removeLesson(lsn._id)} ><i className="far fa-trash-alt" /></div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}

                            <div className="checkbox toggle-2">
                                <button className="btn btn-success mt-3" onClick={x => toggleButton2(x.currentTarget, index)}><i className="fas fa-plus"></i></button>
                            </div>

                            <div className={`mt-2 addlesson addLesson${index}`}>
                                <div className="form-group ">
                                    <input type="text" className="form-control" placeholder="Lesson Name" name="lessonname" value={lessonname} onChange={(e) => setLessonname(e.target.value)} />
                                    {errors.lessonname && <Validate message={errors.lessonname} />}
                                </div>
                                <div className="form-group ">
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control onClick={(e) => clearFileupload(e)} onChange={(e) => onBeforeVideoLoad(e)} type="file" />
                                    </Form.Group>

                                    {errors.courseVideo && <Validate message={errors.courseVideo} />}
                                </div>
                                <div className="content-btn ">
                                    <button className="btn btn-dark" onClick={() => onlessonAdd(chp._id, index)}>Add Lesson</button>
                                </div>
                            </div>
                        </div>

                    )}

                    <div className="checkbox toggle">
                        <button className="btn btn-success mt-3" onClick={x => toggleButton(x.currentTarget)}><i className="fas fa-plus"></i></button>
                    </div>
                    <div className="addChapter">
                        <div className="form-group ">
                            <input type="text" className="form-control" placeholder="Chapter Name" name="chaptername" value={chaptername} onChange={(e) => setChaptername(e.target.value)} />
                            {errors.chaptername && <Validate message={errors.chaptername} />}
                        </div>
                        <div className="content-btn ">
                            <button className="btn btn-dark" onClick={() => onSubmitChapter()}>Add Chapter</button>
                        </div>
                    </div>
                </div>
            }

        </div >


    )
}

export default NewCourse