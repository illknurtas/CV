import React from 'react'
import './services.css';
import {BsCheck2Circle} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <div className='container services_container'>
        {/* BEGINNING OF UI/UX  */}
        <article className='service'>
          <div >
            <h3 className='service_head'>UI/UX Design</h3>
            <ul className='service_list'>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
       {/* BEGINNING OF WEB DEVELOPMENT */}
       <article className='service'>
          <div >
            <h3 className='service_head'>Web Development</h3>
            <ul className='service_list'>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
       {/* BEGINNING OF CONTENT CREATION */}
       <article className='service'>
          <div >
            <h3 className='service_head'>Content Creation</h3>
            <ul className='service_list'>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className='service_last_icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services