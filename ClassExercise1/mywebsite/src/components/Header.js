import React from 'react';
import NavButton from './NavButton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import logo from "../images/logo.jpg";
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='right'>
                <img src={logo} title='Home' alt="Logo" width="150px" />
                <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosRoundedIcon color="primary" fontSize='tiny' />} className="nav">
                    <NavButton to="/" label="Home" />
                    <NavButton to="/about" label="About" />
                    <NavButton to="/credits" label="Credits" />
                    <NavButton to="/albums" label="Albums" />
                    <NavButton to="/contact" label="Contact" />
                </Breadcrumbs>
            </div>
        </div>
    )
}
export default Header;

