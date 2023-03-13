import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Userheader from './Userheader';
import Receptionmenu from './Receptionmenu';
function RequestTable() {
  const token=localStorage.getItem('token');
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
const id=localStorage.getItem('department');
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/trackk` ,{
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <><Userheader/>
    <div className="container">
    <div className="column1"><Receptionmenu /></div>
      <div className="separator"></div>
      <div className="column">
    
    <div>
      <h1><font color='green'> <center> Requests</center></font></h1>
      <p>Requests information</p>
      <table border='1'>
        <thead>
          <tr>
            <th>User_ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Request naem</th>
            <th>Department</th>
            <th>Status</th>
            
            
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              
              <td>{request.user_id}</td>
              <td>{request.first_name}</td>
              <td>{request.last_name}</td>
              <td>{request.req_name}</td>
              <td>{request.dep_name}</td>
              
              <td>{request.status}</td>
             
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div></div></div></>
  );
}

export default RequestTable;
