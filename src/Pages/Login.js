import React, { useState } from 'react';
import axios from 'axios';
import image1 from './image1.PNG';
import './index.css';
import Header from '../Components/homepage/Header';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      });
      const { last_name,first_name,token,role, id, department } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('role', role);
      localStorage.setItem('department', department);
      localStorage.setItem('first_name', first_name);
      localStorage.setItem('last_name', last_name);
      if (role === 'student') {
        window.location.href = response.data.redirect_url;
      } else if (role === 'department') {
        window.location.href = response.data.redirect_url_department;
      } else if (role === 'receptionist') {
        window.location.href = response.data.redirect_url_reception;
      } else if (role === 'admin') {
        window.location.href = response.data.redirect_url_admin;
      } else {
        setSuccessMessage(' ');
      }
    } catch (error) {
      setSuccessMessage('Invalid login credentials');
    }
  }

  return (
  
  <>
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Login</h1>

            <p class="mt-4 text-gray-500">
              Provide blow credentials to sign in the system management
            </p>
          </div>

          <form onSubmit={handleSubmit} action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label for="email" class="sr-only">Email</label>

              <div class="relative">
                <input
                  type="email"
                  class="w-full rounded-lg border-2 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email" 
                  value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" class="sr-only">Password</label>

              <div class="relative">
                <input
                  type="password"
                  class="w-full rounded-lg border-2 border-grey-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password" 
                  value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                No account?
                <a class="underline" href="/blog">Sign up</a>
              </p>

              <button
                type="submit"
                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 ">
         
        <article class="overflow-hidden rounded-lg border border-gray-500 shadow-sm">
      
  <img
    alt="Office"
    src={image1}
    class="h-auto top-0 w-full object-cover"
  />

  <div class="p-4 sm:p-6 bg-blue-200">
    
      <h3 class="text-lg text-3xl text-black font-bold text-blue-500">
       Interneship Application Managment System
      </h3>
    

    <h1 class="font-bold text-3xl text-green-800 underline pl-25">Objectives</h1>
            <p class="  text-2xl pl-20 ">Providing practical work experience</p>
            <p class=" text-2xl pl-20 ">Exposure to the industry</p>
            <p class=" text-2xl pl-20 ">Professional networking</p>
            <p class=" text-2xl pl-20 ">Skill development</p>
            <p class=" text-2xl pl-20 ">Career exploration</p>
            <p class=" text-2xl pl-20 ">Improve communication</p>
  </div>
</article>
        </div>
      </section>
    </>
  );
}

export default Login
