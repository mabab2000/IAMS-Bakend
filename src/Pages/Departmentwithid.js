import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function RequestTable() {
  const token=localStorage.getItem('token');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Id = searchParams.get('id');
    
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/department/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const { info } = response.data;
        setRequests(info);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <><Userheader/><body className='dash'>
    <div className="container">
    <div className="column1"><Adminmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div class="flex justify-center  h-20  font-bold text-blue-800 items-center">Loading...</div>
    </div></div></body></>
    ;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <><body className='dash'><Userheader/>
    <div className="container">
    <div className="column1"><Adminmenu /></div>
      <div className="separator"></div>
      <div className="column">
    
    <div><center>
    <h1><font color='green'> <center>{requests && requests.length} Department</center></font></h1>

      <p>Department information</p>
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Email</th>
            <th>Description</th>
            
            
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.dep_name}</td>
              <td>{request.dep_email}</td>
              <td>{request.dep_desc}</td>
              
            </tr>
          ))}
        </tbody>
      </table></center>
    </div></div></div></body></>
  );
}

export default RequestTable;
