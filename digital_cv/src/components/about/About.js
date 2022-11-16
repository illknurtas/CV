import React from 'react';
import './about.css';
import Me from '../../assets/aboutpic.jpg'
import {FiAward} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFolder} from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_pic'>
            <img src={Me} alt='about pic'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiAward/>
              <h5>Experience</h5>
              <small>3 months software intern</small>
            </article>
            <article className='about_card'>
              <BsFolder/>
              <h5>projects</h5>
              <small>4 projects completed</small>
            </article>
          </div>
          <p>
            I freshly graduated from computer engineering degree. 
            Proficient in desktop development environments. 
            Adept using HTML, CSS, JavaScript, and other programming languages to produce clean code. 
            Well-organized and collaborative team player with strong communication and analytical abilities. 
            Fluent in English. 

          </p>
          {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About