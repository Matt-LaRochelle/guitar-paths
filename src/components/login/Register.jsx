import React from "react";
import styles from './Login.module.css';

function Register() {
    return (
            <form className={styles.content}>
                <input className={styles.login} type='text' name="username" placeholder="Username"></input>
                <input className={styles.login}type='password' name='password' placeholder="Password"></input>
                <input className={styles.login}type='password' name='password' placeholder="Confirm Password"></input>
                <button className={styles.submit} type='submit'>Register</button>
            </form>
    );
}

export default Register;