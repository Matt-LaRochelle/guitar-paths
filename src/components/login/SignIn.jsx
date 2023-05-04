import React, { useState } from "react";
import styles from './Login.module.css';


function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
        <h1 className={styles.title}>Sign In</h1>
        <h3>Username: {username}</h3>
        <h3>Password: {password}</h3>
            <form className={styles.form}>
                <input className={styles.input} type='text' name="username" placeholder="Username" onChange={(event) => {
                    setUsername(event.target.value);
                }}></input>
                <input className={styles.input}type='password' name='password' placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value);
                }}></input>
                <button className={styles.submit} type='submit'>Log In</button>
                <p className={styles.link} onClick={props.function}>Don't have an account? Register here</p>
            </form>
        </div>
    );
}

export default SignIn;