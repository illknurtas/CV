import React from 'react';
import './nav.css';
import {HiOutlineHome} from 'react-icons/hi';
import {AiOutlineUser} from 'react-icons/ai';
import {CiMail} from 'react-icons/ci';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {RiServiceLine} from 'react-icons/ri';

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <HiOutlineHome/>
      </a>
      <a href="#about">
        <AiOutlineUser/>
      </a>
      <a href="#experience">
        <HiOutlineDocumentText/>
      </a>
      <a href="#services">
        <RiServiceLine/>
      </a>
      <a href="#contact">
        <CiMail/>
      </a>
    </nav>
  )
}

export default Nav