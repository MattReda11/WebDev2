import React from "react";
function DbData7() {
    return (
        <>
            <button onClick={callPatchBodyUsername}>Patch a User</button>
        </>
    )
}

function callPatchBodyUsername() {
    fetch("http://localhost:3001/users/MattReda/password", {
        method: "PATCH",
        body: JSON.stringify({
            password: "126"
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) =>
            alert(JSON.stringify(json)));
}

export default DbData7;