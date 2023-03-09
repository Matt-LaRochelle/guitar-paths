import React from "react";
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <h1>Log In</h1>
            <form>
                <input type='text' name="username"></input>
                <input type='password' name='password'></input>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default Login;