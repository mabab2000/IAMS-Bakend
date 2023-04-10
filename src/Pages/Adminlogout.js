import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Adminmenu from './Adminmenu';
import Userheader from './Userheader';
import'./index.css';
function Logout() {
  const [logoutMsg, setLogoutMsg] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem('token');

    fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        navigate('/login', { replace: true });
      } else {
        throw new Error('Logout failed');
      }
    })
    .catch(error => {
      console.log(error);
      setLogoutMsg('Logout failed');
    });
  }

  return (
    <>
      <Userheader />
     
          <Adminmenu />
       
          
      <h1>{logoutMsg}</h1><div className="loginbox">
      <h2><font color='red'><center>Sign out information</center></font></h2>
<h3><center>By logging out you will have better insight into who is accessing your  your accounts as only those with the password will be able to log in. Alternatively, by not logging out you have less control over who uses the account and what they see</center></h3>
<p /><br /><br /><br /><br /><font color='blue'><center>Click logout button bellow to singn out</center></font><br /><br /> <center>
   

      <button onClick={handleLogout} style={{backgroundColor: 'red',width:'30', color: 'white', padding: '15px', border: 'none', borderRadius: '3px', cursor: 'pointer'}}>Logout</button>
                
   </center></div>
     
    </>
  );
}
export default Logout;
