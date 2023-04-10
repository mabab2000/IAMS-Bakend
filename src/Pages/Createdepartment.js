import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../Components/homepage/Header';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function DepartmentForm() {
    const navigate = useNavigate();
  const [depName, setDepName] = useState('');
  const [depEmail, setDepEmail] = useState('');
  const [depDesc, setDepDesc] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      dep_name: depName,
      dep_email: depEmail,
      dep_desc: depDesc,
    };

    axios.post('http://127.0.0.1:8000/api/add_department', data)
      .then(response => {
        setMessage(response.data.message);
        navigate(`/alldepartment`, { replace: true });
        setError(null);
        // Clear the form
        setDepName('');
        setDepEmail('');
        setDepDesc('');
      })
      .catch(error => {
        setError(error.response.data.message);
        setMessage(null);
      });
  };

  return (
    <>
      <Userheader/>
     <Adminmenu />
        
  <div className='restbox'>
    <form onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
        <label htmlFor="dep_name">Department Name</label><br/>
        <input
          type="text"
          id="dep_name"
          value={depName}
          onChange={(event) => setDepName(event.target.value)}
        /><br/>
      
      
        <label htmlFor="dep_email">Department Email</label><br/>
        <input
          type="email"
          id="dep_email"
          value={depEmail}
          onChange={(event) => setDepEmail(event.target.value)}
        /><br/>
      
      
        <label htmlFor="dep_desc">Department Description</label><br/>
        <textarea
          id="dep_desc"
          value={depDesc}
          onChange={(event) => setDepDesc(event.target.value)}
        /><br/><br/>
      
      <button type="submit" class="bg-blue-500 rounded color-white">Add department</button>
    </form></div></>
  );
}

export default DepartmentForm;
