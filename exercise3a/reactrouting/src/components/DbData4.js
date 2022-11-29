import React from "react";
function DbData4() {
    return (
        <>
            <button onClick={callGetParams}>Get One User (params)</button>
        </>
    )
}

function callGetParams() {
    fetch("http://localhost:3001/users/MattReda",
        { method: "GET" })
        .then((data) => data.json())
        .then((json) =>
            alert(JSON.stringify(json)));
}

export default DbData4;