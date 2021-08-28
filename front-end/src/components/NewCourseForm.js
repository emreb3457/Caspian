import React, { useEffect, useState } from 'react'
import Validate from "./Homecomp/Validate";
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert'
const Jobinput = (props) => {

    const session = JSON.parse(localStorage.getItem("userSession") || "[]");
    const alert = useAlert()
    const [coursename, setcoursename] = useState("")
    const [description, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [validaterr, setError] = useState({})

    const dispatch = useDispatch();
    const history = useHistory();




    useEffect(() => {
       
    }, [dispatch])

  
    const onSubmit = () => {

        const errors = validate();
        setError(errors);

        if (Object.keys(errors).length === 0) {


        }

    }
    const validate = () => {
        let errors = {}
        if (!coursename) errors.coursename = "Course name field is required.";
        if (description) errors.description = "Description field is required.";
        if (!category) errors.category = "Category field is required.";
        if (!price) errors.price = "Price field is required.";
        if (category === "Category") errors.category = "Category field is required.";
        return errors;
    }
    let errors = { ...validaterr };

    return (
        <div className="container bg-white createtaskContent">
            <form id="createtaskForm" className="row">
                <div className="col-sm-6">
                    <div className="form-group ">
                        <input type="text" className="form-control" placeholder="Görev Adı" name="coursename" value={coursename} onChange={(e) => setcoursename(e.target.value)} />
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
                            <input type="text" className="form-control" placeholder="Görev Ücreti" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <div className="input-group-append d-block ">
                                <span className="input-group-text">₺</span>
                            </div>
                            {errors.price && <Validate message={errors.price} />}
                        </div>
                    </div>
                </div>

                <div style={{ margin: "13px" }}>
                    <button type="button" className="btn btn-success" onClick={onSubmit}>Create</button>
                </div>
            </form>
        </div >


    )
}

export default Jobinput