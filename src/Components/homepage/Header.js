import React from 'react';


import image1 from './image1.PNG';

const Header = () => {
    function BackgroundImage(props) {
        const backgroundImageStyle = {
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        };
      
        return (
          <div style={backgroundImageStyle}>
            {props.children}
          </div>
        );
      }
  return (
  

  <><section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">IAMS</h1>

        <p class="mt-4 text-gray-500">
         Internership Applcation Management System
        </p>
      </div>

      <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              class="w-full rounded-lg border-grey-800 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email" />

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
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password" />

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
            <a class="underline" href="">Sign up</a>
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

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Welcome"
        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        class="absolute inset-0 h-full w-full object-cover" />
    </div>
  </section><div className="background-image">
      <BackgroundImage bgImage={image1}>
        <header>

          <div class="text-white-500 bg-green-500 h-20 w-500 flex items-center justify-center">
            <h1 class="text-4xl text-white font-bold">Welcome to IAMS</h1>
          </div>
          <div class="flex justify-between bg-blue-500 px-4 py-2">
            <div class="flex items-center">
              <a href="/" class="text-white  font-bold hover:bg-blue-200 px-4 py-2 rounded">
                Home
              </a>

            </div>
            <a href="/blog" class="text-white   font-bold hover:bg-green-500 px-4 py-2 rounded ml-auto">
              Register
            </a>
            <a href="/login" class="text-white  font-bold hover:bg-green-500 px-4 py-2 rounded ">
              Login
            </a>
          </div>
          <div className='header' class="text-blue-500   h-5 w-50 flex items-center justify-center">
            <h5 class="text-0xl bg-white font-italic text-black">Internership Applicaton Management System</h5>
          </div>
          <div class=" h-20"></div>

          <div class=" rounded w-3/10">
            <h1 class="font-bold text-2xl text-green-800 underline pl-4">Objectives</h1>
            <p class="text-white pl-3 ">Providing practical work experience</p>
            <p class="text-white pl-3 ">Exposure to the industry</p>
            <p class=" text-white pl-3 ">Exposure to the industry</p>
            <p class="text-white pl-3 ">Professional networking</p>
            <p class="text-white pl-3 ">Skill development</p>
            <p class="text-white pl-3 ">Career exploration</p>
          </div>







        </header>
      </BackgroundImage>
    </div></>
  );
  
}

export default Header;
