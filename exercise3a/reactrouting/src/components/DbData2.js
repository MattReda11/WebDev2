import React from "react";
function DbData2() {
    return (
        <>
            <button onClick={callPostBody}>Create a Specific user</button>
        </>
    )
}

function callPostBody() {
    fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify({
            username: "Sim19",
            password: "12345",
        }),
        headers: {
            "Content-type": "application/json;charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}
export default DbData2;