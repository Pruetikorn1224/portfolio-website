import React, { useRef } from 'react';

import Email from '../assets/email.png';
import Phone from '../assets/phone-call.png';

import FacebookIcon from '../assets/brands/facebook.png';
import IndeedIcon from '../assets/brands/indeed.png';
import LinkedinIcon from '../assets/brands/linkedin.png';
import GithubIcon from '../assets/brands/github.png';
import MediumIcon from '../assets/brands/medium.png';

const Contact = () => {

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

  return (
    <section id='contact' className='w-full h-fit font-sans px-32 animate-start max-md:px-16 max-sm:px-8'>
      <div className='w-full h-full items-center justify-center flex flex-col'>
      <div className='w-full bg-slate-700 h-px mb-16 max-sm:w-5/6'></div>
          <p className='text-4xl font-bold mb-8'>Contact</p>
          <div className='flex flex-col w-1/3 items-center justify-center mb-16 text-lg font-mono font-bold max-xl:w-2/3 max-md:w-5/6'>
            <div className='w-full h-fit flex items-center'>
              <img src={Email} className='object-fit m-4 h-12 w-12 rounded-full select-none'/>
              <span>p.chirattitikarn@outlook.com</span>
            </div>
            <div className='w-full h-fit flex items-center'>
              <img src={Phone} className='object-fit m-4 h-12 w-12 rounded-full select-none'/>
              <span>(+66) 90 483 9182</span>
            </div>
          </div>
          <div className='flex items-center justify-center pb-4'>
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