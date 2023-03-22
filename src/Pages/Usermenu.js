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
          <Link className='nav-link' to='/User'>
            Account homepage
          </Link>
        </li><p />
        <li>
          <Link className='nav-link' to='/Add_request'>
            Add request
          </Link>
        </li><p />
        <li>
          <Link className='nav-link' to={`/track?id=${id}`}>
            Track your application
          </Link>
        </li><p />
        
        <li>
          <Link className='nav-link' to={`/Userprofile`}>
            Profile
          </Link>
        </li><p/>
        <li>
          <Link className='nav-link' to={`/Logout?id=${id}`}>
            Logout
          </Link>
        </li>
      </ul></h3></div>
    )
    }
    export default usermenu