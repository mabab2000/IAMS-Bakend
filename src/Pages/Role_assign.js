import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './index.css';
import { useLocation } from 'react-router-dom';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function UpdateRequest() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ user_id: id, role_id: '' });
  const [response, setResponse] = useState({});
 
 
const token=localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/vieww_role`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    const requestId = searchParams.get('id');
    const requestData = { id: requestId, ...formData };
   
    axios.put(`http://127.0.0.1:8000/api/assign_role_to_user`, requestData,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => setResponse(res.data))
      .catch((error) => setError(error.message));
  };

  return (
    <><Userheader/>
    
   <Adminmenu />
    <div className='loginbox'><h1>Assign user to corresponding role</h1>
      <form onSubmit={handleSubmit}>
        <label>
          
          
      <input width='10'type="hidden" id="req_name" name="user_id" value={`${id}`} disabled />
<p/>
            Select role:<p/>
              <select name='role_id' required onChange={(e) => setFormData({ ...formData, role_id: e.target.value })}>
              <option value=''>..Select role...</option>
              {requests && requests.map(request => (
                 
  <option value={`${request.id}`}>{request.id}.{request.name}</option>

          ))}</select><br/><br/>
        </label>
        <button type="submit" className='btn-login bg-green-500'>Assign Role</button>
      </form>
      {error && <p>Error: {error}</p>}
      {response.message && (
        <div>
          <p>{response.message}</p>
          <p>Status: {response.status}</p>
        </div>
      )}
    </div></>
  );
}

export default UpdateRequest;
