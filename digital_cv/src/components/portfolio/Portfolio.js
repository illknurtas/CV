import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpeg'
import Img3 from '../../assets/portfolio3.jpg'


const data=[
  {
    id:1,
    img: Img1,
    title:'Stray animals application',
    github:'https://github.com/',
    demo:'https://github.com/illknurtas',
  },
  {
    id:2,
    img: Img2,
    title:'Movie application',
    github:'https://github.com/',
    demo:'https://github.com/illknurtas',
  },
  {
    id:3,
    img: Img3,
    title:'Digital CV',
    github:'https://github.com/',
    demo:'https://github.com/illknurtas',
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id,img,title,github, demo})=>{
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item_image'>
                  <img src={img} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item_cta'>
                  <a href={github} className='btn'
                      target='_blank'>Github</a>
                  <a href={demo} 
                      className='btn btn-primary'
                      target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio