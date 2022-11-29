import React from "react";

function Register() {
    return (
        <div>
            <button onClick={registering}>Register a User</button>
        </div>
    )
}


function registering() {
    fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify({
            username: "MattReda",
            password: "MontrealExpos99!",
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}
export default Register;