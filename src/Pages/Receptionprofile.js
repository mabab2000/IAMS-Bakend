import React, { useState, useEffect } from 'react';

import Receptionmenu from './Receptionmenu';
import Userheader from './Userheader';
function Track() {
  const token = localStorage.getItem('token');
  const [requests, setRequests] = useState([]);
  
  const id = localStorage.getItem('id');
  const role = localStorage.getItem('role');
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/view_user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => setRequests(data.info));
  }, []);
  

  return (
    <><Userheader />
    <div className="container">
    <div className="column1"><Receptionmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div>
      <h1>Your profile information</h1>
      {requests && requests.map(request => (
            <tr key={request.id}>
             <h3> Your unique ID:{request.id}<p/>
              First name:{request.first_name}<p/>
              Lastname: {request.last_name}<p/>
              Gender:{request.gender}<p/>
              Phone:{request.phone}<p/>
              Email:{request.email}<p/>
              Role:{role}</h3>
            </tr>
            
          ))}
          
      
    </div></div></div></>
  );
}

export default Track;
