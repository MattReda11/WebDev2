import { Button } from "@mui/material";
import React, { useContext } from "react";
import { LoggedInContext } from "../App";

function LogoutButton() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };
    return (
        <div style={{
            flexDirection: "row", direction: "rtl"
        }}>
            <Button variant="contained" onClick={handleLogOut}> Log Out </Button>
        </div>
    )
}

export default LogoutButton;