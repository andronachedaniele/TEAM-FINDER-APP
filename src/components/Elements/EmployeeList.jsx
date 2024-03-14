import { useState } from "react";
// eslint-disable-next-line no-useless-escape
import "../Design/EmployeeList.css";


const EmployeesList = () => {
    const [currentPage, setCurrentPage] = useState(1); // State for storing the current page number
    const pageSize = 7; // Number of names per page
    const names = ["Adriana", "Radu", "Samuel", "Irina", "Denis", "Laura",  "Veronica", "Stefan", "Onisim", "Sefora","Laurentiu","Golan", "Andrada", "Tudor", "Relu", "Simon"];


    // Function to get the names for the current page
    const getNamesForPage = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return names.slice(startIndex, endIndex);
    };

    // Function to handle previous page
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to handle next page
    const handleNextPage = () => {
        // Verificați dacă există o pagină următoare înainte de a actualiza currentPage
        if ((currentPage * pageSize) < names.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return ( 
        <div className="content-box">
                    <h2>Employees list</h2>
                    <ul>
                        {getNamesForPage().map((name, index) => (
                            <li key={index}>
                                <span>{name}</span>
                                <span className="employee-text">Employee</span>
                            </li>
                        ))}
                    </ul>
                    {/* Pagination */}
                    <div className="pagination">
                        <button onClick={handlePreviousPage} className="pagination-button small-button" disabled={currentPage === 1}>&#8249;</button>
                        <span>{currentPage}</span>
                        <button onClick={handleNextPage} className="pagination-button small-button" disabled={(currentPage * pageSize) >= names.length}>&#8250;</button>
                    </div>
                </div>
     );
}
 
export default EmployeesList;