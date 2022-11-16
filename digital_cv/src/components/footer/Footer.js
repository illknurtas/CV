import React from 'react'
import './footer.css'
import {CiLinkedin} from 'react-icons/ci'
import  {BsInstagram} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experiences</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/ilknurtas/'target='_blank'>
             <CiLinkedin/>
        </a>
        <a href='https://github.com/illknurtas'target='_blank'>
            <VscGithub/>
        </a>
      </div>
      <div className='copyright'>
        {new Date().getFullYear()}
        <small> &copy; All rights reserved by Ilknur Taş</small>
      </div>
    </footer>
  )
}

export default Footer