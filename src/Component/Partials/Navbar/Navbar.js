import React from 'react'
import './navbar.css'
import { FaAlignRight } from 'react-icons/fa';


function Navbar() {
    return (
        <nav className="navbar pt-4 pb-5 navbar-expand-lg">
            <a className="navbar-brand font-weight-bold headerName" href="#">RALPH LINCOLN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span><FaAlignRight /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-uppercase pr-5 links" href="#">projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase pr-5 links" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar

