import React from 'react'
import Profile from './../assets/photo.jpeg'

const About = () => {
  return (
    <section id='about' className='w-full h-screen font-sans p-32 relative max-xl:h-[32rem] max-md:p-16 max-sm:p-8'>
        <img src={Profile} alt='profile photo' 
          className='absolute object-cover top-16 right-0 h-[32rem] w-full z-0 brightness-75 max-xl:h-96 max-md:hidden'
        />
        <h1 className='absolute top-48 text-8xl font-extrabold pb-6 animate-start z-10 max-xl:text-6xl max-xl:top-40 max-lg:top-32 md:text-white'>Pruetikorn <br/> Chirattitikarn</h1>
        <h3 className='absolute top-[28rem] text-4xl font-medium text-blue-500 pb-32 animate-start z-10 max-xl:text-3xl max-xl:top-72 max-xl:pb-6 max-sm:text-xl'>Graduate student @UCL</h3>
        <div className='absolute top-[38rem] text-2xl/7 animate-start z-10 font-mono max-xl:text-lg max-xl:top-[21rem] max-xl:text-white max-sm:text-sm max-md:text-black'>
          <p className='mb-2'>Experience in various fields, programming and design</p>
          <p className='mb-2'>Enthusiastic to learn new things</p>
          <p className='mb-2'>Enjoy to imagine new creative idea</p>
        </div>
    </section>
  )
}

export default About