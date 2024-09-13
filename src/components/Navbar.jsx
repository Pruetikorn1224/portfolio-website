import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll';

import Menu from './../assets/menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
    }
  });

  return (
    <nav className='h-16 w-full items-center justify-center font-sans text-xl bg-gradient-to-b from-gray-200 to-white backdrop-blur-sm flex fixed z-20 max-sm:items-start'>
        <div className='max-md:hidden'>
            <Link activeClass='text-blue-600' to='about' spy={true} smooth={true} duration={500} className='cursor-pointer mx-12 hover:text-blue-600'>ABOUT</Link>
            <Link activeClass='text-blue-600' to='skills' spy={true} smooth={true} duration={500} className='cursor-pointer mx-12 hover:text-blue-600'>SKILLS</Link>
            <Link activeClass='text-blue-600' to='thesis' spy={true} smooth={true} duration={500} className='cursor-pointer mx-12 hover:text-blue-600'>THESIS</Link>
            <Link activeClass='text-blue-600' to='projects' spy={true} smooth={true} duration={500} className='cursor-pointer mx-12 hover:text-blue-600'>PROJECTS</Link>
            <Link activeClass='text-blue-600' to='contact' spy={true} smooth={true} duration={500} className='cursor-pointer mx-12 hover:text-blue-600'>CONTACT</Link>
        </div>
        <img src={Menu} alt="Mobile Menu" className='size-8 md:hidden'  onClick={() => setShowMenu(!showMenu)}/>
        <div className='w-1/2 h-fit z-2 p-2 top-16 absolute items-center justify-center bg-white border-blue-900 border rounded-md flex-col md:hidden' style={{display: showMenu ? 'flex' : 'none'}}>
          <Link activeClass='text-blue-600' to='about' spy={true} smooth={true} duration={500} className='px-2 py-2' onClick={() => setShowMenu(false)}>HOME</Link>
          <Link activeClass='text-blue-600' to='skills' spy={true} smooth={true} duration={500} className='px-2 py-2' onClick={() => setShowMenu(false)}>ABOUT</Link>
          <Link activeClass='text-blue-600' to='thesis' spy={true} smooth={true} duration={500} className='px-2 py-2' onClick={() => setShowMenu(false)}>THESIS</Link>
          <Link activeClass='text-blue-600' to='projects' spy={true} smooth={true} duration={500} className='px-2 py-2' onClick={() => setShowMenu(false)}>PORTFOLIO</Link>
          <Link activeClass='text-blue-600' to='contact' spy={true} smooth={true} duration={500} className='px-2 py-2' onClick={() => setShowMenu(false)}>CONTACT</Link>
        </div>
    </nav>
  )
}

export default Navbar