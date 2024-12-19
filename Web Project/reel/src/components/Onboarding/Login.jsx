import React, {useState} from 'react';
import './Login.css';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://web-776724771357.us-central1.run.app/login', { email, password });
      const { token } = response.data;

      // Save the token in local storage or state
      localStorage.setItem('token', token);

      const decodedToken = jwtDecode(token);
      const userData = {
        id: decodedToken.userId,
        token
      };

      // Set user state
      setUser(userData);

      // Redirect or update UI as needed
      alert("You have successfully loged in");
      // window.location.href = '/profile'; 
      navigate('/profile');

    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-8 mt-5">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#v">password?</a>
          </p>
        </div>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </div>
    </div>
  )
}
