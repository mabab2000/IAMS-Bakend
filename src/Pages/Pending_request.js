import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Departmentmenu from './Departmentmenu';
import Userheader from './Userheader';
function RequestTable() {
 const token=localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requests, setRequests] = useState([]);

const id=localStorage.getItem('department');
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/all_request_in_department/${id}`,{
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
       <h2><center>Requests in Department</center></h2>
      {requests && requests.length > 0 ? (
       
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Request Name</th>
            <th>Letter</th>
            <th>Recomandation</th>
            <th>Status</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.first_name} {request.last_name}</td>
              <td>{request.req_name}</td>
              <td>{request.letter}</td>
              <td>{request.recom_letter}</td>
              <td>{request.status}</td>
              <td>
                <Link className='nav-link' to={`/Dep_desc?id=${request.id}`}>
                  Make descision
                </Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>No requests pending found in this department.</p>
      )}
    </div></div></div></>
  );
}
    
  


export default RequestTable;
