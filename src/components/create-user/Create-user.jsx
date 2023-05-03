import React, { useState, useEffect } from "react";
import Axios from 'axios';

function CreateUser() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const current = (mm + '/' + dd + '/' + yyyy);



    useEffect(() => {
        Axios.get("http://localhost:3001/users").then((response) => {
            setListOfUsers(response.data)
        })
    }, []);


    function inputUsername(e) {
        setUsername(e.target.value);
    }



    const createUser = () => {
        if (username.length >= 3) {
            if (Date(birthday) < Date(current)) {
                Axios.post("http://localhost:3001/users/add", {
                username,
                password,
                birthday,
                email,
            }).then((response) => {
            alert("User Created!");
            setListOfUsers([...listOfUsers, {
                username,
                password,
                birthday,
                email,
                },
            ]);
        });
            } else {
                alert("Birthday must be before today...")
            }
            
        } else {
            alert("Username must be more than 3 characters!")
        }
        
    };

    return (
        <div>
            Hello Create User!
            <div>
                <h1>{current}</h1>
            </div>
            <div>
                {listOfUsers.map((user) => {
                    return (
                        <div>
                            <h6>Username: {user.username}</h6>
                            <h6>Password: {user.password}</h6>
                            <h6>Birthday: {user.birthday}</h6>
                            <h6>Email: {user.email}</h6>
                            <br></br>
                        </div>
                    );
                })}
            </div>
            <div>
                <input type="text" placeholder="Username..." required onChange={inputUsername} />
                <input type="password" placeholder="Password..." required onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" required onChange={(event) => {
                    setBirthday(event.target.value);
                }}></input>
                <input type="email" placeholder="Email..." required onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
                <button onClick={createUser}>Create User</button>
            </div>
        </div>
    );
}

export default CreateUser;