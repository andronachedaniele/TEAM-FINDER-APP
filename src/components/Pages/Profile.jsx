import React, { useState } from 'react';
import DashboardNav from '../Elements/DashboardNav';
import '../Design/Profile.css';

const Profile = () => {
    const [skills, setSkills] = useState([]);
    const [projects] = useState([
        { name: 'Project X', description: 'Descriere pentru Proiectul X' },
        { name: 'Project Y', description: 'Descriere pentru Proiectul Y' },
        { name: 'Project Z', description: 'Descriere pentru Proiectul Z' }
    ]);

    const addSkill = (newSkill) => {
        if (newSkill.trim() !== '') { 
            setSkills([...skills, newSkill]);
        }
    };

    const deleteSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    return (
        <div>
            <DashboardNav />
            <div className="welcome-section">
                <h2>Welcome to your profile!</h2>
            </div>
            <div className="profile-container">
                <img src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg" alt="Profil" className="profile-image" />
                <div className="skill-section">
                    <h2 className="skill-section-heading">My Skills</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const newSkill = e.target.elements.skill.value;
                        addSkill(newSkill);
                        e.target.reset();
                    }} className="skill-form">
                        <input type="text" name="skill" placeholder="Write a new skill" className="skill-input" />
                        <button type="submit" className="skill-button">Add skill</button>
                    </form>
                    <ul className="skill-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                <span>{skill}</span>
                                <button onClick={() => deleteSkill(index)} className="delete-button">Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="project-section">
                    <h2 className="project-section-heading">Projects</h2>
                    <div className="project-list">
                        {projects.map((project, index) => (
                            <div key={index} className="project-item">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
