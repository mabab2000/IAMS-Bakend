import React, { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import './index.css';
import Usermenu from './Usermenu';
import Userheader from './Userheader';
function Track() {
  const token = localStorage.getItem('token');
  const [requests, setRequests] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/track/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => setRequests(data.info));
  }, []);
  

  return (
    <><body className='dash'><Userheader />
    <div className="container">
    <div className="column1"><Usermenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div>
      <center><h1>Your Requests processing</h1>
      <ul>
        {requests.map(request => (
            <table border='1'>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Request name</th>
                <th>Department name</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>{request.first_name}</td>
                <td>{request.last_name}</td>
                <td>{request.req_name}</td>
                <td>{request.dep_name}</td>
                <td>{request.status}</td>
              </tr>
            </table>
          
        ))}
      </ul>
      </center>
    </div></div></div></body></>
  );
}

export default Track;
