import React, { useState } from 'react';
import '../Design/Register.css';

function Register() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [headquartersAddress, setHeadquartersAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here
  };

  return (
    <div>
        
    <div className="register-container2">
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        {/* Add input fields for name, address, password, organization name, headquarters address */}
        <h2 color='white'> Sign Up as Organization Administrator</h2> 
        <div className="form-group">
          <label htmlFor="name" className="label-with-placeholder">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
              placeholder="Enter your name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="address" className="label-with-placeholder">
            
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="input-field"
              placeholder="Enter your address"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label-with-placeholder">
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
              placeholder="Enter your password"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="organizationName" className="label-with-placeholder">
            
            <input
              type="text"
              id="organizationName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              required
              className="input-field"
              placeholder="Enter organization name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="headquartersAddress" className="label-with-placeholder">
            <input
              type="text"
              id="headquartersAddress"
              value={headquartersAddress}
              onChange={(e) => setHeadquartersAddress(e.target.value)}
              required
              className="input-field"
              placeholder="Enter headquarters address"
            />
          </label>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
    </div>
  );
}

export default Register;
