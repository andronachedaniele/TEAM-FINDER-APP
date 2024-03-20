import { useNavigate } from "react-router-dom";

export const handleLogout = (navigate) => {
    localStorage.removeItem('token');
    navigate('/');
};

export const getNamesForPage = (currentPage, pageSize, names) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return names.slice(startIndex, endIndex);
};
