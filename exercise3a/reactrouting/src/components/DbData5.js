import React from "react";
function DbData5() {
    return (
        <>
            <button onClick={callGetBody}>Get one user (Request Body)</button>
        </>
    )
}

function callGetBody() {
    fetch("http://localhost:3001/users/get",
        {
            method: "POST",
            body: JSON.stringify({
                username: "StuKatz",
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
        })
        .then((data) => data.json())
        .then((json) =>
            alert(JSON.stringify(json)));
}

export default DbData5;