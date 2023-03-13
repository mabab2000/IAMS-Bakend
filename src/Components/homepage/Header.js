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
        <h1><center><font > Welcom to IAMS</font></center></h1>
        <h6><center><font size='15'>I</font>nternship <font size='15'>A</font>pplication <font size='15'>M</font>anagement <font size='15'>S</font>ystem</center></h6>
        <nav>
  <ul>
    <td className='hometd'><li><h3>Home</h3></li></td>
    <td className='hometd'><li><h3>About</h3></li></td>
    <td className='hometd'><li><h3>Contact</h3></li></td>
    <td className='hometd'><li><h3>Services</h3></li></td>
    

    <a href='/Login'><td className='hometdd' bgcolor='green'><li><h3><font color='white'>Sign in</font></h3></li></td></a>
    <a href='/blog'><td className='hometdd' bgcolor='green'><li><h3><font color='white'>Signup</font></h3></li></td></a>
  </ul>
</nav>

<div>
      
    </div>
      <h2>Available Internship place</h2>
      
        <ul className='available'>
          <li>Networking</li>
          <li>Software developemnt</li>
          <li>Contact</li>
        </ul>
      
    </header>
    </BackgroundImage>
    </div>
  );
  
}

export default Header;
