import React from 'react';
import './Navbar.modules.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li>
          <a href="#home" className='nav-link'>Home</a>
        </li>
        <li>
          <a href="#about-me" className='nav-link'>About Me</a>
        </li>
        <li>
          <a href="#projects" className='nav-link'>Projects</a>
        </li>
        <li>
          <a href="#contact" className='nav-link'>Contact</a>
        </li>
      </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  );
};
