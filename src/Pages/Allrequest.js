import axios from 'axios';

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function RequestTable() {
  const token=localStorage.getItem('token');
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
const id=localStorage.getItem('department');
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_request` ,{
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
    
    <div>
     <center>
    
      <h1><font color='green'> <center> Requests</center></font></h1>
      <p>Requests information</p>
      <table border='1'>
        <thead>
          <tr>
            <th>User</th>
            <th>Department</th>
            <th>Application name</th>
            <th>Motivational letter</th>
            <th>Recomendation letter</th>
            <th>Status</th>
            
            
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              
              <td><Link class="text-blue-800"className='nav-link' to={`/Userwithid?id=${request.user_id}`}>
              {request.user_id}
                </Link></td>
              <td><Link class="text-blue-800"className='nav-link' to={`/Departmentwithid?id=${request.depart_id}`}>
              {request.depart_id}
                </Link></td>
             
              <td>{request.req_name}</td>
              <td>{request.letter}</td>
              <td>{request.recom_letter}</td>
              <td>{request.status}</td>
             
              
              
            </tr>
          ))}
        </tbody>
      </table>
      </center>
      </div>
    </div></div></body></>
  );
}

export default RequestTable;
