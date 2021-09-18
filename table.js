import React, { useState, useEffect } from "react";
import "./tablestyle.css";
import axios from "axios";
import Loader from "react-loader-spinner";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoad] = useState(true);

    const getUsers = async () => {
        setLoad(true);
        const res = await axios.get(`https://reqres.in/api/users?page=1`);
        setUsers(res.data.data);
        setLoad(false);
    };
    useEffect(() => {
        setTimeout(() => {
            getUsers();
        }, 1500);
    }, []);

    const Data = users.map((user, index) => (

        <ul>

            <li className="listusers users p-4 border border-primary" key={user.id}>
                <div className="m-4 usertext id">
                    <h4>{user.id}</h4>
                </div>
                <div className="m-1 usertext">
                    <img alt={index} src={user.avatar}></img>
                </div>
                <div className="m-4 usertext">
                    <h4><strong>{user.first_name + " " + user.last_name}</strong></h4>
                </div>
                <div className="m-4 usertext">
                    <h4>{user.email}</h4>
                </div>
            </li>
        </ul>
    ));

    return (
        <>
            <div>
                <ul>
                    <li className="listusers d-flex flex-wrap m-3 p-3">
                        <div className="col"><h3>ID</h3></div>
                        <div className="col"><h3>Image</h3></div>
                        <div className="col"><h3>Name</h3></div>
                        <div className="col"><h3>Email</h3></div>
                    </li>
                </ul>
            </div>
            <div className="d-flex flex-wrap justify-content-center p-2">
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    timeout={1500} //1.5 secs
                />
                {loading ? <div></div> : Data}
            </div>
        </>
    );
};

export default Users;