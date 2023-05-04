import React, { useState } from "react";
import styles from './Login.module.css';
import SignIn from './SignIn';
import Register from './register/Register';

function Login() {

    const [isRegistered, setIsRegistered] = useState(true);

    function handleClick() {
        setIsRegistered(!isRegistered);
    }

    return (
        <div className={styles.container}>
            { isRegistered ? <SignIn function={handleClick} /> : <Register function={handleClick} />}
        </div>
    );
}

export default Login;