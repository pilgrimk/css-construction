import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import data from '../../constants/data'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();

  const handleNavigate = (anchor) => {
    let link = '/' + anchor;
    setClick(false);
    navigate(link);
  }

  const content =
    <>
      <div className='lg:hidden block absolute top-16 w-full
      z-50 left-0 right-0 bg-orange-900 transition'>
        <ul className='text-center text-xl p-20'>
          <Link spy={true} smooth={true} to='home'>
            <li className='my-4 py-4 border-b border-orange-800 
            hover:bg-orange-500 hover:rounded cursor-pointer' 
            onClick={() => handleNavigate('home')}>
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to='about'>
            <li className='my-4 py-4 border-b border-orange-800 
            hover:bg-orange-500 hover:rounded cursor-pointer' 
            onClick={() => handleNavigate('about')}>
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to='gallery'>
            <li className='my-4 py-4 border-b border-orange-800 
            hover:bg-orange-500 hover:rounded cursor-pointer' 
            onClick={() => handleNavigate('gallery')}>
              Gallery
            </li>
          </Link>
          <Link spy={true} smooth={true} to='contact'>
            <li className='my-4 py-4 border-b border-orange-800 
            hover:bg-orange-500 hover:rounded cursor-pointer' 
            onClick={() => handleNavigate('contact')}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-orange-800 to-orange-400'>
      <div className='h-10vh flex justify-between 
      text-white lg:py-5 px-20 py-4 border-orange-800'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>
            {data.contactUs.name_short}
          </span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center 
        justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link spy={true} smooth={true} to='home' 
              onClick={() => handleNavigate('home')}>
                <li className='hover:text-black transition hover:border-b-2 
                border-orange-900 hover:border-orange-600 cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to='about' 
              onClick={() => handleNavigate('about')}>
                <li className='hover:text-black transition hover:border-b-2 
                border-orange-900 hover:border-orange-600 cursor-pointer'>
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to='gallery' 
              onClick={() => handleNavigate('gallery')}>
                <li className='hover:text-black transition hover:border-b-2 
                border-orange-900 hover:border-orange-600 cursor-pointer'>
                  Gallery
                </li>
              </Link>
              <Link spy={true} smooth={true} to='contact'
              onClick={() => handleNavigate('contact')}>
                <li className='hover:text-black transition hover:border-b-2 
                border-orange-900 hover:border-orange-600 cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}

        </button>
      </div>
    </nav>
  )
}

export default Navbar