// Dashboard.jsx
import React, { useState, useEffect } from "react";
import "../Design/Dashboard.css";
import "../Design/Navbar.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Elements/Navbar";
import EmployeesList from "../Elements/EmployeeList";
import TeamRoleList from "../Elements/TeamRoleList";
import DepartmentsList from "../Elements/DepartmentsList";
import { handleLogout } from "../utils";

const Dashboard = () => {
    const navigate = useNavigate();
    const [showEmployeeList, setShowEmployeeList] = useState(false); 
    const [ShowTeamRoleList, setShowTeamRoleList] = useState(false);
    const [ShowDepartmentsList, setShowDepartmentsList] = useState(false);
    const [authenticated, setAuthenticated] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    const toggleEmployeeList = () => {
        setShowEmployeeList(!showEmployeeList);
    };

    const toggleTeamRoleList = () => {
        setShowTeamRoleList(!ShowTeamRoleList);
    };

    const toggleDepartmentsList = () => {
        setShowDepartmentsList(!ShowDepartmentsList);
    };

    const onLogoutClick = () => {
        handleLogout(navigate); 
    };

    return (
        <div className="dashboard">
            <Navbar handleLogout={onLogoutClick} />
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
                    {ShowTeamRoleList && <TeamRoleList />}
                </div>
                <div className="departments-list-container">
                    <button
                        className={`toggle-button ${ShowDepartmentsList ? 'active' : ''}`}
                        onClick={toggleDepartmentsList}
                    >
                        {ShowDepartmentsList ? "Hide Departments List" : "Show Departments List"}
                    </button>
                    {ShowDepartmentsList && <DepartmentsList />}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
