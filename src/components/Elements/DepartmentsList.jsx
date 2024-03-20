import React, { useState } from "react";
import { getNamesForPage } from '../utils.jsx';

import "../Design/List.css";

const DepartmentsList = () => {
    const [departments, setDepartments] = useState([
        { name: 'Department A', role: 'Software Development' },
        { name: 'Department B', role: 'Infrastructure and Operations' },
        { name: 'Department C', role: 'Design and User Experience' },
        { name: 'Department D', role: 'Management and Administration' },
        { name: 'Department E', role: 'Sales and Marketing' },
        { name: 'Department F', role: 'Research and Development' },
        { name: 'Department G', role: 'Support and Customer Services' },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(departments.length / pageSize);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * pageSize;
    const visibleDepartments = departments.slice(startIndex, startIndex + pageSize);

    return (
        <div className="list">
            <div className="project-list">
                {visibleDepartments.map((department, index) => (
                    <div key={index} className="project-item">
                        <h3>{department.name}</h3>
                        <p>{department.role}</p>
                    </div>
                ))}
            </div>

            <footer className="pagination">
                <button className="small-button" onClick={handlePreviousPage} disabled={currentPage === 1}>&#8249;</button>
                <span>{currentPage}</span>
                <button className="small-button" onClick={handleNextPage} disabled={currentPage * pageSize >= departments.length}>&#8250;</button>
            </footer>
        </div>
    );
}

export default DepartmentsList;
