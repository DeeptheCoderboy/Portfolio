import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'




  document.addEventListener('wheel',(event)=>{
    // console.log(event.pageY)
     if(event.pageY>1200){
 
      
      document.getElementById("nav1").style.visibility="visible"
     }
     else{
      document.getElementById("nav1").style.visibility="hidden"
      
     }
  })
  




const Nav=()=> {
  const[activeNav,setactiveNav]=useState('#')
  return (
    <div>
      <nav id="nav1">
    <a href="#"onClick={()=>setactiveNav("#")} className={activeNav==='#'?"active":""}><AiOutlineHome/></a>
    <a href="#about"onClick={()=>setactiveNav("#about")}className={activeNav==='#about'?"active":""}><AiOutlineUser/></a>
    <a href="#experience"onClick={()=>setactiveNav("#experience")}className={activeNav==='#experience'?"active":""}><BiBook/></a>
    <a href="#services"onClick={()=>setactiveNav("#services")}className={activeNav==='#services'?"active":""}><RiServiceLine/></a>
    <a href="#contact"onClick={()=>setactiveNav("#contact")}className={activeNav==='#contact'?"active":""}><BiMessageDetail/></a>
    </nav>
      
    
    </div>
  )
}

export default Nav
