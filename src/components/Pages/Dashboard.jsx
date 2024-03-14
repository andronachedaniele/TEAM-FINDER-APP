import React, { useState } from "react";
import "../Design/Dashboard.css";
import { useNavigate } from "react-router-dom";
import EmployeesList from "../Elements/EmployeeList";

const Dashboard = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [showEmployeeList, setShowEmployeeList] = useState(false); // State to control the visibility of the employee list

    // Logout function
    const handleLogout = () => {
        // Clear the token from storage
        localStorage.removeItem('token');

        // Redirect to login page or home page
        navigate('/');
    };

    // Function to toggle the visibility of the employee list
    const toggleEmployeeList = () => {
        setShowEmployeeList(!showEmployeeList);
    };

    return (
        <div className="dashboard">
            <nav className="dashboard-nav">
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/settings">Settings</a></li>
                    {/* Update the Logout list item */}
                    <li><button className="dashboard-nav" onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
            <div className="welcome-section">
                <h1>Welcome, User!</h1>
                <p>This is your dashboard.</p>
            </div>
            <div className="content-section">
                
            <div className="employee-list-container">
    {/* Button to show/hide the employee list */}
    <button className={`toggle-button ${showEmployeeList ? 'active' : ''}`} onClick={toggleEmployeeList}>
        {showEmployeeList ? "Hide Employee List" : "Show Employee List"}
    </button>
    {/* Conditional rendering of the EmployeeList component */}
    {showEmployeeList && <EmployeesList />}
</div>
            </div>
        </div>
    );
}

export default Dashboard;
