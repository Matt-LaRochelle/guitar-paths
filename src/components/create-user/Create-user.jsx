import React, { useState } from "react";

function CreateUser() {
    const [listOfUsers, setListOfUsers] = useState([
        { id: 1, name: "Pedro", age: 20, username: "Pedro123" },
    ]);

    return (
        <div>
            Hello Create User!
            <div>
                {listOfUsers.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.name}</h1>
                            <h1>Age: {user.age}</h1>
                            <h1>Username: {user.username}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CreateUser;