import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Departmentmenu from './Departmentmenu';
import Userheader from './Userheader';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Assign() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
const token=localStorage.getItem('token');
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { dep_dsc: status };

    axios
      .put(`http://127.0.0.1:8000/api/dep-descision/${id}`, data,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response.data);
        navigate('/Pending_request', { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setMessage('Failed to update request status');
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  return (
    <><Userheader/>
    <div className="container">
    <div className="column1"><Departmentmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div>
    <div>
      <h2>Assign Request</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='status'>Request Status:</label>
          <select id='status' name='dep_dsc' value={status} onChange={handleInputChange} required>
          <option value=''>..select descision...</option>
  <option value='Accepted'>Accepted</option>
  <option value='Not accepted'>Not Accepted</option>
</select>

        </div>
        <button type='submit'>Submit</button>
      </form>
    </div> </div></div></div></>
  );
}

export default Assign;
