import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function CreateUsers() {
    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: "",
            startDate: "",
            salary: ""

        },
        validate:(values) =>{
            let errors ={};
             if(values.name ===""&& values.name.length<5){
                errors.name=("Please enter username")
             }
             if(values.position===""){
                errors.position=("Please enter  position")
             }
            


            return errors;

        },

        onSubmit: async(values) => {
           let user = await axios.post("https://62b297a520cad3685c902953.mockapi.io/user",values);
           alert("User created successfully")
        }

    });
    return (
        <>
            

            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">

                            <label>Name</label>
                            <input className={` form-control ${formik.errors.name?`input-error`:``} `}
                            type={"text"}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                name="name" />
                                <span style={{color:'red'}}>{formik.errors.name}</span>
                        </div>
                    
                        <div className="col-lg-6">
                            <label>Position</label>
                            <input className={` form-control ${formik.errors.position?`input-error`:``} `} type={"text"}
                                value={formik.values.position}
                                onChange={formik.handleChange}
                                name="position" />
                                <span style={{color:'red'}}>{formik.errors.position}</span>
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
                    disabled={!formik.isValid}/>
                </form>



            </div >



    </>
)
}

export default CreateUsers;