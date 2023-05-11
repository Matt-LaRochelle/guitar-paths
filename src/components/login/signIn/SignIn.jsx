import React, { useState } from "react";
import Axios from 'axios';
import styles from './SignIn.module.css';


function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/users/sign", {
            username,
            password,
            }).then((response) => {
            if (response.status === 200) {
                if (response.data === "Incorrect username.") {
                    alert("Username does not exist.")
                } else if (response.data === "Incorrect password.") {
                    alert("Password is incorrect.");
                } else if (response.data.username === username) {
                    alert("Success!");
                    console.log(response);
                    alert(response.data.username);
                    props.function3(response.data.username);
                    alert(response.data.token);
                    props.function2();
                }
            } else if (response.status === 400) {
                alert(response.data);
        }});  
    }

    return (
        <div>
        <h1 className={styles.title}>Sign In</h1>
            <form className={styles.form}>
                <input className={styles.input} 
                        type='text' 
                        name="username" 
                        autoComplete="username" 
                        placeholder="Username" 
                        onChange={(event) => {
                    setUsername(event.target.value);
                }}></input>
                <input className={styles.input} 
                        type='password' 
                        name='password' 
                        autoComplete="current-password" 
                        placeholder="Password" 
                        onChange={(event) => {
                    setPassword(event.target.value);
                }}></input>
                <button className={styles.submit} type='submit' onClick={(e) => { e.preventDefault(); login()}}>Log In</button>
                <p className={styles.link} onClick={props.function}>Don't have an account? Register here</p>
            </form>
        </div>
    );
}

export default SignIn;