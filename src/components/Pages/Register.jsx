import React, { useState } from "react";
import "../Design/Register.css"; 

function Register() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [headquartersAddress, setHeadquartersAddress] = useState("");
  const [message, setMessage] = useState("")
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
      organizationName,
      headquartersAddress,
    };

   
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Success: Organization registered successfully");
        console.log("Success:", data);
        
      } else {
        throw new Error(
          data.message || "An error occurred during registration."
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="register-container2">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Sign Up as Organization Administrator</h2>
        {/* Input fields */}
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <input
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-field"
            placeholder="Enter your email address" 
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="organizationName"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            required
            className="input-field"
            placeholder="Enter organization name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="headquartersAddress"
            value={headquartersAddress}
            onChange={(e) => setHeadquartersAddress(e.target.value)}
            required
            className="input-field"
            placeholder="Enter headquarters address"
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
        {/* Display feedback message */}
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}

export default Register;