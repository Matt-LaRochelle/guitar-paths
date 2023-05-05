import React, { useState } from "react";
import Axios from 'axios';
import styles from './SignIn.module.css';


function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/users/", {
            username,
            password,
            }).then((response) => {
            alert("Success!");
            props.function2();
        });
    }

    return (
        <div>
        <h1 className={styles.title}>Sign In</h1>
            <form className={styles.form}>
                <input className={styles.input} type='text' name="username" placeholder="Username" onChange={(event) => {
                    setUsername(event.target.value);
                }}></input>
                <input className={styles.input}type='password' name='password' placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value);
                }}></input>
                <button className={styles.submit} type='submit' onClick={login}>Log In</button>
                <p className={styles.link} onClick={props.function}>Don't have an account? Register here</p>
            </form>
        </div>
    );
}

export default SignIn;