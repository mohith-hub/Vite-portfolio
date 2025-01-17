import React from 'react'
import './Contact.css'
import mail_icon from '../../images/mail.png'
import location_icon from '../../images/maps-and-flags.png'
import call_icon from '../../images/phone-call.png'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-title'>
        <h1 id='contact'>Get in touch</h1>
        <img src=''/>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>i'm currently available to take on new projects , so feel free to contact me </p>
          <div className='contact-details'>
            <div className='contact-detail'>
               <img src={mail_icon}/><a href='mailto:mohithpupppala@gmail.com'>mohithpupppala@gmail.com</a>
            </div>
            <div className='contact-detail'>
            <img src={call_icon}/><p>+91 **********</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon}/><p>Vizag,India</p>
            </div>
          
          </div>
        </div>
        <form  className='contact-right'>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name'/>
            <label>Your Email</label>
            <input type='email' placeholder='Enter your email' name='email'/>
            <label>Write your message here</label>
            <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
            <button type='submit'className='contact-submit'>Submit now </button>
        </form>
      </div>
    </div>
  )
}

export default Contact