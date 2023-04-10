import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function RequestTable() {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token=localStorage.getItem('token');
const id=localStorage.getItem('department');
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_user`,{
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

  if (isLoading) {
    return <><Userheader/>
    <Adminmenu />
      
    <div class="flex justify-center  h-20  font-bold text-blue-800 items-center">Loading...</div>
   </>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <><Userheader/>

    <Adminmenu />

    <div class="overflow-x-auto"><center>
  <table class="min-w-auto divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
      <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
         ID
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          First Name
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Last name
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Gender
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Phone
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Email
        </th>
        <th colspan='3'
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Action
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
    {requests && requests.map(request => (
            <><tr key={request.id}>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {request.id}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{request.first_name}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{request.last_name}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{request.gender}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{request.phone}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{request.email}</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href={`/Role_assign?id=${request.id}`}
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Role
          </a>
        </td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href={`/assign_department?id=${request.id}`}
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Department
          </a>
        </td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href={`delete_user?id=${request.id}`}
            class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
           <span style={{ display: 'flex', alignItems: 'center' }}><AiFillDelete style={{ marginRight: '5px' }} /><span>Delete</span></span>
          </a>
        </td>
      </tr></>
      ))}
    </tbody>
  </table></center>
</div>


   </>
  );
}

export default RequestTable;
