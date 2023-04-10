import React, { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import Adminmenu from './Adminmenu';
import Userheader from './Userheader';
function Track() {
  const token = localStorage.getItem('token');
  const [requests, setRequests] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
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
   <Adminmenu />
    
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
          
      
    </div></>
  );
}

export default Track;
