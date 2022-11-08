import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Userview() {
    const params = useParams();
    console.log(params);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(...searchParams)
    const [userData,setUserData] = useState({})

    useEffect(() => {
        loadUser();
    }, [])

    let loadUser = async () => {
        try {
            let user = await axios.get(`https://62b297a520cad3685c902953.mockapi.io/user/${params.id}`)
            console.log(user.data)
            setUserData(user.data)
        } catch (error) {

        } {

        }
    }
    return (
        <>
        <h2>{userData.name}</h2>
        <h2>{userData.position}</h2>
        <h2>{userData.office}</h2>
        <h2>{userData.age}</h2>
        <h2>{userData.startdate}</h2>
        <h2>{userData.salary}</h2></>
    )
}

export default Userview;