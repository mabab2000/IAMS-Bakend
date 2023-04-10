import {Link} from 'react-router-dom';
import { AiFillFileText,AiOutlineUser,AiOutlineLogout,AiFillHome } from "react-icons/ai";

import './index.css';
function usermenu(){
    const id=localStorage.getItem('id');
    
    return (
      
        <div className='usermenu'>
            <h2 class="bg-blue-200 text-4xl underline pl-10 font-bold">Dashboard</h2>
        <h3><br/>
        <ul type='circle'>
        <li>
          <Link className='nav-link' to='/Department'>
          <span style={{ display: 'flex', alignItems: 'center' }}> <AiFillHome style={{ marginRight: '5px', color: 'blue' }} /><span> Account homepage</span></span>
            
          </Link>
        </li><br/>
        <li>
          <Link className='nav-link' to={`/Pending_request`}>
          <span style={{ display: 'flex', alignItems: 'center' }}> <AiFillFileText style={{ marginRight: '5px', color: 'blue' }} /><span>Pending request</span></span>
            
            
          </Link>
        </li><br/>
        <li>
          <Link className='nav-link' to={`/All_request`}>
            
            <span style={{ display: 'flex', alignItems: 'center' }}> <AiFillFileText style={{ marginRight: '5px', color: 'blue' }} /><span> All request</span></span>
          </Link>
        </li><br/>
        
        <li>
          <Link className='nav-link' to={`/Departmentprofile`}>
            
            <span style={{ display: 'flex', alignItems: 'center' }}> <AiOutlineUser style={{ marginRight: '5px', color: 'blue' }} /><span> Profile</span></span>
          </Link>
        </li><br/><br/>
        <li>
          <Link className='nav-link' to={`/Departmentlogout?id=${id}`}>
          <span style={{ display: 'flex', alignItems: 'center' }}> <AiOutlineLogout style={{ marginRight: '5px', color: 'red' }} /><span> Logout</span></span>
            
          </Link>
        </li>
      </ul></h3></div>
    )
    }
    export default usermenu