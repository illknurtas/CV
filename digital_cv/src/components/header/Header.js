import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>İlknur Taş</h1>
        <h5 className="text-light">Junior Software Developer</h5>
        <CTA/>
        <div className='me'>
          <img src={Profile} alt='me'/>
        </div>
        {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header