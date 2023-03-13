import React from 'react';
function Navbar(){
    return (
        <div className='Navbar'>
        <div className='Navbar-menu'>
       Welcome to IAMS
        </div>
        <ul className="Navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/blog">signup</a></li>
        <li><a href="/blog">Sign in</a></li>
        </ul>
        </div>
    )
}
export default Navbar