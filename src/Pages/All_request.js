import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Userheader from './Userheader';
import Departmentmenu from './Departmentmenu';
function RequestTable() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token=localStorage.getItem('token');
const id=localStorage.getItem('department');
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/request_in_department/${id}`,{
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
    <div className="column1"><Departmentmenu /></div>
      <div className="separator"></div>
      <div className="column">
    
    <div>
      <h2>Requests in Department</h2>
      <p>Requests in your department</p>
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Request Name</th>
            <th>Department</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.first_name} {request.last_name}</td>
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
