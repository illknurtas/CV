import React from 'react'
import './footer.css'
import {TfiTwitter} from 'react-icons/tfi'
import  {BsInstagram} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Digital CV</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://facebook.com'><AiOutlineFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><TfiTwitter/></a>
      </div>
      <div className='copyright'>
        {new Date().getFullYear()}
        <small> &copy; All rights reserved by Ilknur Taş</small>
      </div>
    </footer>
  )
}

export default Footer