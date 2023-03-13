import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Userheader from './Userheader';
import Receptionmenu from './Receptionmenu';
function UpdateRequest() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ depart_id: '' });
  const [response, setResponse] = useState({});
 const token=localStorage.getItem('token');
  const location = useLocation();
  


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
   
    axios.put(`http://127.0.0.1:8000/api/assign-request-to-department/${requestId}`, requestData,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

      .then((res) => setResponse(res.data))
      .catch((error) => setError(error.message));
  };

  return (
    <><Userheader/>
    <div className="container">
    <div className="column1"><Receptionmenu /></div>
      <div className="separator"></div>
      <div className="column">
    <div><h1>Assign the request to the corresponding department</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Department ID:<p/>
          
            
              <select name='depart_id' required onChange={handleChange}>
              {requests && requests.map(request => (
  <option value={`${request.id}`}>{request.id}.{request.dep_name}</option>

          ))}</select>
        </label>
        <button type="submit">Assign Request</button>
      </form>
      {error && <p>Error: {error}</p>}
      {response && response.message && (
  <div>
    <p>{response.message}</p>
    <p>Status: {response.status}</p>
  </div>
)}
    </div></div></div></>
  );
}

export default UpdateRequest;
