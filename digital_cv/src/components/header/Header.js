import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../assets/profile.jpeg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>İlknur Taş</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={Profile} alt='me'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header