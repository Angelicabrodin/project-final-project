import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
// import styled from 'styled-components/macro'

import './css/meditation.css'

export const Meditation = () => {
    return (
        <BrowserRouter>
            <div className="meditation-container">
                <div className="meditation-list">
                    <ul>
                        <li><a href={'https://yogobe.com/se/register/account'}>Yogobe</a></li>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                        <li>bla bla bla</li>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    )
}