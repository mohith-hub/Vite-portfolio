import React from 'react';
import './About.css';
import image from '../../images/WhatsApp Image 2025-01-04 at 19.36.03_f32c7086.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1 id='about-me'>About Me</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={image} alt="About Me" />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>Front-end developer using React.js</p>
            <p>Building my portfolio again from scratch using React.js</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width: '70%'}}/></div>
            <div className='about-skill'><p>React.js</p><hr style={{width: '50%'}}/></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{width: '50%'}}/></div>
            <div className='about-skill'><p>C</p><hr style={{width: '70%'}}/></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>3</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>5+</h1>
          <p>SKILLS LEARNED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
