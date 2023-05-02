import React, { useState, useEffect } from "react";
import Axios from 'axios';

function CreateUser() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");


    useEffect(() => {
        Axios.get("http://localhost:3001/users").then((response) => {
            setListOfUsers(response.data)
        })
    }, []);

    const createUser = () => {
        Axios.post("http://localhost:3001/users/add", {
                name,
                age,
                username,
            }).then((response) => {
            alert("User Created!");
            setListOfUsers([...listOfUsers, {
                name,
                age,
                username,
                },
            ]);
        });
        console.log("you clicked me!");
    };

    return (
        <div>
            Hello Create User!
            <div>
                {listOfUsers.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.name}</h1>
                            {/* <h1>Age: {user.age}</h1>
                            <h1>Username: {user.username}</h1> */}
                        </div>
                    );
                })}
            </div>
            <div>
                <input type="text" placeholder="Name..." onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <input type="number" placeholder="Age..." onChange={(event) => {
                    setAge(event.target.value);
                }}/>
                <input type="text" placeholder="Username..." onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                <button onClick={createUser}>Create User</button>
            </div>
        </div>
    );
}

export default CreateUser;