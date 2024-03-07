import React, { useState } from 'react';
import '../Design/Login.css'; 
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting', email, password);
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
            <Link to="/register-employee">
              <button type="submit">
                Log in
              </button>
            </Link>
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
