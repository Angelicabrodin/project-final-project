import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './nav.css'
import lotus from 'startpage/lotusblack.png'

export const Nav = () => {
    return (
        <container className="nav-container">
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
                        <NavLink to="/Yoga">Yoga</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Meditation">Meditation</NavLink>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </container>
        </container>
    )
}