import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom'

import './menu.css'



export const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <container className="styled-menu"
            open={open}
            aria-hidden={!isHidden} {...props}>
            <Link to="/home" tabIndex={tabIndex}>Home</Link>
            <Link to="/home" tabIndex={tabIndex}>Yoga</Link>
            <Link to="/meditation" tabIndex={tabIndex}>Meditation</Link>
            <Link to="/happylist" tabIndex={tabIndex}>Happy List</Link>
            <Link to="/" tabIndex={tabIndex}>Log out</Link>
        </container>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}