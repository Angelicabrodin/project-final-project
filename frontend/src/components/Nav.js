
// Burger experiment:
// import React, { useState, useRef } from 'react'
// import { useOnClickOutside } from './navbar/Hooks'
// import { Burger } from './navbar/Burger'
// import { Menu } from './navbar/Menu'
// import FocusLock from 'react-focus-lock'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './css/nav.css'
import lotus from 'startpage/lotusblack.png'

// Burger experiment
// import { Burger } from './navbar/Burger'
// import burger from 'components/burger.png'

export const Nav = () => {
    // Burger experiment
    // const [open, setOpen] = useState(false);
    // const node = useRef();
    // const menuId = "main-menu";

    // useOnClickOutside(node, () => setOpen(false));

    return (
        <container className="nav-container">

            {/* // Burger experiment */}
            {/* <div ref={node}>
                <FocusLock disabled={!open}>
                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                </FocusLock>
            </div> */}

            <div className="burger-container">
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
            <div className="nav-wrapper">
                <img className="nav-img" src={lotus} alt="Lotus" />
            </div>
            <container className="links-container">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/yoga">Yoga</NavLink>
                    </li>
                    <li>
                        <NavLink to="/meditation">Meditation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/happylist">Happy List</NavLink>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </container>
        </container>
    )
}