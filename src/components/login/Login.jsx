import React from "react";
import styles from './Login.module.css';
import Register from './Register';
import SignIn from './SignIn';

var isRegistered = false

function Login() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Log In</h1>
            { isRegistered ? <SignIn /> : <Register />}
        </div>
    );
}

export default Login;