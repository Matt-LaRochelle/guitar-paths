import React, { useState } from "react";
import styles from './Login.module.css';
import Register from './Register';
import SignIn from './SignIn';

function Login() {

    const [isRegistered, setIsRegistered] = useState(true);

    function handleClick() {
        setIsRegistered(!isRegistered);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Log In</h1>
            { isRegistered ? <SignIn function={handleClick} /> : <Register function={handleClick} />}
        </div>
    );
}

export default Login;