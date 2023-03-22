import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function RequestTable() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
const id=localStorage.getItem('department');
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_role`)
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
    return <><body className='dash'><Userheader/>
    <div className="container">
    <div className="column1"><Adminmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div class="flex justify-center  h-20  font-bold text-blue-800 items-center">Loading...</div>
    </div></div></body></>
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
      <h1><font color='green'> <center> Manage department</center></font></h1>
      <p>Department information</p></center>
      <div className='add_department'>
      <Link className='nav-link' to={`/createdepartment`}>
      <button style={{backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Add new</button>
                </Link>
                </div><p/><br/><center>
      <table  width=''>
        <thead>
          <tr>
            <th>Id</th>
            <th>Department name</th>
            <th>Department description</th>
            <th>Email</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              
              <td>
              {request.id}
                </td>
              
             
              <td>{request.dep_name}</td>
              <td>{request.dep_desc}</td>
              <td>{request.dep_email}</td>
             
              
                <td>
                <Link className='nav-link' to={`/deletedepartment?id=${request.id}`}>
      <button style={{backgroundColor: 'red', color: 'white', padding: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Delete</button>
                </Link></td>
              
            </tr>
          ))}
        </tbody>
      </table></center>
    </div></div></div></body></>
  );
}

export default RequestTable;
