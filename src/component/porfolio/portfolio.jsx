import React from 'react'
import './portfolio.css'
import img1 from '../../assets/Project1.jpg';
import img2 from '../../assets/Project2.jpg';
import img3 from '../../assets/Project3.jpg';
import img4 from '../../assets/Project4.jpg';

const data=[
  {
    id:1,
    Image:img1,
    title:'This is My First Ecommerce Website With a Very Basic UI Design',
    github:'https://github.com/DeeptheCoderboy/Ecommerce',
    demo:'https://ecommerceproject01.netlify.app/'
  },
  {
    id:2,
    Image:img2,
    title:'This is a Full-Stack Job Seeking Website Where Employers Can Post a Job and Job-Seeker Can apply on it',
    github:'https://github.com/DeeptheCoderboy/JOB_SEEKING_FRONTEND',
    demo:'https://job-seeking-webapp-deep.netlify.app/'
  },
  {
    id:3,
    Image:img3,
    title:'This is A Full-Stack Food-Delivery app Made With NextJs',
    github:'https://github.com/DeeptheCoderboy/FoodApp',
    demo:'https://food-xynzqszet-deep-bhattacharyyas-projects.vercel.app/'
  },
  {
    id:4,
    Image:img4,
    title:'This is TechBloging Website Made With JDBC,SQl,JSP,SERVLET ',
    github:'https://github.com/DeeptheCoderboy/TECHBLOG',
    demo:'https://dribbble.com'
  },
  // {
  //   id:5,
  //   Image:img5,
  //   title:'Charts templates & infographics in Figma',
  //   github:'https://github.com',
  //   demo:'https://dribbble.com'
  // },
  // {
  //   id:6,
  //   Image:img6,
  //   title:'Charts templates & infographics in Figma',
  //   github:'https://github.com',
  //   demo:'https://dribbble.com'
  // },
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
