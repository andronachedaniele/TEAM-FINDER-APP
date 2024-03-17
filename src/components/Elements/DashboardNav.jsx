import React from "react";
import { NavLink } from "react-router-dom"; 
import '../Design/DashboardNav.css'
import handleLogout from"../Pages/Dashboard";

const DashboardNav = ( handleLogout ) => {
    return (
        <nav className="dashboard-nav">
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
                    <button className="dashboard-nav" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default DashboardNav;
