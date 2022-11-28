import React from "react";
import NavButton from "../components/NavButton";
import HomeButton from "./HomeButton";
import "../styles.css";
import "./Header.css";
function Header() {
    return (
        <div>
            <div>
                <HomeButton />
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