import React from 'react';
import { bool, func } from 'prop-types';

import './burger.css'

export const Burger = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <div className="styled-burger"
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            open={open} onClick={() => setOpen(!open)} {...props}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </div>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

