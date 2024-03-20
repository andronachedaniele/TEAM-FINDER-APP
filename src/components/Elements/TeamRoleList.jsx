import React, { useState } from "react";
import "../Design/List.css";

const TeamRoleList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const [roles, setRoles] = useState([]);
    const [newName, setNewName] = useState('');
    const [newRole, setNewRole] = useState('');
    const employeeNames = ["Andrei", "Ștefan", "Iulia", "Elena", "Osea", "Dan", "Laurențiu"];

    const getNamesForPage = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return roles.slice(startIndex, endIndex);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if ((currentPage * pageSize) < roles.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleAddRole = () => {
        if (newName.trim() !== '' && newRole.trim() !== '') {
            setRoles([...roles, { name: newName.trim(), role: newRole }]);
            setNewName('');
            setNewRole('');
        }
    };

    const handleDeleteRole = (index) => {
        const updatedRoles = [...roles];
        updatedRoles.splice(index, 1);
        setRoles(updatedRoles);
    };

    return (
        <div className="list">
            <div className="add-role-container" >
                <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="Write the role"
                    className="small-input"
                />
                <select value={newName} onChange={(e) => setNewName(e.target.value)}>
                    <option value="">Select an employee</option>
                    {employeeNames.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
                <button className="small-button" onClick={handleAddRole}>Add role</button>
            </div>
            <div className="button-margin"></div>

            <ul>
                {getNamesForPage().map((role, index) => (
                    <li key={index}>
                        <span>{role.name}</span>
                        <span className="role">{role.role}</span>
                        <button className="delete-button" onClick={() => handleDeleteRole(index)}>Delete</button>
                    </li>
                    
                ))}
            </ul>
            {roles.length > pageSize && (
                <footer className="pagination">
                    <button className="small-button" onClick={handlePreviousPage} disabled={currentPage === 1}>&#8249;</button>
                    <span>{currentPage}</span>
                    <button className="small-button" onClick={handleNextPage} disabled={(currentPage * pageSize) >= roles.length}>&#8250;</button>
                </footer>
            )}
        </div>
    );
}

export default TeamRoleList;
