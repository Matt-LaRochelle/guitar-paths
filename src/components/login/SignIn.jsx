import React from "react";
import styles from './Login.module.css';


function SignIn(props) {
    return (
            <form className={styles.form}>
                <input className={styles.input} type='text' name="username" placeholder="Username"></input>
                <input className={styles.input}type='password' name='password' placeholder="Password"></input>
                <button className={styles.submit} type='submit'>Log In</button>
                <p className={styles.link} onClick={props.function}>Don't have an account? Register here</p>
            </form>
    );
}

export default SignIn;