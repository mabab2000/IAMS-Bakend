import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Usermenu from './Usermenu';
import Userheader from './Userheader';
import './index.css';

const Form = () => {
  
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const [user_id, setUser_id] = useState('');
  const [formData, setFormData] = useState({
    user_id: '',
    req_name: '',
    file1: null,
    file2: null,
    description: '',
  });

  useEffect(() => {
    setUser_id(id);
  }, [id]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // if it's a file input, use the first file in the array
    });
  };

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('user_id', user_id);
    data.append('req_name', formData.req_name);
    data.append('file1', formData.file1);
    data.append('file2', formData.file2);
    data.append('description', formData.description);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add-request', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setSuccess('Your request has been submitted successfully!');
    } catch (error) {
      console.error(error.response.data); // error response
      if (error.response.data.message.includes('Duplicate entry')) {
        setError('Your request is already received');
        setError(null);
      } else {
        setError(error.response.data.message);
      }
      // set error state to appropriate message
    }
  };

  return (
    <><body className='dash'><Userheader />
    <div className="container">
    <div className="column1"><Usermenu /></div>
      <div className="separator"></div>
      <div className="column">
        <div className='loginbox'>
    <form onSubmit={handleSubmit}>
      <input type="hidden" id="user_id" name="user_id" onChange={handleChange} value={`${user_id}`} required />

      <label htmlFor="req_name">Request Name:</label><br/>
      <input type="text" id="req_name" name="req_name" onChange={handleChange} value={formData.req_name} required />
      <br/>
      <label htmlFor="file1">Motivational letter:</label><br/>
      <input type="file" id="file1" name="file1" onChange={handleChange} required />
      <br/>
      <label htmlFor="file2">Recommendation from university:</label><br/>
      <input type="file" id="file2" name="file2" onChange={handleChange} required />
      <br/>
      <label htmlFor="description">Description:</label><br/><br/>
      <textarea  height='30' id="description" name="description" onChange={handleChange} value={formData.description} required />
<br/><br/>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <button type="submit" className="btn-login bg-green-800">Submit</button>
    </form>
    </div></div></div></body>
    </>
  );
};

export default Form;
