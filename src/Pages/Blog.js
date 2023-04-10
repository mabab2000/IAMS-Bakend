
import axios from 'axios';
import image1 from './image1.PNG';
import React, { useState, useEffect } from 'react';
import './index.css';
import Header from '../Components/homepage/Header';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setError('The password confirmation does not match.');
      return;
    }
    const data = new FormData();
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('gender', formData.gender);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('password_confirmation', formData.password_confirmation);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add_user', data);
      setSuccess(true);
      setSuccessMessage(response.data.message);
      
      if (response.data.redirect_url) {
        const { message, status, redirect_url } = response.data;
        
        window.location.href = response.data.redirect_url;
      }
      // Clear form data
      setFormData({
        first_name: '',
        last_name: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
      });
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message);
      if (error.response.data.message.includes('Duplicate entry')) {
        setError('Email already exist');
      }
    }
  }
  
 

  return (
    <>
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Create new account</h1>

            <p class="mt-4 text-gray-500">
              Fill the form below with valid data to create your new account in internship application management system
            </p>
          </div>

          <form onSubmit={handleSubmit} action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
          {error && <div className="error">{error}</div>}
            <div>
              <label for="email" class="sr-only">First name</label>

              <div class="relative">
                <input
                name="first_name" onChange={handleChange} value={formData.first_name} required
                  type="text"
                  class="w-full rounded-lg border-2 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter your first name"
                 />

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
                      />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Last name</label>

              <div class="relative">
                <input
                name="last_name" onChange={handleChange} value={formData.last_name} required
                  type="text"
                  class="w-full rounded-lg border-2 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter your last name"
                 />

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
                      />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Gender</label>

              <div class="relative">
              <select
  name="gender"
  value={formData.gender}
  onChange={handleChange}
  required
  class="w-full rounded-lg border-2 border-gray-200 p-2 pr-8 text-sm shadow-sm"
>
  <option class="text-grey-200" value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
                 

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
                      />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Phone number</label>

              <div class="relative">
                <input
               name="phone" onChange={handleChange} value={formData.phone} maxLength={10} required
                  type="text"
                  class="w-full rounded-lg border-2 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Mobile phone"
                 />

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
                      />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>

              <div class="relative">
                <input
                name="email" onChange={handleChange} value={formData.email} required
                  type="text"
                  class="w-full rounded-lg border-2 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email adress"
                 />

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
                      />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Password</label>

              <div class="relative">
                <input
                name="password" onChange={handleChange} value={formData.password} required
                  type="password"
                  class="w-full rounded-lg border-2 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Password"
                 />

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
                       />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" class="sr-only">Confirm password</label>

              <div class="relative">
                <input
                name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} required
                  type="password"
                  class="w-full rounded-lg border-2 border-grey-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirm password"
                 />
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
                     />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                     />
                  </svg>
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                Already have an account?
                <a class="underline" href="/login">Sign in</a>
              </p>
              {successMessage && <div className="success">{successMessage}</div>}
             
              <button
                type="submit"
                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
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
  )
}

export default Blog





