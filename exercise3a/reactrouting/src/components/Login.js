import React from "react";

function Login() {
    return (
        <div>
            <button onClick={signin}>Login</button>
        </div>
    )
}


function signin() {
    fetch("http://localhost:3001/users/login", {
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
export default Login;