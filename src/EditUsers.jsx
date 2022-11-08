import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUsers() {
    const params = useParams();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            position: "",
            office: "",
            age: "",
            startDate: "",
            salary: ""

        },
        validate: (values) => {
            let errors = {};
            if (values.username === "" && values.username.length < 5) {
                errors.username = ("Please enter username")
            }
            if (values.position === "") {
                errors.position = ("Please enter  position")
            }



            return errors;

        },

        onSubmit: async(values) => {
            await axios.put(`https://62b297a520cad3685c902953.mockapi.io/user/${params.id}`,values)
            navigate("/portal/Users")
        }
        });

        useEffect(()=>{
loadUser()
        },[]
    );
    let loadUser = async () => {
        try {
            let user = await axios.get(`https://62b297a520cad3685c902953.mockapi.io/user/${params.id}`)
        formik.setValues({
            
                username: user.data.name,
                position: user.data.position,
                office:user.data.office,
                age: user.data.age,
                startDate: user.data.startDate,
                salary: user.data.salary
    
            }

        )
        } catch (error) {

        }
    }
return (
    <>


        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">

                        <label>User Name</label>
                        <input className={` form-control ${formik.errors.username ? `input-error` : ``} `}
                            type={"text"}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            name="username" />
                        <span style={{ color: 'red' }}>{formik.errors.username}</span>
                    </div>

                    <div className="col-lg-6">
                        <label>Position</label>
                        <input className={` form-control ${formik.errors.position ? `input-error` : ``} `} type={"text"}
                            value={formik.values.position}
                            onChange={formik.handleChange}
                            name="position" />
                        <span style={{ color: 'red' }}>{formik.errors.position}</span>
                    </div>

                    <div className="col-lg-6">
                        <label>Office</label>
                        <input className='form-control' type={"text"}
                            value={formik.values.office}
                            onChange={formik.handleChange}
                            name="office" />
                    </div>

                    <div className="col-lg-6">
                        <label>Age</label>
                        <input className='form-control' type={"text"}
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            name="age" />
                    </div>

                    <div className="col-lg-6">
                        <label>Start Date</label>
                        <input className='form-control' type={"text"}
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                            name="startDate" />
                    </div>


                    <div className="col-lg-6">
                        <label>Salary</label>
                        <input className='form-control' type={"text"}
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            name="salary" />

                    </div>
                </div >
                <input className="btn-primary" type={"submit"} value="submit"
                    disabled={!formik.isValid} />
            </form>



        </div >



    </>
)
}

export default EditUsers;
