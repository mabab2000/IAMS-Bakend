import {Link} from 'react-router-dom';
import './index.css';
function usermenu(){
    const id=localStorage.getItem('id');
    
    return (
        <div className='usermenu'>
            <h2>Dashboard</h2>
        <h3>
        <ul type='circle'>
        <li>
          <Link className='nav-link' to='/Reception'>
            Account homepage
          </Link>
        </li><p />
        <li>
          <Link className='nav-link' to='/Pending'>
            View Pending request
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/Allrequestinreception`}>
            All  Request
          </Link>
        </li><p />
        
        <li>
          <Link className='nav-link' to={`/Receptionprofile`}>
            Profile
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/recepationlogout?id=${id}`}>
            Logout
          </Link>
        </li>
      </ul></h3></div>
    )
    }
    export default usermenu