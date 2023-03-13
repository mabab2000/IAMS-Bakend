import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Header from '../Components/homepage/Header';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      });
      const { last_name,first_name,token,role, id, department } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('role', role);
      localStorage.setItem('department', department);
      localStorage.setItem('first_name', first_name);
      localStorage.setItem('last_name', last_name);
      if (role === 'student') {
        window.location.href = response.data.redirect_url;
      } else if (role === 'department') {
        window.location.href = response.data.redirect_url_department;
      } else if (role === 'receptionist') {
        window.location.href = response.data.redirect_url_reception;
      } else if (role === 'admin') {
        window.location.href = response.data.redirect_url_admin;
      } else {
        setSuccessMessage(' ');
      }
    } catch (error) {
      setSuccessMessage('Invalid login credentials');
    }
  }

  return (
    <div style={{position: 'relative'}}>
      <Header style={{position: 'absolute', zIndex: '-1'}} />
      <div className='loginbox'>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label><br /><br/>
          <div>
            <input type="submit" value="Log in" /> 
            <a href='/check_email'>
              <font color='blue'>Forget password?</font>
            </a>
          </div>
          {successMessage && <div className='error-message'>{successMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login
