import React, { useState } from "react";
import SignIn from './signIn/SignIn';
import Register from './register/Register';

function Login() {

    const [register, setRegister] = useState(true);

    function handleClick() {
        setRegister(!register);
    }

    return (
        <div>
            { register ? <SignIn function={handleClick} /> : <Register function={handleClick} />}
        </div>
    );
}

export default Login;