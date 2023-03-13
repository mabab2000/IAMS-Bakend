import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../Components/homepage/Header';

function ResetPassword() {
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    setEmail(email);
    
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState([]);

  const resetPassword = async (email, password, password_confirmation) => {
    try {
      const response = await axios.put('http://127.0.0.1:8000/api/forgot', {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      });
      console.log(response.data);
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error(error);
      const errors = [];
      if (error.response.data.errors) {
        Object.values(error.response.data.errors).forEach((errorArray) => {
          errorArray.forEach((errorMessage) => {
            errors.push(errorMessage);
          });
        });
      } else {
        errors.push('Failed to reset password. Please try again.');
      }
      return { success: false, message: errors };
    }
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await resetPassword(email, password, passwordConfirmation);
    if (response.success) {
      
      navigate(`/Login`, { replace: true });
    } else {
      const errors = response.message;
      setMessage(errors.map((error, index) => ({ success: false, message: error, key: index })));
      console.log('fail');
    }
  };
  
  return (
    <div style={{position: 'relative'}}>
    <Header style={{position: 'absolute', zIndex: '-1'}} />
  <div className='restbox'>
      <h2>Create new Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter new password
          <input type="hidden" name='email' value={`${email}`} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <p/><p/><button type="submit">Submit</button>
      </form>
      {message.map((msg) => (
  <p key={msg.key} className={msg.success ? 'success' : 'error'}>
    {msg.message}
  </p>
))}
    </div> </div>
  );
}

export default ResetPassword;
