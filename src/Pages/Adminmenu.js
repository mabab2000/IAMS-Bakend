import React from 'react';
import {Link} from 'react-router-dom';
function User() {
    const id=localStorage.getItem('id');
  const dep_id = localStorage.getItem('department');

  return (
    <div className='usermenu'>
            <h2>Dashboard</h2>
        <h3>
        <ul type='circle'>
        <li>
          <Link className='nav-link' to='/Admin'>
            Account homepage
          </Link>
        </li><p />
        <li>
          <Link className='nav-link' to={`/Allusers`}>
            Users
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/Alldepartment`}>
            Department
          </Link>
        </li><p />
        <li>
          <Link className='nav-link' to={`/Allrequest`}>
            Request
          </Link>
        </li><p/>
        
        <li>
          <Link className='nav-link' to={`/Profile`}>
            Profile
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/Adminlogout?id=${id}`}>
            Logout
          </Link>
        </li>
      </ul></h3></div>
    
  );
}

export default User;
