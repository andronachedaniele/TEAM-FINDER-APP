import React, { useState } from 'react';
import Navbar from '../Elements/Navbar';
import '../Design/Settings.css';
import { handleLogout } from '../utils'; 

const Settings = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Current Password:", currentPassword);
        console.log("New Password:", newPassword);
        console.log("Confirm New Password:", confirmNewPassword);
        setEmail('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    return (
        <div>
            <Navbar handleLogout={handleLogout} />
            <div className="settings-container">
                <h2>Settings</h2>
                <form onSubmit={handleSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current Password:</label>
                        <input type="password" id="currentPassword" value={currentPassword} onChange={handleCurrentPasswordChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password:</label>
                        <input type="password" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                        <input type="password" id="confirmNewPassword" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange} />
                    </div>
                    <button type="submit" className="submit-button">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
