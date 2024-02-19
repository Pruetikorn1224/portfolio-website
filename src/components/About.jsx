import React from 'react'
import Profile from './../assets/profile.jpeg'

const About = () => {
  return (
    <section id='about' className='w-full h-screen font-sans p-32 relative max-xl:h-fit max-md:p-16 max-sm:p-8'>
        <img src={Profile} alt='profile photo' 
          className='absolute object-cover top-32 right-32 h-[32rem] w-96 max-xl:h-96 max-xl:w-80 max-lg:static max-lg:mx-auto max-lg:pb-4 max-md:top-16'
          />
        <h1 className='text-8xl font-extrabold pb-6 max-xl:text-6xl max-sm:text-3xl'>Pruetikorn <br className='max-lg:hidden'/> Chirattitikarn</h1>
        <h3 className='text-4xl font-medium text-blue-500 pb-32 max-xl:text-3xl max-xl:pb-6 max-sm:text-xl'>Graduate student @UCL</h3>
        <div className='text-2xl/7 max-xl:text-lg max-sm:text-sm'>
          <p className='mb-2'>Experience in various fields, programming and design</p>
          <p className='mb-2'>Enthusiastic to learn new things</p>
          <p className='mb-2'>Enjoy to imagine new idea and implement to real world</p>
        </div>
    </section>
  )
}

export default About