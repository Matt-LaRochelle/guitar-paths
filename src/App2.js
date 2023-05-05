import React, { useState } from "react";
import App from './App';
import Login from './components/login/Login';


function App2() {
    const [signedIn, setSignedIn] = useState(false);

    function accessGranted() {
        setSignedIn(!signedIn);
    }

    return (
        <div>
            { signedIn ? <App function2={accessGranted} /> : <Login function2={accessGranted} />}
        </div>
    );
}

export default App2;