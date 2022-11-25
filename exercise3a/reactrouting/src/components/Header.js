import React from "react";
import { NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
import "../index.css";
function Header() {
    return (
        <div>
            <div>
                <HomeButton />
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/">Home | </NavLink>
                <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/about">About | </NavLink>
                <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/contact">Contact</NavLink>
            </div>
        </div>
    );
}
export default Header;