import React, { useEffect, useState } from 'react'
import Validate from "./Homecomp/Validate";
import { useHistory, Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert'
import { newCourse, clearErrors, updateCourse } from "../actions/couseAction"
import { NEW_COURSE_RESET, UPDATE_COURSE_RESET } from "../constants/courseContants"
const NewCourse = ({ location }) => {
    console.log(location)
    const session = JSON.parse(localStorage.getItem("userSession") || "[]");
    const alert = useAlert()
    const [coursename, setcoursename] = useState("")
    const [description, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [courseImage, setChangevatar] = useState("")
    const [fileType, setFiletype] = useState("")
    const [validaterr, setError] = useState({})

    const dispatch = useDispatch();
    const history = useHistory();

    const { loading, error, success } = useSelector(state => state.newCourse);
    const { error: updateError, isUpdated } = useSelector(state => state.course);
    useEffect(() => {
        if (location.state) {
            return (
                setcoursename(location.state.course.name),
                setDesc(location.state.course.description),
                setCategory(location.state.course.category),
                setPrice(location.state.course.price)
            )
        }
    }, [])

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
            if (updateError) {
                alert.error(updateError);
                dispatch(clearErrors())
            }

            if (isUpdated) {
                history.push('/panel');
                alert.success('Course update successfully');
                dispatch({ type: UPDATE_COURSE_RESET })
            }
        }
    }, [dispatch, alert, error, isUpdated, history])


    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
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
        const errors = validate();
        setError(errors);

        if (Object.keys(errors).length === 0) {
            
            dispatch(updateCourse(location.state.course._id, coursename,price,description,category))
        }

    }
    const validate = () => {
        let errors = {}
        if (!coursename) errors.coursename = "Course name field is required.";
        if (!description) errors.description = "Description field is required.";
        if (!category) errors.category = "Category field is required.";
        if (!price) errors.price = "Price field is required.";
        if (category === "Category") errors.category = "Category field is required.";
        return errors;
    }
    let errors = { ...validaterr };
    const onBeforeFileLoad = (elem) => {
        if (elem.target.files.length == 1) {
            setFiletype(elem.target.files[0].type)
            if (elem.target.files[0].size > 71680) {
                alert.error("Dosya Boyutu Çok Büyük!");
                elem.target.value = "";
            }
            else {
                if (elem.target.files[0].type == "image/jpeg" || elem.target.files[0].type == 'image/png') {
                    setChangevatar(elem.target.files[0])
                }
                else {
                    alert.error("Geçersiz Dosya Formatı..")
                }
            }
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
                            <option defaultValue >Kategori</option>
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
                </div>

                <div style={{ margin: "13px" }}>
                    {location.state ? <button type="button" className="btn btn-warning" onClick={onUpdate}>Update</button> : <button type="button" className="btn btn-success" onClick={onSubmit}>Create</button>}
                </div>
            </form>
        </div >


    )
}

export default NewCourse