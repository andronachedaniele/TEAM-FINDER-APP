import React from "react";
import { NavLink } from "react-router-dom"; 
import '../Design/Navbar.css'
import PropTypes from "prop-types"; 

const Navbar = ( {handleLogout} ) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/dashboard" activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName="active-link">Settings</NavLink>
                </li>
                <li>
                    <button className="navbar" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};
Navbar.propTypes = {
    handleLogout: PropTypes.func.isRequired
};

export default Navbar;
