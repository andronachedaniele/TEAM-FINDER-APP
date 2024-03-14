import React from "react";
import "../Design/Dashboard.css";
import { useNavigate } from "react-router-dom";
import EmployeesList from "../Elements/EmployeeList";

const Dashboard = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Logout function
    const handleLogout = () => {
        // Clear the token from storage
        localStorage.removeItem('token');

        // Redirect to login page or home page
        navigate('/');
    };

    return (
        <div className="dashboard">
            <nav className="dashboard-nav">
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/settings">Settings</a></li>
                    {/* Update the Logout list item */}
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
            <div className="welcome-section">
                <h1>Welcome, User!</h1>
                <p>This is your dashboard.</p>
            </div>
            <div className="content-section">
                <div className="content-box">Activate employee sign-up link</div>
                <div className="content-box">Content Box 2</div>
                <EmployeesList/>
                <div className="content-box">Content Box 3</div>
            </div>
        </div>
    );
}

export default Dashboard;
