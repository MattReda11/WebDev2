import React from "react";
function DbData8() {
    return (
        <>
            <button onClick={callDeleteParams}>Delete a User</button>
        </>
    )
}

function callDeleteParams() {
    fetch("http://localhost:3001/users/Sim19",
        { method: "DELETE" })
        .then((data) => data.json())
        .then((json) =>
            alert(JSON.stringify(json)));
}

export default DbData8;