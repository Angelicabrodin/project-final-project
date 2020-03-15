import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import lotus from 'startpage/lotusblack.png'
import './css/nav.css'
// import HamburgerMenu from '/navbar/HamburgerMenu'


export const Nav = () => {

    return (
        <container className="nav-container">
            {/* <HamburgerMenu /> */}
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