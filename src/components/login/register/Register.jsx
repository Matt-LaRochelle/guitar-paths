import React, { useState, useEffect } from "react";
import Axios from 'axios';
import styles from './Register.module.css';

function Register(props) {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const current = (yyyy + '-' + mm + '-' + dd);

    useEffect(() => {
        Axios.get("http://localhost:3001/users").then((response) => {
            setListOfUsers(response.data)
        })
    }, []);


    function usernameValidation() {
        if (listOfUsers.filter(e => e.username === username).length > 0) {
            alert("Username already exists.")
        } else {
            if (username.length >= 3 && username.length <=30) {
                return true;
            } else {
                if (username.length < 3) {
                    alert("Username must be more than 3 characters.")
                } else if (username.length > 30) {
                    alert("Username must be less than 30 characters.")
                }
            }
        }   
    }

    function passwordValidation() {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
        if (re.test(password)) {
            return true;
        } else {
            alert("Passwords must be between 8-30 characters, and include at least one symbol, uppercase letter, lowercase letter, and number.")
        }
    }
    
    function birthdayValidation() {
        if (birthday < current) {
            return true;
        } else {
            alert("Birthday must be before today.")
        }
    }

    function emailValidation() {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (re.test(email)) {
            if (listOfUsers.filter(e => e.email === email).length > 0) {
                alert("Email already in use, please use a different email.")
            } else {
                return true;
            }
        } else {
            alert("Please use a valid email.")
        }
    }



    const createUser = () => {
        if (usernameValidation()) {
            if (passwordValidation()) {
                if (birthdayValidation()) {
                    if (emailValidation()) {
                        Axios.post("http://localhost:3001/users/add", {
                            username,
                            password,
                            birthday,
                            email,
                            }).then((response) => {
                            alert("User Created!");
                            props.function2();
                            setListOfUsers([...listOfUsers, {
                                username,
                                password,
                                birthday,
                                email,
                                },
                            ]);
                        });
                    }
                }
            }  
        }
    };

    return (
        <div>
            <div>
            <h1 className={styles.h1}>Register</h1>
                <label className={styles.label} for="username">Username</label>
                <input type="text" className={styles.input} required onChange={(event) => {
                    setUsername(event.target.value);
                }} />
                <label className={styles.label} for="password">Password</label>
                <input type="password" className={styles.input} required onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
                <label className={styles.label} for="birthday">Birthday</label>
                <input type="date" id="birthday" name="birthday" className={styles.input} required onChange={(event) => {
                    setBirthday(event.target.value);
                }}></input>
                <label className={styles.label} for="email">Email</label>
                <input type="email" className={styles.input} required onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
                <button className={styles.btn} onClick={(e) => { e.preventDefault(); createUser()}}>Create User</button>
                <p className={styles.link} onClick={props.function}>Already have an account? Sign in here</p>
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
        </div>
    );
}

export default Register;