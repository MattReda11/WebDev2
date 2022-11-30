import React from "react";

function DbData() {
    return (
        <div>
            <button onClick={registerUserTemp}>Register User</button>
        </div>
    )
}

async function registerUserTemp() {
    fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify({
            username: "ThorOdinson",
            password: "AsgardForever1!",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}
export default DbData;