import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">Home&nbsp;&nbsp;</Link>
            <Link to="/about">About&nbsp;&nbsp;</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}
export default Header;