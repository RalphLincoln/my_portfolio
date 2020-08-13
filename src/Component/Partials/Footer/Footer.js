import React from 'react'

// IMPORTING ICONS FROM REACT ICONS
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

// IMPORTING CUSTOM CSS
import './footer.css'


const Footer = () => {
    return (
        <div className='text-center mt-3'>
            <div className='p-3'>
                <a className='pr-3' href="https://twitter.com/ialaneme"><FaTwitter /></a>
                <a className='pr-3' href="https://www.linkedin.com/in/raphael-alaneme-26a64b18b/"><FaLinkedinIn /></a>
                <a href="https://github.com/RalphLincoln"> <FaGithub /> </a>
            </div>
            <p>Created © 2020 | Ralph_Lincoln</p>
        </div>
    )
}

export default Footer
