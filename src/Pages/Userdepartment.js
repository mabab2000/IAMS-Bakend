import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './index.css';
import { useLocation } from 'react-router-dom';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';

function UpdateRequest() {
  const params = new URLSearchParams(window.location.search);
  const id= params.get('id');
  
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ depart_id: '' });
  const [response, setResponse] = useState({});
 
  const location = useLocation();

  const token=localStorage.getItem('token');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_role`)
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
   
    axios.put(`http://127.0.0.1:8000/api/assign-user-to-department`, requestData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setResponse(res.data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        setResponse({});
        setError(error.message);
      });
  };

  return (
    <>
      <Userheader/>
     <Adminmenu />
        
          <div className='loginbox'><center>
            <h3 class="text-2xl font-bold">Assign the User to the corresponding department</h3>
            <form onSubmit={handleSubmit}>
              <input type="hidden" id="req_name" name="id" value={`${id}`} onChange={handleChange} required />
              <p/>
              <label>
                Select department:
                <p/>
                <select name='depart_id' required onChange={handleChange}>
                  <option value=''>...Select department... </option>
                  {requests && requests.map(request => (
                    <option value={`${request.id}`}>{request.id}.{request.dep_name}</option>
                  ))}
                </select><br/><br/>
              </label>
              <button type="submit" className='btn-login bg-green-500'>Assign department</button>
            </form>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {response.message && (
              <div>
                <p style={{ color: 'green' }}>{response.message}</p>
                <p>Status: {response.status}</p>
              </div>
            )}</center>
          </div>
       
    </>
  );
}

export default UpdateRequest;
