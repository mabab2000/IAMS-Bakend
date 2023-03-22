import React from 'react';
import './Header.css';

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
    <div className="background-image">
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
<div className='header'class="text-blue-500   h-5 w-50 flex items-center justify-center">
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
    </div>
  );
  
}

export default Header;
