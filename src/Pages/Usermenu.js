import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLogout, AiOutlineHome, AiFillProfile, AiFillFileAdd } from 'react-icons/ai';
import './index.css';

function UserMenu() {
  const id = localStorage.getItem('id');

  return (
    <div className='usermenu'>
    <h3>
        <ul className="menu-list">
          <li>
            <Link className='nav-link' to='/User'>
            <span style={{ display: 'flex', alignItems: 'center' }}> <AiOutlineHome style={{ marginRight: '5px', color: 'blue' }} /><span> Account homepage</span></span>
            </Link>
          </li>
          <br/>
          <li>
            <Link className='nav-link' to='/Add_request'>
            <span style={{ display: 'flex', alignItems: 'center' }}> <AiFillFileAdd style={{ marginRight: '5px', color: 'blue' }} /><span> Add request</span></span>
            </Link>
          </li>
          <br/>
          <li>
            <Link className='nav-link' to={`/track?id=${id}`}>
            <span style={{ display: 'flex', alignItems: 'center' }}> <AiFillProfile style={{ marginRight: '5px', color: 'blue' }} /><span> Track your application</span></span>
            </Link>
          </li>
          <br/>
          <li>
            <Link className='nav-link' to={`/Userprofile`}>
            <span style={{ display: 'flex', alignItems: 'center' }}>  <AiOutlineUser style={{ marginRight: '5px', color: 'blue' }} /><span> Profile</span></span>
            </Link>
          </li>
          <br/><br/><br/>
          <li className="logout">
            <Link className='nav-link' to={`/Logout?id=${id}`}>
            <span style={{ display: 'flex', alignItems: 'center' }}> <AiOutlineLogout style={{ marginRight: '5px', color: 'red' }} /><span>Logout</span></span>
            </Link>
          </li>
        </ul>
      </h3>
    </div>
  );
}

export default UserMenu;
