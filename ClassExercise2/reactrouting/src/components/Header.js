import React, { useContext } from "react";
import NavButton from "../components/NavButton";
import HomeButton from "./HomeButton";
import "../styles.css";
import "./Header.css";
import { LoggedInContext } from "../App";
import LogoutButton from "./LogoutButton";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    return (
        <div>
            <div>
                {isLoggedIn ? <h2>Welcome</h2> : <h2>Please Log In</h2>}
                {isLoggedIn ? <LogoutButton /> : <HomeButton />}
            </div>
            <div>
            </div>
            <div>
                <NavButton to="/" label="Home" />
                <NavButton to="/about" label="About" />
                <NavButton to="/contact" label="Contact" />
            </div>
        </div>
    );
}
export default Header;