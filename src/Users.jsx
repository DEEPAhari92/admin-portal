import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Users() {
    const [user, setUser] = useState([]);
    const [isLoading, setLoading] = useState([false]);
    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let user = await axios.get("https://62b297a520cad3685c902953.mockapi.io/user");
        setUser(user.data)
        setLoading(false);

    };
    let userDelete = async(id)=>{
        try {
            let ask = window.confirm("Are you sure.Do you want delete this data?")
            if(ask){await axios.delete(`https://62b297a520cad3685c902953.mockapi.io/user/${id}`)
            loadData()}
            
        } catch (error) {
            
        }
    }
   

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/Create-users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create user</Link>
            </div>
            {
            isLoading ? <span>Loading...</span>:<div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            user.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.age}</td>
                                        <td>{user.startDate}</td>
                                        <td>{user.salary}</td>
                                        <td>
                                            <Link to={`/portal/Users/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                            <Link to={`/portal/User/edit/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                            <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
}
        </div>


    )
}

export default Users;