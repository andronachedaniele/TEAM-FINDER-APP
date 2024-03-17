import React, { useState, useEffect } from "react";
import "../Design/Dashboard.css";
import "../Design/DashboardNav.css";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../Elements/DashboardNav";
import EmployeesList from "../Elements/EmployeeList";
import TeamRoleList from "../Elements/TeamRoleList";

const Dashboard = () => {
    const navigate = useNavigate();
    const [showEmployeeList, setShowEmployeeList] = useState(false); 
    const [ShowTeamRoleList, setShowTeamRoleList] = useState(false);
    const [authenticated, setAuthenticated] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const toggleEmployeeList = () => {
        setShowEmployeeList(!showEmployeeList);
    };
    const toggleTeamRoleList = () => {
        setShowTeamRoleList(!ShowTeamRoleList);
    }

    return (
        <div className="dashboard">
            <DashboardNav handleLogout={handleLogout} />
            <div className="welcome-section">
                <h1>Welcome, User!</h1>
                <p>This is your dashboard.</p>
            </div>
            <div className="content-section">
                <div className="employee-list-container">
                    <button
                        className={`toggle-button ${showEmployeeList ? 'active' : ''}`}
                        onClick={toggleEmployeeList}
                    >
                        {showEmployeeList ? "Hide Employee List" : "Show Employee List"}
                    </button>
                    {showEmployeeList && <EmployeesList />}
                </div>
                <div className="team-roles-container">
                    <button
                        className={`toggle-button ${ShowTeamRoleList ? "active" : ""}`}
                        onClick={toggleTeamRoleList}
                    >
                        {ShowTeamRoleList ? "Hide Team Role List" : "Show Team Role List"}
                    </button>
                    {ShowTeamRoleList && <TeamRoleList/>}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
