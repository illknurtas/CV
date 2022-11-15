import React from 'react'
import './testimonals.css'
import Avt1 from '../../assets/avatar1.jpg';
import Avt2 from '../../assets/avatar2.jpg';
import Avt3 from '../../assets/avatar3.jpeg';
import Avt4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:Avt1,
    name: 'Tracey Rochelle',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, omnis blanditiis.     Nobis inventore itaque pariatur rerum nisi tempore distinctio, quos obcaecati architecto modi autem quia dignissimos illum quidem odit consectetur?'
  },
  {
    avatar:Avt2,
    name: 'Betul Yilmaz',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, omnis blanditiis.     Nobis inventore itaque pariatur rerum nisi tempore distinctio, quos obcaecati architecto modi autem quia dignissimos illum quidem odit consectetur?'
  },
  {
    avatar:Avt3,
    name: 'Martina Rosa',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, omnis blanditiis.     Nobis inventore itaque pariatur rerum nisi tempore distinctio, quos obcaecati architecto modi autem quia dignissimos illum quidem odit consectetur?'
  },
  {
    avatar:Avt4,
    name: 'Alexandre Gillete',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, omnis blanditiis.     Nobis inventore itaque pariatur rerum nisi tempore distinctio, quos obcaecati architecto modi autem quia dignissimos illum quidem odit consectetur?'
  },

]

const Testimonals = () => {
  return (
    <section id='testimonials'>
      <h2>testimonals</h2>
      <Swiper className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name,review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt='avatar1'/>
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonals