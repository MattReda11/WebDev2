import React from "react";
function DbData6() {
    return (
        <>
            <button onClick={callPutBody}>Fully Update a User</button>
        </>
    )
}

function callPutBody() {
    fetch("http://localhost:3001/users", {
        method: "PUT",
        body: JSON.stringify({
            username: "Cam",
            password: "125"
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) =>
            alert(JSON.stringify(json)));
}

export default DbData6;