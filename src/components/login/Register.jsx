import React from "react";
import styles from './Login.module.css';

function Register(props) {
    return (
            <form className={styles.content}>
                <input className={styles.input} type='text' name="username" placeholder="Username"></input>
                <input className={styles.input}type='password' name='password' placeholder="Password"></input>
                <input className={styles.input}type='password' name='password' placeholder="Confirm Password"></input>
                <button className={styles.submit} type='submit'>Register</button>
                <p className={styles.link} onClick={props.function}>Already have an account? Sign in here</p>
            </form>
    );
}

export default Register;