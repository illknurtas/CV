import React from 'react'
import './experience.css'
import {FiCheckSquare} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiences</h2>
      <div className='container experience_container'>
        {/* FRONT-END */}
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>VueJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACK-END */}
        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>RestAPI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FiCheckSquare className='experience_details_icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience