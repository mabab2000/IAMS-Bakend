import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
function User() {
    const id=localStorage.getItem('id');
  const dep_id = localStorage.getItem('department');

  return (
    <body className='dash'>
    <div className='usermenu'>
            <h2 class="bg-blue-200 text-4xl underline pl-10 font-bold">Dashboard</h2>
        
        <ul type='circle'>
        
          <Link className='nav-link' to='/Admin'>
            <li>Account homepage </li>
          </Link>
        <p />
        
          <Link className='nav-link' to={`/Allusers`}>
          <li> Users</li>
          </Link>
        <p/>
        
          <Link className='nav-link' to={`/Alldepartment`}>
          <li>Department</li>
          </Link>
        <p />
        
          <Link className='nav-link' to={`/Allrequest`}>
          <li> Request</li>
          </Link>
        <p/>
        
       
          <Link className='nav-link' to={`/Profile`}>
          <li> Profile</li>
          </Link>
        <p/>
       <br/><br/>
          <Link className='nav-link' to={`/Adminlogout?id=${id}`}>
          <li> Logout</li>
          </Link>
        
      </ul></div>
    </body>
  );
}

export default User;
