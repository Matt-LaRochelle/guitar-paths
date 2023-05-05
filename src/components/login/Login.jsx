import React, { useState } from "react";
import SignIn from './signIn/SignIn';
import Register from './register/Register';

function Login(props) {

    const [register, setRegister] = useState(true);

    function handleClick() {
        setRegister(!register);
    }

    return (
        <div>
            { register ? 
                <SignIn function={handleClick} function2={props.function2} /> : 
                <Register function={handleClick} function2={props.function2} />}
        </div>
    );
}

export default Login;