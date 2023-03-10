import React from "react";
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Log In</h1>
            <form className={styles.content}>
                <input className={styles.login} type='text' name="username" placeholder="Username"></input>
                <input className={styles.login}type='password' name='password' placeholder="Password"></input>
                <button className={styles.submit} type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default Login;