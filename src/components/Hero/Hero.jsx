import React from 'react';
import './Hero.css';
import image from '../../images/WhatsApp Image 2025-01-04 at 19.36.03_f32c7086.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-image'>
        <img src={image} alt="Hero" />
      </div>
      <h1>
        <span>I'm Mohith,</span> and this is my first React-based portfolio build
      </h1>
      <p>
        I'm a front-end developer improving my skills using React to rebuild my portfolio
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
