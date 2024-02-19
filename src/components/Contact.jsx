import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import FacebookIcon from '../assets/brands/facebook.png';
import IndeedIcon from '../assets/brands/indeed.png';
import LinkedinIcon from '../assets/brands/linkedin.png';
import GithubIcon from '../assets/brands/github.png';
import MediumIcon from '../assets/brands/medium.png';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o293cf9', 'template_azqvgun', form.current, 'a1k6alHHj6xoO6IAX')
      .then((result) => {
          console.log(result.text);
          alert('Email has been sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

  return (
    <section id='contact' className='w-full h-fit font-sans px-32 max-md:px-16 max-sm:px-8'>
      <div className='w-full h-full items-center justify-center flex flex-col'>
      <div className='w-full bg-slate-700 h-px mb-16 max-sm:w-5/6'></div>
          <p className='text-4xl font-bold mb-20'>Contact</p>
          <div className='flex w-1/2  max-xl:w-2/3 max-md:w-5/6'>
            <form ref={form} onSubmit={sendEmail} className='w-full mb-12 flex flex-col space-y-8'>
              <input type='text' className='p-2 border border-blue-900 rounded-lg' name='from_name' placeholder='Your Name' />
              <input type='email' className='p-2 border border-blue-900 rounded-lg' name='from_email' placeholder='Your Email'/>
              <textarea className='p-2 border border-blue-900 rounded-lg' name='message' rows='5' placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className='p-2 bg-blue-600 text-white text-lg font-bold rounded-md hover:bg-blue-900'>Submit</button>
            </form>
          </div>
          <div className='flex items-center justify-center'>
            <img src={FacebookIcon} onClick={handleClick("https://www.facebook.com/preutikorn.chirattitikarn")} alt='facebook' className='object-fit cursor-pointer m-4 h-12 w-12 rounded-full border-blue-900 border'/>
            <img src={IndeedIcon} onClick={handleClick("https://profile.indeed.com/p/pruetikornc-yn9nb8y")} alt='indeed' className='object-fit cursor-pointer m-4 h-12 w-12 rounded-full border-blue-900 border'/>
            <img src={LinkedinIcon} onClick={handleClick("https://www.linkedin.com/in/ch-pruetikorn")} alt='linkedin' className='object-fit cursor-pointer m-4 h-12 w-12 rounded-full border-blue-900 border'/>
            <img src={GithubIcon} onClick={handleClick("https://github.com/Pruetikorn1224")} alt='github' className='object-fit cursor-pointer m-4 h-12 w-12 rounded-full border-blue-900 border'/>
            <img src={MediumIcon} onClick={handleClick("https://medium.com/@p.chirattitikarn")} alt='medium' className='object-fit cursor-pointer m-4 h-12 w-12 rounded-full border-blue-900 border'/>
          </div>
      </div>
    </section>
  )
}

export default Contact