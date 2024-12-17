import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Registration.css';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import axios from 'axios';

export default function Registration() {

  
    const [formData, setFormData] = useState({
        firstname:'',
        secondname: '',
        email: '',
        password: '',
        age: ''
        
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    function handleChange(e){
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
       }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://web-776724771357.us-central1.run.app/reg', formData);
            console.log('Registration successful');
            setError('');  // Reset error on success
            navigate('/Login');  // Redirect to login page
        } catch (error) {
            console.error('Registration failed');
            console.error('Registration failed', error.response.data);
            setError(error.response.data.message);  // Set error message
        }
    };


    
  return (
    <div>
      <div className="Reg-form-container">
      <form className="Reg-form" onSubmit={handleSubmit}>
        <div className="Reg-form-content">
          <h3 className="Reg-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <Row>
           <Col>
          <Form.Control placeholder="First name" value={formData.firstname} onChange={handleChange} name="firstname" />
          </Col>
        <Col>
          <Form.Control placeholder="Last name" value={formData.secondname} onChange={handleChange} name="secondname"/>
        </Col>
      </Row>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={formData.email} onChange={handleChange}
              name="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={formData.password} onChange={handleChange}
              name="password"
            />
          </div>
          <div className="d-grid gap-8 mt-5">
            <button type="submit" className="btn btn-danger">
              Register
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#v">password?</a>
          </p>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  )
}

