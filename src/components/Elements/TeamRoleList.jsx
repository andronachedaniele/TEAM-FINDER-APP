import React, { useState } from "react";
import "../Design/EmployeeList.css";

const TeamRoleList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7;
    const names = ["Adriana", "Radu", "Samuel", "Irina", "Denis", "Laura",  "Veronica", "Stefan", "Onisim", "Sefora","Laurentiu","Golan", "Andrada", "Tudor", "Relu", "Simon"];
    
    const getNamesForPage = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return names.slice(startIndex, endIndex);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if ((currentPage * pageSize) < names.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="employee-list">
            <h2>Team Role List</h2>
            <ul>
                {getNamesForPage().map((name, index) => (
                    <li key={index}>
                        <span>{name}</span>
                        <span className="employee-role">Employee</span>
                    </li>
                ))}
            </ul>
            <footer className="pagination">
                    <button className="small-button" onClick={handlePreviousPage} disabled={currentPage === 1}>&#8249;</button>
                    <span>{currentPage}</span>
                    <button className="small-button" onClick={handleNextPage} disabled={(currentPage * pageSize) >= names.length}>&#8250;</button>
                
            </footer>
            
        </div>
    );
}

export default TeamRoleList;
