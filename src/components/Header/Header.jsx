import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <ul className="navlist">
                    <li><a href="/main_page" className="nav-link">Home</a></li>
                    <li><a href="/about" className="nav-link">About</a></li>
                    <li><a href="/services" className="nav-link">Services</a></li>
                    <li><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header