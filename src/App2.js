import React, { useState } from "react";
import App from './App';
import Login from './components/login/Login';


function App2() {
    const [signedIn, setSignedIn] = useState(false);
    const [username, setUsername] = useState("");

    function logUser(user) {
        setUsername(user)
    }

    function accessGranted() {
        setSignedIn(!signedIn);
    }

    return (
        <div>
            { signedIn ? <App 
                            function2={accessGranted}
                            function3={logUser}
                            user={username} /> : <Login 
                                                        function2={accessGranted}
                                                        function3={logUser} />}
        </div>
    );
}

export default App2;