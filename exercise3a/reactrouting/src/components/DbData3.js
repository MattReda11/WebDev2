import React from "react";
function DbData3() {
    return (
        <>
            <button onClick={callGetQuery}>Get One User (query)</button>
        </>
    )
}

function callGetQuery() {
    fetch("http://localhost:3001/user?username=Cam", { method: "GET" })
        .then((data) => data.json())
        .then((json) =>
            alert(JSON.stringify(json)));
}

export default DbData3;