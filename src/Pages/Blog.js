import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Header from '../Components/homepage/Header';

const Blog = () => {
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setError('The password confirmation does not match.');
      return;
    }
    const data = new FormData();
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('gender', formData.gender);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('password_confirmation', formData.password_confirmation);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add_user', data);
      setSuccess(true);
      setSuccessMessage(response.data.message);
      
      if (response.data.redirect_url) {
        const { message, status, redirect_url } = response.data;
        
        window.location.href = response.data.redirect_url;
      }
      // Clear form data
      setFormData({
        first_name: '',
        last_name: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
      });
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message);
      if (error.response.data.message.includes('Duplicate entry')) {
        setError('Email already exist');
      }
    }
  }
  


  return (
    <>
    
    
    <div style={{position: 'relative'}}>
      <Header style={{position: 'absolute', zIndex: '-1'}} />
    <div className='loginbox'>
    <form onSubmit={handleSubmit}>
        
      <label htmlFor="req_name">First Name:</label><br/>
      <input type="text" id="req_name" placeholder='First name' name="first_name" onChange={handleChange} value={formData.first_name} required />
      <br/>
      <label htmlFor="req_name">Last Name:</label><br/>
      <input type="text" id="req_name" placeholder='Last name' name="last_name" onChange={handleChange} value={formData.last_name} required />
      <br/>
      <label htmlFor="gender">Gender:</label><br/>
<select name="gender" value={formData.gender} onChange={handleChange} required>
  <option value="">Select gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select><br/>

      <label htmlFor="req_name">Phone Name:</label><br/>
      <input type="text" id="req_name" placeholder='Mobile phone'name="phone" onChange={handleChange} value={formData.phone} maxLength={10} required />

      <br/>
      <label htmlFor="req_name">Email:</label><br/>
      <input type="email" id="req_name" placeholder='Enter your email' name="email" onChange={handleChange} value={formData.email} required />
      <br/>
      <label htmlFor="req_name">Password:</label><br/>
      <input type="password" id="req_name" placeholder='Password'name="password" onChange={handleChange} value={formData.password} required />
      <br/>
      <label htmlFor="req_name">Confirm Password:</label><br/>
      <input type="password" id="req_name"placeholder='Confirm password' name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} required />
      <br/><br/>


     
      {successMessage && <div className="success">{successMessage}</div>}
      {error && <div className="error">{error}</div>}

      
      <button type="submit" className="btn-login bg-green-800" >Sign up</button>
    </form>
    </div>
    </div>
    </>)
}

export default Blog





