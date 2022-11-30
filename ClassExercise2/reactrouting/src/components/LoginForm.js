import React, { useRef } from "react";
import { LoggedInContext } from "../App";

function LoginForm() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent page reload

        fetch("http://localhost:3001/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
        })
            .then((data) => data.json())
            .then((json) => {
                alert(JSON.stringify(json));
                json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
            });
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={usernameRef} required /><br /><br />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" ref={passwordRef} required /><br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;