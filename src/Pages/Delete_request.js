import axios from 'axios';
import Userheader from './Userheader';
import Receptionmenu from './Receptionmenu';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';

function Track() {
  const [user, setUser] = useState(null);
  const [deletionResult, setDeletionResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const deleteUser = () => {
    axios.get(`http://127.0.0.1:8000/api/delete_request/${id}`)
      .then(response => {
        console.log(response.data);
        setUser(null); // update the user state to null after deletion
        navigate('/pending', { replace: true });
        setDeletionResult('User deleted successfully.');
      })
      .catch(error => {
        console.error(error);
        setDeletionResult(`An error occurred while deleting the user: ${error.message}`);
      });
  };

  return (
    <>
      <Userheader />
      <div className="container">
        <div className="column1"><Receptionmenu /></div>
        <div className="separator"></div>
        <div className="column">
          <center>
            <h2><font color='blue'>You can remove permanent the request</font></h2>
            {deletionResult && <p>{deletionResult}</p>}
            <button onClick={deleteUser}>Delete User</button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Track;
