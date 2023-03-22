import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Userheader from './Userheader';
import Receptionmenu from './Receptionmenu';
function RequestTable() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token=localStorage.getItem('token');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reception_view_pending_request', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const { id } = response.data;
        localStorage.setItem('id', id);
        setRequests(response.data.request);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <body className='dash'><Userheader/>
    <div className="container">
    <div className="column1"><Receptionmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div class="flex justify-center  h-20  font-bold text-blue-800 items-center">Loading...</div>
    </div></div></body>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <><body className='dash'><Userheader/>
    <div className="container">
    <div className="column1"><Receptionmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div><center>
      <h2>Requests in Reception</h2>
      {requests && requests.length > 0 ? (
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Motivational letter</th>
            <th>Recom-letter</th>
            <th>Status</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.first_name} {request.last_name}</td>
              <td>{request.letter}</td>
              <td>{request.recom_letter}</td>
              <td>{request.status}</td>
              <td>
                
                <Link className='nav-link' to={`/Assign?id=${request.id}`}>
      <button style={{backgroundColor: 'green', color: 'white', padding: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Assign</button>
                </Link>
              </td>
              <td>
                
                <Link className='nav-link' to={`/Delete_request?id=${request.id}`}>
      <button style={{backgroundColor: 'red', color: 'white', padding: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Reject</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>No requests pending found on reception.</p>
      )}</center>
    </div></div></div></body></>
  );
}

export default RequestTable;
