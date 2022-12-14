import React from 'react';
import './nav.css';
import {HiOutlineHome} from 'react-icons/hi';
import {AiOutlineUser} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" 
      onClick={()=> setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}>
        <HiOutlineHome/>
      </a>
      <a href="#about" 
      onClick={()=> setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
      </a>
      <a href="#experience"
      onClick={()=> setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}>
        <HiOutlineDocumentText/>
      </a>
      <a href="#services"
      onClick={()=> setActiveNav('#services')}
      className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine/>
      </a>
      <a href="#portfolio"
      onClick={()=> setActiveNav('#portfolio')}
      className={activeNav === '#portfolio' ? 'active' : ''}>
        <AiOutlineFundProjectionScreen/>
      </a>
      <a href="#contact"
      onClick={()=> setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}>
        <FiMail/>
      </a>
    </nav>
  )
}

export default Nav