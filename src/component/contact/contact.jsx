import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react'
import emailjs from 'emailjs-com'


function Contact() {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k0bcb28', 'template_0z45qos', form.current, '3_5XCsNu0P99st1R8')
    e.target.reset();
    
  };

  return (
 <section id="contact">
  <h5>Get in Touch</h5>
  <h2>Contact Me</h2>
  <div className="container contact_container">
    <div className="contact_options">
      <article className="contact_option">
       <MdOutlineEmail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>bhattacharyyadeep2002@gmail.com</h5>
        <a href="mailto:bhattacharyyadeep2002@gmail.com" target="_blank">Send a message</a>
      </article>
      <article className="contact_option">
       <RiMessengerLine className='contact_option-icon'/>
        <h4>Messenger</h4>
        <h5>Deep Bhattacharyya</h5>
        <a href="https://www.facebook.com/deep.bhattacharyya.946/" target="_blank">Send a message</a>
      </article>
      <article className="contact_option">
       <BsWhatsapp className='contact_option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+123456789</h5>
        <a href="https://api.whatsapp.com/send?phone=+9083524559" target="_blank">Send a message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
 </section>
  )
}

export default Contact
