import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';
import img4 from '../../assets/portfolio4.jpg';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.jpg';
const data=[
  {
    id:1,
    Image:img1,
    title:'Crypto Currency Dashboard & Financial visualization ',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:2,
    Image:img2,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:3,
    Image:img3,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:4,
    Image:img4,
    title:'Maintaining tasks and tracking progress',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:5,
    Image:img5,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:6,
    Image:img6,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
]

 function Portfolio() {
  return (

    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
      {
        data.map(({id,Image,title,github,demo})=>{
        return(
          <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary'>Live Demo</a>
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
