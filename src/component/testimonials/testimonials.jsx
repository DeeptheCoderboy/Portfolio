import React from 'react'
import'./testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3   from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';








const data=[
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus reiciendis molestiae sequi in, qui quasi laboriosam est fugiat ad officiis neque? Dolore beatae mollitia ut dolorem iste iusto temporibus."
  }
  , {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus reiciendis molestiae sequi in, qui quasi laboriosam est fugiat ad officiis neque? Dolore beatae mollitia ut dolorem iste iusto temporibus."
  },
  {
    avatar:AVTR3,
    name:'Kwane Despite',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus reiciendis molestiae sequi in, qui quasi laboriosam est fugiat ad officiis neque? Dolore beatae mollitia ut dolorem iste iusto temporibus."
  }, {
    avatar:AVTR4,
    name:'Krish Dey',
    review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus reiciendis molestiae sequi in, qui quasi laboriosam est fugiat ad officiis neque? Dolore beatae mollitia ut dolorem iste iusto temporibus."
  }
]









function Testimonials() {
  return (
    <div>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials_container"
        modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
     
        {

          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index}className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avtar1" />
               
              </div>
              <h5 className="client_name">{name}</h5>
                <small className="client_review">
                 {review}
                </small>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
      </section>
    </div>
  )
}

export default Testimonials
