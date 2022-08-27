import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

function Contact() {

  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ywkxo9', 'template_i3pywb8', form.current, 'BRfCr78VfKw8q1y0v')
      .then((result) => {
          console.log('Message sent');
          navigate('/Thanks')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <AnimatedPage className='centered center-mobile'>
      <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Me</h1>
          <input className='bros' id='name' name='user_name' placeholder='Full Name' type={'text'} />
          <input className='bros' name='user_email' placeholder='Email' type={'email'} />
          <input placeholder='Subject' id='subject' name="subject" type={'text'} />
          <textarea placeholder='Body' id='message' name="message" cols="60" rows="10"></textarea>
          <input type='submit' className='submit-btn' value='Send' />
        </form>
      </div>
    </AnimatedPage>
  )
}

export default Contact