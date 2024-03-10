import React, { useState } from 'react';
import '../Design/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the token is returned in the response
        localStorage.setItem('token', data.token); // Save token
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="border-container">
      <div className="login-container">
        <div className="left-side">
          <h2>Welcome</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur eros eros,
             vulputate ultrices massa accumsan vitae. Curabitur facilisis nisl in quam vestibulum,
              sit amet iaculis ipsum malesuada. Aenean consectetur dictum quam, ac faucibus mi sagittis sit amet.</p>
        </div>
        <div className="right-side">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
          </form>
          <div className="register-container">
            <p>Do you wish to use our software in your company?</p>
            <Link to="/register-organization">
              <button>Register now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
