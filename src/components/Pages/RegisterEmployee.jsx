import React, { useState } from 'react';
import '../Design/RegisterEmployee.css'; // Import your CSS file for styling (if needed)

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aici poți adăuga cod pentru gestionarea trimiterii datelor către un server backend
    console.log('Submitted:', formData);
    // De asemenea, poți apela aici o funcție pentru a trimite datele către backend
    // fetch sau altă metodă pentru a trimite datele la server
  };

  return (
    <div className="register-container2">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="register-title-box">
            <h1 className="register-title">"Numele firmei"</h1>
          </div>
          <div className="register-title-box">
            <h1 className="register-title">Register user / Sign-up page</h1>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="E-mail address"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Password"
          />
        </div>
        <div className="container">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
