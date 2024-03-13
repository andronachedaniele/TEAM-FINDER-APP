import React, { useState } from 'react';
import '../Design/RegisterEmployee.css'; // Import your CSS file for styling (if needed)

function EmployeeRegister() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password,
    };

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const referralCode = urlParams.get('referral');
      const url = `http://localhost:5173/empregister`;


      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Success: Account registered successfully");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
            placeholder="E-mail address"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
            placeholder="Password"
          />
        </div>
        <div className="container">
          <button type="submit">Register</button>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </div>
  );
}

export default EmployeeRegister;
