import React, { useState } from "react";
import { getNamesForPage } from '../utils.jsx';

import "../Design/List.css";

const DepartmentsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7;
    const names = ["Adriana", "Radu", "Samuel", "Irina", "Denis", "Laura",  "Veronica", "Stefan", "Onisim", "Sefora","Laurentiu","Golan", "Andrada", "Tudor", "Relu", "Simon"];
    
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
        <div className="list">
            <h2>Departments List</h2>
            <ul>
                {getNamesForPage(currentPage, pageSize, names).map((name, index) => (
                    <li key={index}>
                        <span>{name}</span>
                        <span className="role">Employee</span>
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

export default DepartmentsList;
