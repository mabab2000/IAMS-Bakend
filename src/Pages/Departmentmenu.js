import {Link} from 'react-router-dom';
import './index.css';
function usermenu(){
    const id=localStorage.getItem('id');
    
    return (
      
        <div className='usermenu'>
            <h2 class="bg-blue-200 text-4xl underline pl-10 font-bold">Dashboard</h2>
        <h3>
        <ul type='circle'>
        <li>
          <Link className='nav-link' to='/Department'>
            Account homepage
          </Link>
        </li><p />
        <li>
          <Link className='nav-link' to={`/Pending_request`}>
            Pending request
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/All_request`}>
            All request
          </Link>
        </li><p />
        
        <li>
          <Link className='nav-link' to={`/Departmentprofile`}>
            Profile
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/Departmentlogout?id=${id}`}>
            Logout
          </Link>
        </li>
      </ul></h3></div>
    )
    }
    export default usermenu