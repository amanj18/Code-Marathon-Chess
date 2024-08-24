import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styling/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-logo">MySite</Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/" className="navbar-item button-link">Home</Link></li>
                <li><Link to="/about" className="navbar-item button-link" >Add Player </Link></li>
                <li><Link to="/services" className="navbar-item button-link" >View Player</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
