import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-header.png'
import Headersocial from './Headersocial'

const Header=()=> {
  return (
    <div>
     <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Deep Bhattacharyya</h1> 
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA/>
        <Headersocial/>
        <div className="me">
          <img className="me-img"src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

     </header>
    </div>
  )
}

export default Header
