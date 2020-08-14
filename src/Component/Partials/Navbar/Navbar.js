import React from 'react'
import './navbar.css'
import { FaAlignRight } from 'react-icons/fa';

import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar pt-4 pb-5 navbar-expand-lg">
            <Link className="navbar-brand font-weight-bold headerName" to='/'>RALPH LINCOLN</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span><FaAlignRight /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase pr-5 links" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase pr-5 links" to='/project'>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase pr-5 links" to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar

